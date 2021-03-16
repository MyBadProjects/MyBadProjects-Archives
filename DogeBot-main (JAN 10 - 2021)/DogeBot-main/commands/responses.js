const db = require('quick.db');

module.exports = {
    name: "responses",
    description: "This toggles the responses.",
    type: "funny",

    execute(msg) {
        if (!msg.member.permissions.has('ADMINISTRATOR')) {
            msg.channel.send('You do not have permissions to do that!');
            return;
        }

        if(db.get(`${msg.channel.guild.id}_responses`)==null){
            db.set(`${msg.channel.guild.id}_responses`,1);
        }

        const past = db.get(`${msg.channel.guild.id}_responses`);

        if(db.get(`${msg.channel.guild.id}_responses`)==1){
            db.set(`${msg.channel.guild.id}_responses`,0);
            msg.channel.send(`Changed Doge Bot Responses From ${past} to ${db.get(`${msg.channel.guild.id}_responses`)}`);
        } else {
            db.set(`${msg.channel.guild.id}_responses`,1);
            msg.channel.send(`Changed Doge Bot Responses From ${past} to ${db.get(`${msg.channel.guild.id}_responses`)}`);
        }
    }
}