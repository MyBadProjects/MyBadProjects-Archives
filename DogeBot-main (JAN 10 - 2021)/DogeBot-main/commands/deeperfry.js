const {
    createCanvas, 
    loadImage
} = require('canvas');
const request = require('node-superfetch');

module.exports = {
    name: "deeperfry",
    description: "evven more 🅱️oi :joy::ok_hand:",
    type: "images",
    async execute(msg) {
        let img = msg.attachments.array();
        if (img.length === 0) return msg.channel.send('Please upload an image to deepfry!');
        if (img.length < 1) return msg.channel.send('Please only upload 1 image!');

        try {
            const {
                body
            } = await request.get(img[0].url);
            const data = await loadImage(body);
            const canvas = createCanvas(await data.width, await data.height); 
            
            const ctx = canvas.getContext('2d');
            await ctx.drawImage(data, 0, 0, data.width, data.height);

            await desaturate(ctx, -20, 0, 0, data.width, data.height);
            await contrast(ctx, 0, 0, data.width, data.height);
            await invert(ctx, 1, 1, data.width, data.height);
            await fishEye(ctx, 50*10, 1, 1, data.width, data.height);

            const attachment = canvas.toBuffer('image/jpeg', {quality: 0.1});
            if (Buffer.byteLength(attachment) > 8e+6) return msg.channel.send('The image attached was too big!');
            
            console.log('send');
            return msg.channel.send({files: [{ attachment, name:'deepfried.jpeg'}] })


        } catch (err) {
            throw err;
        }
    }
};

function contrast(ctx, x, y, width, height) {
    const data = ctx.getImageData(x, y, width, height);
    const factor = (259 / 100) + 1;
    const intercept = 128 * (1 - factor);
    for (let i = 0; i < data.data.length; i += 4) {
        data.data = (data.data[i] * factor) + intercept;
        data.data[i+1]  = (data.data[i+1] * factor) + intercept;
        data.data[i+2]  = (data.data[i+2] * factor) + intercept;
    }
    ctx.putImageData(data, x, y);
    return ctx;
}

function desaturate(ctx, level, x, y, width, height) {
    const data = ctx.getImageData(x, y, width, height);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const dest = ((i * width) + j) * 4;
            const grey = Number.parseInt((0.2125 * data.data[dest]) + (0.7154 * data.data[dest + 1]) + (0.0721 * data.data[dest + 2]), 10);
            data.data[dest] += level * (grey - data.data[dest])
            data.data[dest+1] += level * (grey - data.data[dest+1])
            data.data[dest+2] += level * (grey - data.data[dest+2])
        }
    }
    ctx.putImageData(data, x, y);
    return ctx;
}

function invert(ctx, x, y, width, height) {
    const data = ctx.getImageData(x, y, width, height);

    for (var i = 0; i < data.data.length; i += 4) {
        data.data[i] = 255 - data.data[i]; // red
        data.data[i+1] = 255 - data.data[i+1]; // green
        data.data[i+2] = 255 - data.data[i+2]; // blue

        if (data.data[i]<1)data.data[i]=1;
        if (data.data[i+1]<1)data.data[i+1]=1;
        if (data.data[i+2]<1)data.data[i+2]=1;
        
        if (data.data[i]>255)data.data[i]=255;
        if (data.data[i+1]>255)data.data[i+1]=255;
        if (data.data[i+2]>255)data.data[i+2]=255;
    }  
 
  
    ctx.putImageData(data, x, y);
    return ctx;
}

function fishEye(ctx, level, x, y, width, height) {
    const data = ctx.getImageData(x, y, width, height);
    const source = new Uint8Array(data.data);

    for (let i = 0; i < data.data.length; i += 4){
        const sx = (i / 4) % data.width;
        const sy = Math.floor(i / 4 / data.width);

        const dx = Math.floor(data.width / 2) - sx;
        const dy = Math.floor(data.height / 2) - sy;
        
        const dist = Math.sqrt((dx * dx) + (dy * dy));

        const x2 = Math.round((data.width / 2) - (dx * Math.sin(dist / (level * Math.PI) / 2)));
        const y2 = Math.round((data.height / 2) - (dx * Math.sin(dist / (level * Math.PI) / 2)));
        const i2 = ((y2 * data.width) + x2) *4;

        data.data[i] = source[i2];
        data.data[i+1] = source[i2+1];
        data.data[i+2] = source[i2+2];
        data.data[i+3] = source[i2+3];
    }

    ctx.putImageData(data, x, y);
    return ctx;
}