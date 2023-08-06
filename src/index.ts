import { Bot, Context, SessionFlavor } from 'grammy'
import dotenv from 'dotenv'
dotenv.config()
import { SessionData, session } from './middlewares/session'
import { router } from './router'
import { handler } from './handler'
import { connectMongoDB } from './config/mongodb'
import { I18nFlavor } from '@grammyjs/i18n'
import { i18n } from './middlewares/i18n'
import logger from './lib/logger'

export type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor
const bot = new Bot<MyContext>(<string>process.env.BOTTOKEN)
connectMongoDB()

bot.use(session)
bot.use(i18n)
bot.use(handler)
bot.use(router)
bot.start({
  onStart: () => {
    logger.info(`https://t.me/${bot.botInfo.username} has been started`)
  },
})
