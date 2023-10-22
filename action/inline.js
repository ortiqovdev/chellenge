const { Markup } = require("telegraf");
const { bot } = require("../core/bot");


bot.command("inline", (ctx) => {
  const inlineKeyboard = Markup.inlineKeyboard([
    Markup.button.url("Google", "https://www.google.com"),
  ]);

  ctx.reply("Test uchun tugmalar:", inlineKeyboard);
});