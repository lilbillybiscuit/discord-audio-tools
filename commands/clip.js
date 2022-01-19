function todict(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function stringmessage(message) {
    //console.log(message.mentions);
    //console.log(message);
    var temp = todict(message);
    temp.author = todict(message.author);
    /*temp.attachments=[];
    for (const attachment in message.attachments) {
        temp.attachments.push(todict(attachment));
    }*/
    temp.attachments=todict(message.attachments);
    temp.mentions=todict(message.mentions);
    // temp.mentions.users=[];
    // temp.mentions._members=[];
    // for (const user in message.mentions.users) {
    //     temp.mentions.users.push(todict(message.mentions.users.user));
    // }
    // for (const member in message.mentions._members) {
    //     temp.mentions._members.push(todict(message.mentions._members.member));
    // }
    return temp;
    console.log(JSON.stringify(temp));
}


exports.run = (client, message, args) => {
    console.log(stringmessage(message));
    message.channel.send("Voice Channel clipping has not been implemented yet").catch(console.error);
}