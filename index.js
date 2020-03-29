const Telegraf = require('telegraf');

require('dotenv').config({path: './.env'});
const bot = new Telegraf(process.env.BOT_TOKEN);
const {
  handleStart,
  handleAdd,
  handleAuth
} = require('./handlers');
bot.start(handleStart);
// bot.on('message', handleAdd);
bot.command('auth', handleAuth);
bot.launch();
