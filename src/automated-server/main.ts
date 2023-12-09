import functions from "./api/functions.js";
import * as cron from 'node-cron'
import listener from './api/middleware/listener'
// start the listener and make the websocket connection
listener()

// scheduled change
// forced change is ./api/middleware/listener.ts
cron.schedule('0 0 * * *', () => {
   functions('all');
 });
