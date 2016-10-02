const config = {
  slack: {
    token: process.env.SLACK_TOKEN,
    pingInterval: process.env.SLACK_PING_INTERVAL || 5000
  },
  redis: {
    dsn: process.env.REDIS_URL,

    // You can use a prefix for all redis keys, but it's preferable to
    // use a seperate redis database instead.
    prefix: process.env.REDIS_PREFIX
  }
};

export default config;
