const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Çekiliş Yardım Komutları')
.setTimestamp()
.addField(' !erkek', 'Erkek üye Kaydedersiniz')
.addField(' !kız', 'Kız üye Kaydedersiniz')
.addField(' !say', 'Üye sayısına bakarsınız')

.setFooter('Narcos Code', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'çekilişyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};