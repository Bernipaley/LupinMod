const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AnunciosCommand extends BaseCommand {
  constructor() {
    super('anuncios', 'moderation', []);
  }

  async run(client, message, args) {
    const filter = m => m.author.id == message.author.id;
    message.delete();

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cant use this."); 
    let embed = new Discord.MessageEmbed()
      .setFooter(`Annnouncement made by ${message.author.tag}`);
      

    message.channel.send('What is the announcement topic?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 100000, errors: ['time'] });
      console.log(msg.first().content);
      embed.setTitle(msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('You ran out of time, Re-run command.');
    }

    message.channel.send('What is the announcement?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.setDescription(msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('You ran out of time, Re-run command.');
    }

    message.channel.send(embed);
  }
}