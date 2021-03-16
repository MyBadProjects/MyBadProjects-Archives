const db = require('quick.db');

module.exports = {
    name: "clearwarns",
    description: "This clears the user's warnings.",
    type: "moderation",
    execute(msg) {
        const user = msg.mentions.users.first();
        const id = msg.mentions.users.first().id;

        if (!msg.mentions.users.first()) {
            msg.reply('Nobody was mentioned to ban!');
        }
      
        if (msg.author === msg.mentions.users.first()) {
            msg.reply('You are unable to wan yourself!');
            return;
        }
      
        if (msg.mentions.users.first().bot) {
            msg.reply('You are unable to warn a bot!');
            return;
        }

        if (!msg.member.permissions.has("KICK_MEMBERS")) {
            msg.reply('You do not have permission!');
            return;
        }
      
        if (!msg.guild.me.permissions.has("KICK_MEMBERS")) {
            msg.reply('I do not have the KICK_MEMBERS permission!');
            return;
        }

        if (!msg.guild.me.permissions.has("BAN_MEMBERS")) {
            msg.reply('I do not have the BAN_MEMBERS permission!');
            return;
        }

        if (db.get(`warn_${id}_${msg.guild.id}`)) {
            db.delete(`warn_${id}_${msg.guild.id}`);
        } else {
            msg.channel.send('That user does not have any warnings!');
        }
    }
};