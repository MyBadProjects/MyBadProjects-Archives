const Discord=require('discord.js');

module.exports = {
    name: "ping",
    description: "Show the bot's ping",
    execute(msg) {
        var ping = Math.round(msg.client.ws.ping);
            
        const embed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setColor(0xbc3434)
        .setDescription('Doge asks Doggo if he approves of the ping')
        .setFooter('Doge Bot')
        .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif')
        .addField('Ping',`Doggo approves of the ping at ${ping}ms :white_check_mark:`);

        msg.channel.send({embed});
    }
};