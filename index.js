1 const Discord = require('discord.js');
2 const client = Discord.Client();
3 const PREFIX = "?"
4
5 client.on("ready", function() {
6        bot.user.setActivity("?help for commands")
7    console.log("Booted up!");
8    });
9
10   client.on("message", (message) -> {
11     if(message.content.startWith(PREFIX + "ping")){
12           message.channel.send("PONG");
13     }});
14
15 client.login("process.env.token");
16
