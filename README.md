# slacker

Unopinionated and minimalist starter boilerplate for real-time Slack bots.

## Features:

- ES6 support through Babel
- Slack RTM integration
- Slack API integration
- Simple persistence through `src/brain.js` using Redis
- `.env` file support through `dotenv`

Details and documentation on the slack integration here: [smallwins/slack](https://github.com/smallwins/slack).

## Getting started

```shell
$ git clone git@github.com:impraise/slacker.git yourbot
$ cd yourbot

$ cp .env.example .env

# Edit environment variables, specifically you'll need a slack
# token to get started
$ $EDITOR .env

# In development, start the bot through babel-node:
$ npm start

# In production, transpile the ES6 code to ES6 through babel, first:
$ npm run build
$ node build/index.js
```

## Credits

**slacker** is developed and maintained by [Impraise](http://www.impraise.com).
Issue reports and pull requests are greatly appreciated!

![Impraise, inc](http://i.imgur.com/x2oFA91.png)
