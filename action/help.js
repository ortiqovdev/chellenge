const { bot } = require("../core/bot");

bot.help((ctx) => {
  let text =
  `Biz botimizdagi qamandalar: \n \n ` +
  `/start - Botni qayta ishga tushirish♻️ \n` +
  `/azolik - Kanalga azolikni tekshirish✅ \n` +
  `/raqam - Kontakni ulashish 💢 \n` +
  `/inline - Inline button⭕️ \n` +
  `/help - Yordam🆘 \n \n \n` +
  `Bizning kanal : @Ortiqov_blog `;

ctx.replyWithHTML(text).then();
});