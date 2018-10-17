const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){ 
    if(message.content == 'Fuck you')
    { 
        message.channel.sendMessage('Fuck off' + message.author);
    }
});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome and go kill yourself");
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});

bot.on('message', function(message){

    if(message.content == 'Hello')
    {
        message.channel.send('Hello' + message.author + ', how are you?');
    }
    if(message.content == 'Join')
    {
    message.member.send("Welcome and go kill yourself");
    let memberRole = message.member.guild.roles.find("name", "Member");
    message.member.addRole(memberRole);
    }
});

bot.on('ready', function(){
    console.log("Ready");
})

bot.login('NDkwNzUwMTcxMjg2NjAxNzI4.DoCajQ.73get4_GeTAkm3rF8jv8DR5aNAE');