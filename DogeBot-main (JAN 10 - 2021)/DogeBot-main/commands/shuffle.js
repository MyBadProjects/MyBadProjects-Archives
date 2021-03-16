module.exports = {
    name: "suffle",
    description: "This suffles the current queue.",
    type: "music",

    execute(msg,args,commands,client) {
        if(!msg.member.voice.channel) return msg.channel.send('You are not in a voice channel!');
        
        client.distube.shuffle(msg);
        msg.channel.send('Shuffled queue!')
    }
}