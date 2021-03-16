const Discord=require('discord.js');

module.exports = {
    name: "sendlogs",
    description: "This sends the user the chat logs.",
    execute(msg) {
        if(!msg.member.hasPermission('ADMINISTRATOR')){
            msg.author.send('You do not have permissions to do that!');
            return;
        }
            
        const embed = new Discord.MessageEmbed()
        .setTitle('Chat Logs')
        .setColor(0xbc3434)
        .setDescription('This is the chat logs')
        .setFooter('Doge Bot')
        .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif')
        .addField('WARNING','Do not share this information without permission!');
        msg.author.send({embed});
        
        const attachment = new Discord.MessageAttachment();
        attachment.setFile('json.sqlite');
        msg.author.send(attachment);
    }
};