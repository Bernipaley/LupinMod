const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class AyudaCommand extends BaseCommand {
  constructor() {
    super('ayuda', 'tool', []);
  }
  async run(client, message, args) {
    const helpEmbed = new discord.MessageEmbed()
    .setTitle('Ayuda')
    .setDescription('Please send your problem to  🆘🆘help-desk🆘🆘 That you just unlocked with this commands.')
    .setFooter('Ort Bot, creado por Bernardo Paley.')
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const estudianteenayudarole = message.guild.roles.cache.get('818992469425389610');  message.channel.send (helpEmbed)
     const memberrole = message.guild.roles.cache.get('818992469425389615');  
       


     await message.member.roles.add(estudianteenayudarole).catch(err => console.log(err));

  }
}