import { Composer, InlineKeyboard } from 'grammy'
import { MyContext } from '..'

export const main = new Composer<MyContext>()
main.on('message', ctx => {
  ctx.copyMessage(ctx.chat.id)
})
export function showLangs(ctx: MyContext) {
  const inlineKeyboard = new InlineKeyboard()
  inlineKeyboard.text("O'zbekcha 🇺🇿", 'lang_uz')
  inlineKeyboard.text('Русский 🇺🇿', 'lang_uz')
  inlineKeyboard.text('English 🇺🇿', 'lang_uz')
  ctx.reply(ctx.t('select-lang'), { reply_markup: inlineKeyboard })
}
