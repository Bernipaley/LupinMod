const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class helpWCommand extends BaseCommand {
  constructor() {
    super('helpW', 'tool', []);
  }

  run(client, message, args) {

  const holaEmbed = new discord.MessageEmbed()
  .setTitle('🛑🛑🛑 Help 🛑🛑🛑')
  .setDescription('Welcome to the support system for the Lupin Support Server \n\ Please send a message with your problem. \n\  Thanks!  ')
  .setColor('RANDOM')
  .setTimestamp();
  message.delete();
  message.channel.send(holaEmbed);    
  }
}