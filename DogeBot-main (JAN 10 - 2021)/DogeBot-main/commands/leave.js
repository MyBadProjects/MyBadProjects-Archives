module.exports = {
    name: "leave",
    description: "This leaves the current voice channel.",
    type: "music",
    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        client.distube.stop(msg);
        msg.channel.send('Stopped playing. Leaving channel.');
    }
}