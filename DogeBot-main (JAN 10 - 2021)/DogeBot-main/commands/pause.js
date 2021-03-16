module.exports = {
    name: "pause",
    description: "This pauses the current song.",
    type: "music",
    
    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        client.distube.pause(msg);
        msg.channel.send('Paused current song!')
    }
}