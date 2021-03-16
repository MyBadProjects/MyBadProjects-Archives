module.exports = {
    name: "skip",
    description: "This skips the current song.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        client.distube.skip(msg);
    }
}