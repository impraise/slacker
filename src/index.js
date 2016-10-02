import "dotenv/config";
import { startBot, postMessage } from "./slack";

startBot((bot, initialPayload) => {
  bot.message((message) => {
    // Do stuff with message here. Keep in mind bot messages, including your
    // own, will also trigger this, so you'll want to filter those out.
    console.log(message);
  });
});
