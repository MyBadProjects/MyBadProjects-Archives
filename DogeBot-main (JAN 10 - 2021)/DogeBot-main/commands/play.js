module.exports = {
    name: "play",
    description: "This plays the song mentioned.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');

        const music = args.join(' ');

        client.distube.play(msg, music);
    }
}