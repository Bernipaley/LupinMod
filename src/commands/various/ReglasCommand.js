const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ReglasCommand extends BaseCommand {
  constructor() {
    super('reglas', 'various', []);
  }

  run(client, message, args) { 
    const reglasEmbed = new Discord.MessageEmbed()
    .setTitle("Rules")
    .addField("Regla 1","✅ be respectful with **everyone**")
    .addField("Regla 2","✅ Be gentle with everyone")
    .addField("Regla 3","✅ Notify the moderators if there is any problem")
    .addField("Regla 5","✅ Use each channel for its respective theme ")
    .addField("Regla 6","✅ Have understandable nicknames")
    .addField("Regla 7","🚫 Sharing content very out of place to what the group refers to")
    .addField("Regla 8","🚫Insulting, attacking or carrying out any type of badly hurtful action towards any member of the server")
    .addField("Regla 9","🚫Perform any SPAM class")
    .addField("Regla 10","🚫Abuse your role")
    .addField("Regla 11", "🚫 Send NSFW content")
    .addField("////////////////////////////////VERIFICATION////////////////////////", "send m$verification to: <#818992469727248398>")
    .setTimestamp();
    message.delete()
    message.channel.send('@everyone')
    message.channel.send(reglasEmbed);
  }
}