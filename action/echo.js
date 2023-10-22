const { bot } = require("../core/bot");

bot.on("text", (ctx) => {
  const receivedText = ctx.message.text.toLowerCase(); // Kiruvchi xabarni kichik harflarga o'tkazamiz
  if (receivedText.includes(process.env.name0)) {
    ctx.reply("😍");
  } else if (receivedText.includes(process.env.name1)) {
    ctx.reply("❤️");
  } else if (receivedText.includes(process.env.name2)) {
    ctx.reply("👨‍💻");
  } else {
    ctx.reply(receivedText);
  }
});
bot.on('photo', ctx =>{
  ctx.replyWithHTML('Qabul qilindi')
  let user = ctx.from.id
  let photo = ctx.message.photo[0].file_id
  ctx.telegram.sendPhoto(user , photo)
})