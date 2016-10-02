import slack from "slack";

import config from "./config";

const token = config.slack.token;
const noop = () => {};

// The Slack RTM documentation recommends sending a PING event every few
// seconds. We have to do this otherwise the bot eventually disconnects
// silently, while the process continues as usual.
const pingInterval = config.slack.pingInterval;
const pingPayload = JSON.stringify({ id: 1, type: "ping" })

export function setupPingInterval(bot) {
  return setInterval(() => {
    bot.ws.send(pingPayload);
  }, pingInterval);
}

export function startBot(cb) {
  const bot = slack.rtm.client();

  bot.started((initalPayload) => {
    // Keep the bot connected indefinitely:
    setupPingInterval(bot);

    cb(bot, initialPayload);
  });

  // Connect and start the bot:
  bot.listen({ token: config.slack.token });
}

export function postMessage(message, cb = null) {
  slack.chat.postMessage({ token, as_user: true, ...message }, cb || noop);
}
