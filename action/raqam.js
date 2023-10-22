const { bot } = require("../core/bot");

bot.command("raqam", (ctx) => {
  sendContact(ctx);
});
function sendContact(ctx) {
  ctx.reply("Telefon raqamingizni jo'nating:", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Telefon raqamni jo'natish",
            request_contact: true,
          },
        ],
      ],
      resize_keyboard: true,
    },
  });

  bot.on("contact", (ctx) => {
    const contact = ctx.message.contact;
    const userPhoneNumber = contact.phone_number;

    ctx.reply(`Sizning telefon raqamingiz: ${userPhoneNumber}`);
  });
}
