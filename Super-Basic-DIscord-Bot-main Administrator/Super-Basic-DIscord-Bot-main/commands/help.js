const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "help",
    description: "This shows information about the bot.",
    execute(msg, args, cmds, client) {
        function capitalize(s) {
            return s.charAt(0).toUpperCase() + s.slice(1)
        }

        const embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setColor(0xbc3434)
        .setDescription("This contains info about commands.")
        .setFooter("yo mama")
        .setThumbnail("https://cdn.discordapp.com/attachments/795307667144966166/795307737633914880/ICON.jpg");

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            embed.addField(capitalize(command.name), command.description);
        }

        setTimeout(() => {
            msg.channel.send({embed});
        }, 100);
    }
};