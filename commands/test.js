exports.run = (client, message, args) => {
    message.channel.send("Test succeeded").catch(console.error);
    console.log(args);
}