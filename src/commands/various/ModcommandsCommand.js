const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class modcommandsCommand extends BaseCommand {
  constructor() {
    super('modcommands', 'various', []);
  }

  run(client, message, args) {
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("Moderation commands")
    .addField('N-1','m$ban')
    .addField('how to use it?','Simple! \`m$ban @user reason (//why you do want to ban this member//)\` the member will receive a DM with the info of his/her ban')
    .addField('N-2','m$tempban')
    .addField('how to use it?','Simple! \` m$tempban @user because he didnt behave with the server 30m\` //the member will receive a DM with the info of his/her tempban')
    .addField('N-3','m$kick')
    .addField('how to use it?',' \`m$kick @user reason (//why you do want to kick this member//)\`the member will receive a DM with the info of his/her kick')
    .addField('N-4','m$lock')
    .addField('how to use it?',' \`m$lock\` (you have to put that, in the channel you want to lock. For exaple i go to <#814887573742551111> and i put ¿lock when you send that nobody will be able to write at that channel')
    .addField('N-5','m$unlock')
    .addField('how to use it?',' \`m$unlock\` (you have to put that, in the channel you want to unlock. For exaple i go to <#814887573742551111> and i put o!unlock when you send that everyone will be able to write at that channel')
    .addField('N-6','m$nickname')
    .addField('how to use it?',' \`m$nickname @user new nickname\` If someone have an offensive nickname, you must change it to another one')
    .addField('N-7','m$purge')
    .addField('how to use it?',' \`m$purge 1-100 (messages do you want to delete)\` If someone spam, you must use this command and use tempmute it for 1hs as the rules say')
    .addField('N-8','m$tempmute')
    .addField('how to use it?','Simple! \` m$tempmute @user because he didnt behave with the server 30m\` //the member will receive a DM with the info of his/her tempmute, and another one when his/her tempmute finish')
    .addField('N-9','m$mute')
    .addField('how to use it?','Simple! \` m$mute @user reason\` //the member will receive a DM with the info of his/her mute.')
    .addField('N-10','m$unmute')
    .addField('how to use it?','Simple! \` m$unmute @user reason\` //the member will receive a DM with the info of his/her unmute.')
    .addField('N-11','m$helpF')
    .addField('how to use it?','Simple! \` m$helpF @user reason\` //You can only in one case. When a member request help')
    .addField('N-12','m$helpW')
    .addField('how to use it?','Simple! \` m$helpW @user reason\` //You can only in one case. When a member finish her/him help')
    .setTimestamp();
    message.delete()
    message.channel.send(rulesEmbed);
  }
}