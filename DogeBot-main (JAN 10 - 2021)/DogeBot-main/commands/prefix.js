const Discord=require('discord.js');

module.exports = {
    name: "prefix",
    description: "Show the bot's prefix",
    type: "help",
    execute(msg, args, commands, client, prefix) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Prefix')
        .setColor(0xbc3434)
        .setDescription("Doge's prefix.")
        .setFooter('Doge Bot')
        .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif')
        .addField('Prefix',`Doge's prefix is ${prefix}.`);

        msg.channel.send({embed});
    }
};