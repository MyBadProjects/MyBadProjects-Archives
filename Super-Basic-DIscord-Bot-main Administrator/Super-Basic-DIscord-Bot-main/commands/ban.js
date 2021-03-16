const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "This bans the user from the server. [User, Reason, Days]",
    execute(msg, args, cmds, client) {
        let reason = args.slice(1).join(" ");
      
        if (!msg.mentions.users.first()) {
            msg.reply('Nobody was mentioned to ban!');
        }
      
        if (msg.author === msg.mentions.users.first()) {
            msg.reply('You are unable to ban yourself!');
            return;
        }
      
        if (!msg.member.permissions.has("BAN_MEMBERS")) {
            msg.reply('You do not have permission!');
            return;
        }
      
        if (!msg.guild.me.permissions.has("BAN_MEMBERS")) {
            msg.reply('I do not have the BAN MEMBERS permission!');
            return;
        }

        try {
            msg.guild.members.ban(msg.mentions.users.first(), { reason: reason });
            msg.reply(`${msg.mentions.users.first().tag} has been successfully banned.`); 
        } catch (err) {
            msg.reply(`${msg.mentions.users.first().tag} was unable to be banned`); 
        }
    }
}