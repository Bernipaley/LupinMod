const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class ComandosCommand extends BaseCommand {
  constructor() {
    super('comandos', 'tool', []);
  }

  run(client, message, args) {
    const comandosEmbed = new discord.MessageEmbed()
    .setTitle("Lista de comandos")
    .addField('o!avatar','o!meme')
    .addField('o!say','o!ayuda')
    .addField('o!horarioslunes','o!horariosmartes')
    .addField('o!horariosmiercoles','o!horariosjueves')
    .addField('o!horariosviernes','o!reglas')
    .addField('o!cronometro', 'Para usar este comando es o!cronometro (duracion) por ejemplo 1m eso seria el cronometro en 1 minuto \n\ Despues si queres con horas seria xTiempo h \n\ en resumen m para minutos y h para horas')
    .setColor('RANDOM')
    .setTimestamp();
    message.delete();

    message.channel.send(comandosEmbed);
  }
}