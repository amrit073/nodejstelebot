const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const token = '5069891936:AAHLdwN8XFWDixRefk9hQCATi-IFB3-TN1Y';

const bot = new TelegramBot(token, { polling: true });

msgList = {}
console.log('yeta ni aayo');


const getAddress = (msg) => {
  if (!('address' in msgList)) {
    msgList.address = msg.text
    bot.sendMessage(msg.chat.id, `so your are ${msgList.age} years old ${msgList.callingName} living in ${msgList.address}\nThankyou`)
    msgList = {}
    return
  }
}
const getAge = (msg) => {
  if (!("age" in msgList)) {
    msgList.age = msg.text
    bot.sendMessage(msg.chat.id, `so your are ${msgList.age} years old. Wwhere do you live?`)
    return
  } else {
    getAddress(msg)
  }
}

const getName = (msg) => {
  if (!("callingName" in msgList)) {
    msgList.callingName = msg.text
    bot.sendMessage(msg.chat.id, `so your name is ${msgList.callingName}, what is your age?`)
    return
  }
  else {
    getAge(msg)
  }
}

const getUsername = (msg) => {try{
  if (!("username" in msgList)) {
 
    username = msg.chat.username
    msgList.username = username
    bot.sendMessage(msg.chat.id, 'you are a new user, what is your nickname?')
    return
  } else {
    getName(msg)
  }}catch(e){console.log(e);}
}


bot.on('message', (msg) => {
  getUsername(msg)
})
