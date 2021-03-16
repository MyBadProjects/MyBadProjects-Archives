module.exports = {
    name: "continue",
    description: "This continues the current song.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        client.distube.resume(msg);

        msg.channel.send('Resumed Playing!');
    }
}