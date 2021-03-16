const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "snipe",
    description: "mlg trickshot noscope 360 ghostping",
    type: "misc",
    execute(msg, args) {
        let data = db.get(`SNIPE.${msg.guild.id}`);
        if(!data) return msg.channel.send('Nothing to snipe here!');

        let content = data.CONTENT,
        channel = data.CHANNEL,
        user = data.USER;

        const embed = new Discord.MessageEmbed()
        .setTitle("Snipe")
        .setColor('RANDOM')
        .setDescription("Whom'st trigger the Doge")
        .setFooter('Doge Bot')
        .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif');
        embed.addField(`Content:`, content);
        embed.addField(`Channel:`, channel);
        embed.addField(`User:`, user);

        msg.channel.send({embed});
    }
}