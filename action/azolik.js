const { bot } =require('../core/bot')
const { Markup } = require("telegraf");

bot.command('azolik', (ctx) => {
    const azolikKeyboard = Markup.inlineKeyboard([
      Markup.button.url('Ortiqov Blog ', 'https://t.me/Ortiqov_blog'),
      Markup.button.callback('Tekshrish✅', 'salom')
    ]);
  
    ctx.reply('Botdan to\'liq foydalanish uchun kanalga azo bo\'ling:', azolikKeyboard);
  });