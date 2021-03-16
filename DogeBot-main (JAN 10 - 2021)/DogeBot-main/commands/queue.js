module.exports = {
    name: "queue",
    description: "This sends queue.",
    type: "music",

    execute(msg,args,commands,client) {
        const queue = client.distube.getQueue(msg)
        if (!queue) return msg.channel.send('There is nothing playing!')
        const q = queue.songs.map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        msg.channel.send(`**Server Queue**\n${q}`)
    }
}