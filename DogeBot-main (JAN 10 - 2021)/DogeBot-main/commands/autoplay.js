module.exports = {
    name: "autoplay",
    description: "This toggles autoplay.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        let mode = client.distube.toggleAutoplay(message);
        msg.channel.send('Set autoplay mode to `' + (mode ? "On" : "Off") + '`');
    }
}
