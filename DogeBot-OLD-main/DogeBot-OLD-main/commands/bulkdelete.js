const Discord=require('discord.js');

module.exports = {
    name: "bulkdelete",
    description: "Bulk deletes messages",
    execute(msg) {        
        if(!msg.member.hasPermission('KICK_MEMBERS')){
            msg.channel.send('You do not have permissions to do that!');
            return;
        }
        
        try {
            const prefix = msg.content.substring(0,1);
            const amount = msg.content.slice(prefix.length).trim().replace(/\D/g, '').split(/ +/);
    
            for (let i = 0; i < amount; i++){
                msg.channel.bulkDelete(1);
            }
    
            const embed = new Discord.MessageEmbed()
            .setTitle('Bulk Delete')
            .setColor(0xbc3434)
            .setDescription('Doge deletes the messages')
            .setFooter('Doge Bot')
            .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif')
            .addField('Doggo',`Doggo has deleted ${amount} messages! :white_check_mark:`);
    
            msg.channel.send({embed});
        } catch {
            const embed = new Discord.MessageEmbed()
            .setTitle('Bulk Delete')
            .setColor(0xbc3434)
            .setDescription('Doge deletes the messages')
            .setFooter('Doge Bot')
            .setThumbnail('https://cdn.discordapp.com/attachments/772533790169759757/797309728061259786/tenor.gif')
            .addField('Doggo',`Doggo was unable to delete ${amount} messages due to an error!`);
    
            msg.channel.send({embed});
        }
    }
};