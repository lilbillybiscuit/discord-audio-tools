const os = require('os')
const youtubedl = require('youtube-dl-exec')
const config = require("../config.json");

// const youtubesearch = require();

function download_spotify(url) {

}

function download_spotify_playlist(url) {

}

function search_youtube(term) {

}

function download_youtube() {

}

function getaudio(term) {

};

exports.run = (client, message, args) => {
    var 
    if (args[0]==='enable') {
        message.channel.send("**Bot joined voice channel null.**\nYou can move the bot to different channels.")
    } else {
        message.channel.send("No server command specified")
    }
}
