module.exports = {
    name: "ping",
    description: "Show the bot's ping",
    execute(msg, args, cmds, client) {
        var ping = Math.round(msg.client.ws.ping);
            
        if (ping == 69) {
            msg.channel.send(`YOU GOT :b:UNNY NUMBER ${ping}ms :joy: :joy: :joy: :joy: :joy: :joy: :joy:`)
        } else if (ping == 420) {
            msg.channel.send(`u got da ${ping}ms u know?`)
        } else {
            msg.channel.send(`wow dats some :b:ing at ${ping}ms `)
        }
    }
};