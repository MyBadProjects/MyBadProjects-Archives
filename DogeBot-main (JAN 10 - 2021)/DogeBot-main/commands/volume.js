module.exports = {
    name: "volume",
    description: "This sets the volume for the current song.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        const volume = parseInt(args);

        if (isNaN(volume)) return msg.channel.send('Please enter a valid number!');
        client.distube.setVolume(msg, volume);
        msg.channel.send(`Volume set to \`${volume}\``);
    }
}