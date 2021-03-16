module.exports = {
    name: "killbot",
    description: "This kills the bot.",
    type: "owner",
    execute(msg,args,commands,client) {
        if (msg.author.id == '741348869337776168'){
            console.log('Bot Killed');
            client.destroy(client.token);
        } else {
            msg.channel.send('Your Discord ID does not match the required ID!');
        }
    }
};