const db = require('quick.db');

module.exports = {
    name: "automeme",
    description: "This toggles the auto posting memes if your server is supported. (You'll need to get the owner to add your server)",
    type: "funny",

    execute(msg) {
        if (!msg.member.permissions.has('ADMINISTRATOR')) {
            msg.channel.send('You do not have permissions to do that!');
            return;
        }

        if(db.get(`${msg.guild.id}_autopost`)==null){
            db.set(`${msg.guild.id}_autopost`,1);
        }

        const past = db.get(`${msg.guild.id}_autopost`);

        if(db.get(`${msg.guild.id}_autopost`)==1){
            db.set(`${msg.guild.id}_autopost`,0);
            msg.channel.send(`Changed Doge Bot Responses From ${past} to ${db.get(`${msg.guild.id}_autopost`)}`);
        } else {
            db.set(`${msg.guild.id}_autopost`,1);
            msg.channel.send(`Changed Doge Bot Responses From ${past} to ${db.get(`${msg.guild.id}_autopost`)}`);
        }
    }
}