const { MessageEmbed } = require("discord.js")
const settings = {
    minStaffRole: "838409811330203660",
    teams: ["840295327394955264", "840295483997814785", "840295673529499658", "840295806766284891"],
    "emoji1": "<a:astreal_star1:840201970568790047>",
    "emoji2": "<a:astreal_star2:840201970874581012>",
    "emoji3": "<a:astreal_star4:840201971025444884>",
    "emoji4": "<a:astreal_star3:840201971167264768>"
}

module.exports.operate = async ({client, msg, args, author, auth}) => {
    const minStaffRole = msg.guild.roles.cache.get(settings.minStaffRole);
    if (!minStaffRole) return msg.channel.send("En alt yetkili rolünü bulamıyorum.");

    const voices = msg.guild.members.cache.filter((member) => member.voice.channelID && !member.user.bot);
    if (!voices) return msg.channel.send("Seste üye yok?!");

    const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setFooter(`Sesteki Üye Oranı: ${Math.round(100 - (voices.filter((member) => member.roles.highest.position >= minStaffRole.position).size * 100) / voices.size)}% || Sesteki Yetkili Oranı: ${Math.round((voices.filter((member) => member.roles.highest.position >= minStaffRole.position).size * 100) / voices.size)}%`);

    settings.teams.forEach((team) => {
        const role = msg.guild.roles.cache.get(team);
        if (!role) return;

        const roleVoice = role.members.filter(member => member.voice.channelID && !member.user.bot).size;
        embed.addField(`${role.name}:`, [
            `${settings.emoji1} Toplam Üye: **__${role.members.size}__**`,
            `${settings.emoji2} Aktif Üye: **${role.members.filter(member => member.user.presence.status !== "offline").size}**`,
            `${settings.emoji3} Sesteki Üye: **${roleVoice}**`,
            `${settings.emoji4} Sesteki Üye Oranı: **${Math.round((roleVoice * 100) / voices.size)}%**`,
        ], true);
    });

    msg.channel.send(embed);
}
module.exports.help = {
    name: "ekip",
    alias: []
  };