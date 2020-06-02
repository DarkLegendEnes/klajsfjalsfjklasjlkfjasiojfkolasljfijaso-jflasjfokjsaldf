const Discord = require('discord.js');
const bot = new Discord.bot();

const prefix = '!';

var version = '69.240';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message =>{
  
    let args = message.content.slice(prefix.length).split(" ");

    switch(args[0]){
        case 'info':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Info')
            .addField('Player name', message.author.username)
            .addField('Current Server', message.guild.name)
            .setThumbnail(message.author.displayAvatarURL())
            .addField('Version', version)
            .setColor(0x33DACE)
            message.channel.send(embed);
        break;
        case 'help':
            const embed2 = new Discord.MessageEmbed()
            .addField('Commands', `bot's commands are: ping, help, info. note: bot is under construction`)
            .setColor(0xE20C40)
            message.channel.send(embed2);
        break;    
    
        case 'ping':
            message.channel.send('pong');
        break; 
    
        
}
});

bot.login(process.env.token);