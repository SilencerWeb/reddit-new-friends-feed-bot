const Telegraf = require('telegraf');


export const startBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.launch();
};
