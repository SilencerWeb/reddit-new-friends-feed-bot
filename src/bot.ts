const Telegraf = require('telegraf');


export const startBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.on('callback_query', (context: any) => {
    const callbackData: string = context.update.callback_query.data;

    if (callbackData === 'delete-message') {
      context.deleteMessage();
    } else if (callbackData === 'save-message') {
      // TODO: Add code for saving messages to the database
    }
  });

  bot.launch();
};