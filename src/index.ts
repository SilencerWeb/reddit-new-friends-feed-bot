require('dotenv').config();

import { startServer } from './server';
import { registerCronJob } from './cron';


startServer();
registerCronJob();