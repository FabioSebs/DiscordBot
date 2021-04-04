require('dotenv').config() //CONFIGURING DOTENV MODULE

const Discord = require('discord.js') //IMPORTING DISCORD MODULE
const client = new Discord.Client();  //MAKES A CLIENT OBJECT

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'


client.on('ready', () => {                    //CLIENT OBJECT HANDLES EVENT LISTENERS AND YOU CAN SPECIFY THE EVENT
    console.log("our bot is ready to go!!");
})


client.on('messageDelete', msg => {
    msg.channel.send("Stop deleting messages")
})



client.on('message', msg =>{                  // EVENT LISTENER FOR A MESSAGE 

    if (msg.content == 'I love Fabrzy') {
        msg.react('❤️')
    }


    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        // msg.channel.send("Not Tagged")           //THIS IS TO NOT TAG SOMEONE BUT STILL MESSAGE INN THE DISCORD
        // msg.reply("Pong!")                   //THIS IS TO SPECIFICLY REPLY TO SOMEONE ON THE DISCORD
        
        modUser(msg.member)                     //msg.member SPECIFIES THE PERSON TRIGGERING THE EVENT

    }
})

function modUser(member){                           //FUNCTION THAT ADDS MEMBER TO A ROLE BASED ON THE ROLE ID
    member.roles.add("828195349360672768")
}

client.login(process.env.BOT_TOKEN)