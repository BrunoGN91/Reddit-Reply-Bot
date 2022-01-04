
const fs = require("fs");
const path = require("path")
const comments = require("./config/config.js").comments
const msgComments = require("./config/config.js").msgComments
const client = require("./config/config.js").client
const BOT_START = Date.now() / 1000;

// Quotes dir
// Add in this json all the data you want the bot to reply everytime its called
const quotesJson = fs.readFileSync(path.resolve(__dirname, "./logs/replyText.json"), null , 4) 
const quotes = JSON.parse(quotesJson)

// Replies dir
// All data can be stored in this json, if you dont want it you can delete the lines of code involving the writing of the json.
const jsonReplyLog = fs.readFileSync(path.resolve(__dirname, "./logs/replyLogs.json"))
const replyLog = JSON.parse(jsonReplyLog)

const wordInString = (s, word) => new RegExp('\\b' + word + '\\b', 'i').test(s);


// This function is more specific towards the use of only the words selected, while the 'summonBot' function can respond to words that include said characters
const searchBot = (msg) => {
    for(let i = 0; i < msgComments.length; i++){
        if(wordInString(msg.toLowerCase(), msgComments[i].toLowerCase())){
            return true
        }
    }
}

const summonBot = function(msg) {
 for(let i = 0; i < msgComments.length; i++){
     if(msg.toLowerCase().includes(msgComments[i].toLowerCase()))
    return true
    }
};

comments.on('item', (item) => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    const user = item.author.name
    const reply = item.body
    const subreddit = item.subreddit.display_name
    
   
    if(item.created_utc < BOT_START)return;
    if(!searchBot(item.body))return;
    if(item.author.name != client.username){

    let comment = { 
        name: user,
        text: reply,
        subreddit: subreddit,
        botReply: quote
    }

    replyLog.push(comment) // < ---- If you dont want the logs delete this 3 lines of code
    const userReply = JSON.stringify(replyLog, null, 4)  // < ---- 
    fs.writeFileSync(path.resolve(__dirname, "./logs/replyLogs.json"), userReply)  // < ---- 
    
    console.log(`${user}`,`${subreddit}`, reply)

    return item.reply(quote)
    }
 
});