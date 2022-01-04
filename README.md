### Reply Only Reddit-BOT in Node.JS ###    

Reddit Bot Built for only replying to specific words included in comments (not posts)

You can edit your own replies, and to what specific words you want the bot to reply to.

1 - You will need to have an account where the bot will be running. This account must have an aplicationn created in preferences 'https://www.reddit.com/prefs/apps'
    You will have to give it a name, select the script checkbox and redirect uri to 'https://reddit.com'
    More information can be found in other sites

2 - Once created, you need to load the information given to the '.ennvexample' file. Once all information is passed to it, rename the file to just '.env'

3 - In the Config.js file, you will edit the words you want the bot to reply to specifically. As well as the subredits you want the bot to search within.

4 - Write the text you want your bot to reply with in the 'replyText.json'. Remember this is a Json File, Everything must be within the [ ] and the text has to be in quotation marks
    For example: ["A text goes Here" , "Another text goes here"]
    This same format is used for the words or phrases the bot will reply to.

5 - Run the script 'npm start' in console and you should be good to go. 

If you want to try it first you can always try in the subrredit 'https://www.reddit.com/r/testingground4bots/'

Any feedback would be greatly appreciated.

Good Luck!