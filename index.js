'use strict';
const TelegramBot = require('node-telegram-bot-api');
//token = '687782127:AAG7vzsDKpUmyoM__lUTTn6iigD2_DH_sF0' ;
const token = "687782127:AAG7vzsDKpUmyoM__lUTTn6iigD2_DH_sF0";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/حجة قولي (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


//HI

bot.on('message', (msg) => {
    
    var Hi = ("hi");
    if (msg.text.toString().toLowerCase().includes(Hi)) {
    bot.sendMessage(msg.chat.id,"جاء جاء النشبه");
    } 
    var Hii = ( "hey");
    if (msg.text.toString().toLowerCase().includes(Hii)) {
    bot.sendMessage(msg.chat.id,"جاء النشبه");
    } 
    var Hiii = ("السلام عليكم");
    if (msg.text.toString().toLowerCase().includes(Hiii)) {
    bot.sendMessage(msg.chat.id,"وعليكم السلام ");
    } 

    

    //BYE

    var bye = ("سلام");
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 

var byee = ("bye");
if (msg.text.toString().toLowerCase().includes(byee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 
var byeee = ( "ماشية");
if (msg.text.toString().toLowerCase().includes(byeee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 
var byeeee = ( "ماشي");
if (msg.text.toString().toLowerCase().includes(byeeee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 
var byeeeee = ( "رايح");
if (msg.text.toString().toLowerCase().includes(byeeeee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 
var byeeeeee = ( "رايحة");
if (msg.text.toString().toLowerCase().includes(byeeeeee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 
var byeeeeeee = ( "مع السلامة");
if (msg.text.toString().toLowerCase().includes(byeeeeeee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 
var byeeeeeeee = ("بنام");
if (msg.text.toString().toLowerCase().includes(byeeeeeeee)) {
bot.sendMessage(msg.chat.id, " روحة بلا رجعة يا  " + msg.chat.first_name);
} 

var حجة = "حجة";
if (msg.text.toString().toLowerCase().includes(حجة)) {
    bot.sendMessage(msg.chat.id, "كي مين حجة!!");
}

var insult =( "غبية");
if (msg.text.includes(insult)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insultt =(  "غبي" );
if (msg.text.includes(insultt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insulttt =(  "عفن");
if (msg.text.includes(insulttt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insultttt =(  "عفنة");
if (msg.text.includes(insultttt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insulttttt =(  "اهبل");
if (msg.text.includes(insulttttt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insultttttt =( "هبلة");
if (msg.text.includes(insultttttt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insulttttttt =( "كلب");
if (msg.text.includes(insulttttttt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
var insulttttttt =( "كلبة");
if (msg.text.includes(insulttttttt)) {
    bot.sendMessage(msg.chat.id, "لا تسب .. عيب ");
}
    var lost =  "انقلع" ;
    if (msg.text.includes(lost)) {
        bot.sendMessage(msg.chat.id, "  اسري انت ");
    }

    var lostt = "اسري";
    if (msg.text.includes(lostt)) {
        bot.sendMessage(msg.chat.id, "  اسري انت ");
    }
    var losttt = "انقلعي";
    if (msg.text.includes(losttt)) {
        bot.sendMessage(msg.chat.id, "  اسري انت ");
    }ذ
    var losttt = "انقلعي";
    if (msg.text.includes(losttt)) {
        bot.sendMessage(msg.chat.id, "  اسري انت ");
    }
});
//bot.telegram.setWebhook("https://yourHerokuApp.com" + "687782127:AAG7vzsDKpUmyoM__lUTTn6iigD2_DH_sF0");

//bot.startWebhook('/'+"687782127:AAG7vzsDKpUmyoM__lUTTn6iigD2_DH_sF0", null, process.env.PORT);