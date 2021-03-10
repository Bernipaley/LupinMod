const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');

module.exports = class verificationCommand extends BaseCommand {
  constructor() {
    super('verification', 'tool', []);
  }

  async run(client, message, args) {
    const verificacionEmbed = new discord.MessageEmbed()
    .setTitle(` Role added`)
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('818992469425389615');  message.channel.send (verificacionEmbed)

     await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}