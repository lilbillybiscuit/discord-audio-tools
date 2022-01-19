const os = require('os')
exports.run = (client, message, args) => {
    if (args[0]==='load') {
        var load = os.loadavg();
        message.channel.send(`Load Average: ${load[0].toFixed(3)}, ${load[1].toFixed(3)}, ${load[2].toFixed(3)}`);
    } else {
        message.channel.send("No server command specified")
    }
}