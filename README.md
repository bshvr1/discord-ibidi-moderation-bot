<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/ibidb"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://github.com/discordjs/discord.js/actions"><img src="https://github.com/discordjs/discord.js/workflows/Testing/badge.svg" alt="Build status" /></a>
  </p>
</div>

## Discord ibidi Moderation Bot

Harikalar ötesi botumun reposuna hoş geldin. [Buraya](https://ibidi.app) tıklayarak web siteme giriş yapabilirsin.
Ayrıca buradan da [ibidi Discord](https://discord.gg/devyork) discord sunucuma katılabilirsin.

- Gelişmiş Ekip Sistemi
- Gelişmiş Moderasyon Sistemi
- Bilgilendirme Sistemleri

## Kurulum

**Öncelikle botu kullanmak için yapmanız gereken tek şey bilgisayarınızda Node.js yüklü olunması gerekiyor. Yükledikten sonra node . veya node ibidi.js komutunu kullanarak botu açabilirsiniz.**

Diyelim ki üstteki dediğim şeyi yaptınız, evet ilk adımı tamamladık. Daha sonra yapacağımız tek şey **authorization.json** adlı json dosyamıza girerek oradaki bilgileri eksiksiz bir şekilde doldurmaktır.  

```sh-session
npm init
node ibidi.js or node .
```

### Diğer Kurulum Dosyaları

- [npm](https://www.npmjs.com) Package dosyasını kurmanıza yarar. (`npm init`)
- [node](https://nodejs.org/en/) Botu başlatmamıza yardımcı olacak framework. (`node ibidi.js`)

## Kullanımlar

```js
client.on("message", async msg => {
  let botVoiceChannel = client.channels.cache.get("bot-channel-id");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
  if (msg.channel.id == auth.GuildData.GChat && !msg.author.bot && auth.GuildData.Prefixes.some(x => !msg.content.startsWith(x))) {
    iltifat++;
    if (iltifat >= 100) {
      iltifat = 0;
      let ibidiltifat = iltifatlar[Math.floor(Math.random() * iltifatlar.length)];
      msg.reply(ibidiltifat);
    }
  }
});
```

Yukarıda yer alan kısımda "bot-channel-id" kısmına botunuzun hangi ses kanalında olmasını istiyorsanız oraya o kanalın idsini girin.
Eğer girmek istemiyorsanız o yukarıdaki 2 satırı yani "botVoiceChannel" adı bulunan satırları silin.

## Bağlantılar

- [Website](https://ibidi.app)

## Teşekkür.

Her şeyden önce teşekkürleriniz için ben teşekkür ederim. Aslında daha önceden paylaşmam gereken botlardan bir kaçıydı.
Bunlardan ötürü teşekkürü ben değil sizler hak ediyorsunuz.

## Yardım

Arkadaşlar botla ilgili hemen hemen her şeyi [buradan](https://ibidi.app/blog) daha detaylı bir şekilde ulaşabilirsiniz.
Discord sunucuma katılarak oradan her şeyi öğrenebilirsiniz.
[Discord Sunucum](https://discord.gg/hfFcKFVvpe)
