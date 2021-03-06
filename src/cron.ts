const Telegram = require('telegraf/telegram');
const CronJob = require('cron').CronJob;
const axios = require('axios');

import {
  getCurrentUTCDate,
  transformUnixTimestampIntoDate,
  getOffsetDate,
  prettifyPostText,
} from './utils';
import { CHANNEL_USERNAME, SUBREDDITS_URLS } from './constants';


export const registerCronJob = (): void => {
  const telegram = new Telegram(process.env.BOT_TOKEN);

  new CronJob('*/30 * * * * *', async () => {
    const subredditsFetchResponses = await Promise.all(
      SUBREDDITS_URLS.map((subredditUrl: string): any => axios.get(subredditUrl)),
    );

    const posts: any[] = [];

    subredditsFetchResponses.forEach((subredditFetchResponse: any): void => {
      posts.push(...subredditFetchResponse.data.data.children);
    });

    const recentPosts = posts.filter((post: any): boolean => {
      return transformUnixTimestampIntoDate(post.data.created_utc) >= getOffsetDate(getCurrentUTCDate(), 30000); // 30000 milliseconds = 30 seconds
    });

    recentPosts.forEach((post: any): void => {
      try {
        telegram.sendMessage(
          CHANNEL_USERNAME,
          `
*${ post.data.title }*
        
${ prettifyPostText(post.data.selftext) }

[Link to the post](${ post.data.url })
[Link to the author](http://reddit.com/u/${ post.data.author })

_From subreddit ${ post.data.subreddit }_
        `.trim(),
          {
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
          },
        );
      } catch (error) {
        console.log(error.message);
      }
    });
  }, null, true);
};
