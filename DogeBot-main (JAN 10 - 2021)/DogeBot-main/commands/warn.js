const db = require('quick.db');

module.exports = {
    name: "warn",
    description: "This warns the user mentioned.",
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
            if(db.get(`warn_${id}_${msg.guild.id}`)=='1'){
                db.set(`warn_${id}_${msg.guild.id}`, `2`);
                msg.mentions.members.first().kick(`Warning 2 | Warned by ${msg.author.id}`);
                msg.channel.send(`Warned ${user}`);
            }else if(db.get(`warn_${id}_${msg.guild.id}`)=='2'){
                db.set(`warn_${id}_${msg.guild.id}`, `3`);
                try {
                    msg.guild.members.ban(user, { reason: `Warning 3 | Warned by ${msg.author.id}` });
                    msg.channel.send(`Warned ${user}`);
                } catch (err) {
                    msg.channel.send(`Failed to warn ${user}`);
                }
            }
        } else {
            msg.channel.send(`Warned ${user}`);
            db.set(`warn_${id}_${msg.guild.id}`, `1`);
        }
    }
}