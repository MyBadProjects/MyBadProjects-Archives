const Discord = require('discord.js');

module.exports = {
    name: "announcement",
    description: "This repeats what was said.",
    type: "misc",

    execute(msg,args) {
        function capitalize(s) {
            return s.replace( /\w\S*/g, function(text) {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            });
        }

        const embed = new Discord.MessageEmbed()
        .setTitle("Announcement")
        .setColor(0xbc3434)
        .setFooter('Doge Bot')
        .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif')
        .setDescription(
            capitalize(msg.content.substring('dogeannouncement'.length))
        );
        msg.channel.send({embed});
    }
}