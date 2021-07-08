if (message.content.startsWith("!serverav")) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let embed = new Discord.MessageEmbed()
.setTitle(`${message.guild}'s ServerIcon!`)
.setColor("#01fde1")
.setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
message.channel.send(embed);
///Paste this code and customize the prefix according to your needs. 
