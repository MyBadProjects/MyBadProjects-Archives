module.exports = {
    name: "resume",
    description: "This resumes the current song.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        client.distube.resume(msg);
        msg.channel.send('Continued playing current song!')
    }
}