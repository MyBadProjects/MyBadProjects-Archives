module.exports = {
    name: "stop",
    description: "This stops the current song.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        client.distube.stop(msg);
        msg.channel.send('Stopped playing. Leaving channel.');
    }
}