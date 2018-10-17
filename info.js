const commando = require('discord.js-commando');
const discord = require('discord.js');

class Info extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'info',
            group: 'simple',
            memberName: 'info',
            description: 'Info on me!'
        });
    }

    async run(message, args)
    {
     var Info = new discord.RichEmbed()
        .setTitle("Your Smell Like Shit")
        .addField("Suck a Dick", "Whats up bitch, my name is Josh GofuckYourself", true)
        .setColor("#20265C")
        .setThumbnail(message.author.avatarURL)
        .setFooter("Your reading a description of a bot you fucking nerd")

        message.channel.sendEmbed(Info);
    }
}

module.exports = Info;