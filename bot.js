const Jackson = require('./jackson.js')
const Jb = require('./jb.js')
const Mark = require('./mark.js')
const Jinyoung = require('./jinyoung.js')
const Youngjae = require('./youngjae.js')
const Bambam = require('./bambam.js')
const Yugyeom = require('./yugyeom.js')
var Discord = require('discord.js')
var bot = new Discord.Client()

bot.on('message', message => {
    var sender = message.author
    var msg = message.content
    var prefix = '!'
    if(message.content === prefix + 'intro') {
        message.channel.send('Come and get it! GOT7!')
    } else if (message.content === prefix + 'jb') {
        Jb.jbInfo(message.channel)
    } else if (message.content === prefix + 'mark') {
        Mark.markInfo(message.channel)
    } else if (message.content === prefix + 'jackson') {
        Jackson.jacksonInfo(message.channel)
    } else if (message.content === prefix + 'jinyoung') {
        Jinyoung.jinyoungInfo(message.channel)
    } else if (message.content === prefix + 'youngjae') {
        Youngjae.youngjaeInfo(message.channel)
    } else if (message.content === prefix + 'bambam') {
        Bambam.bambamInfo(message.channel)
    } else if (message.content === prefix + 'yugyeom') {
        Yugyeom.yugyeomInfo(message.channel)
    }
})

bot.on('ready', () => {
    console.log('Bot launched...')
})

bot.login(#bot_token)
