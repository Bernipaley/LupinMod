// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const welcomeChannel = member.guild.channels.cache.get('818992469727248395');
    welcomeChannel.send(`Hey, <@${member.user.id}> welcome to ${member.guild.name} remember to read the <#818992469727248397> and if you have a doubt contact a moderator! Thanks!`)
    
  }
}