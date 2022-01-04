
const path = require("path")
const Snoowrap = require("snoowrap");
const { CommentStream } = require("snoostorm");
const dotenv = require("dotenv")
dotenv.config(path.resolve(__dirname, ".env"))

// All this information is filled in the '.envexample' file. Once all this fields are complete you need to change its name to just '.env'
const client = new Snoowrap({
        userAgent: process.env.USER_AGENT,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        username: process.env.REDDIT_USER,
        password: process.env.REDDIT_PASS
});

const msgComments = ['***'] // Here you can place an array of specific comments to which the bot replies to. You can also make it only one value

const comments = new CommentStream(client, { 
    subreddit: '***', // Here goes the subredit you want to watch, if you would like it to search more subreddit just add a + between subs
    limit: 10, 
    pollTime: 10000 
});

module.exports = {
    comments: comments,
    client: client,
    msgComments: msgComments
}