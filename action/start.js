const { bot } = require("../core/bot");
const { Markup } = require("telegraf");

bot.start((ctx) => {
  ctx.replyWithHTML(
    `Assalomu aleykum <b>${ctx.from.first_name}</b>! botimizga xush kelibsiz😊`
  );
});
