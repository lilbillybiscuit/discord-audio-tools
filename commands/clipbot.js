const os = require('os')
exports.run = (client, message, args) => {
    if (args[0]==='enable') {
        message.channel.send("**Bot joined voice channel null.**\nYou can move the bot to different channels.")
    } else {
        message.channel.send("No server command specified")
    }
}