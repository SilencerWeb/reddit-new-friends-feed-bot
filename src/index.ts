require('dotenv').config();

import { startServer } from './server';
import { registerCronJob } from './cron';
import { startBot } from './bot';


startServer();
registerCronJob();
startBot();