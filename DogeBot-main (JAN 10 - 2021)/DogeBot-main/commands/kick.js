const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "This kicks the user from the server.",
    type: "moderation",
    execute(msg, args) {
        let reason = args.slice(1).join(" ");
      
        if (!msg.mentions.users.first()) {
            msg.reply('Nobody was mentioned to ban!');
        }
      
        if (msg.author === msg.mentions.users.first()) {
            msg.reply('You are unable to ban yourself!');
            return;
        }
      
        if (!msg.member.permissions.has("KICK_MEMBERS")) {
            msg.reply('You do not have permission!');
            return;
        }
      
        if (!msg.guild.me.permissions.has("KICK_MEMBERS")) {
            msg.reply('I do not have the KICK MEMBERS permission!');
            return;
        }

        try {
            if (!reason) {
                msg.mentions.members.first().kick(`No reason was provided | Kicked by ${msg.author.id}`);
                return;
            } else {
                msg.mentions.members.first().kick(`${reason} | Kicked by ${msg.author.id}`);
            }
            
            msg.channel.send(`${msg.mentions.users.first().tag} has been successfully kicked.`); 
        } catch (err) {
            msg.channel.send(`${msg.mentions.users.first().tag} was unable to be kicked`); 
        }
    }
}