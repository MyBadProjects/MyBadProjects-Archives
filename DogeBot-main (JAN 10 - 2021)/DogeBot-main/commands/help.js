const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');


module.exports = {
    name: "help",
    description: "This shows information about the bot.",
    type: "help",
    execute(msg,args,commands,client) {
        function capitalize(s) {
            return s.replace( /\w\S*/g, function(text) {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            });
        }

        const argsclean = `${args}`.replace(/\D/g,'');
        if (!argsclean) {msg.channel.send('You have not specified a valid page!'); return;}

        const embed = new Discord.MessageEmbed().setTitle("Help").setColor(0xbc3434).setDescription("This contains info about commands.").setFooter('Doge Bot').setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif');
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        var total = 0;
        for (const file of commandFiles) {
            const command = require(`./${file}`);
            total++;

            if (total <= 25) if (argsclean==1) embed.addField(capitalize(command.name),`[${command.type}] ${capitalize(command.description)}`);
            if (total >25) if (argsclean==2) embed.addField(capitalize(command.name),`[${command.type}] ${capitalize(command.description)}`);
            if (total==client.commandsAmount) msg.author.send({embed});

            console.log(total);
        }
    }
};