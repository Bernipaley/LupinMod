const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');

module.exports = class afkoutCommand extends BaseCommand {
  constructor() {
    super('afkout', 'tool', []);
  }

  async run(client, message, args) {
    const afkEmbed = new discord.MessageEmbed()
    .setTitle(`AFK Eliminado`)
    .setFooter('Ort Bot, Creado por Bernardo Paley');
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const role = message.guild.roles.cache.get('815771000825315339');  message.channel.send (afkEmbed)

     await message.member.roles.remove(role.id).catch(err => console.log(err));
  }
}