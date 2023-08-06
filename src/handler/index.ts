import { Composer } from 'grammy'
import { MyContext } from '..'
import { startInit } from '../router/start'
import { showLangs } from '../router/main'

export const handler = new Composer<MyContext>()

handler.on('my_chat_member:from', ctx => {
  if (
    ctx.myChatMember.new_chat_member.status === 'kicked' &&
    ctx.myChatMember.chat.type === 'private'
  ) {
    ctx.session.blocked = true
  }
})
handler.command('lang', showLangs)
handler.callbackQuery(/lang_/, ctx => {
  const lang = ctx.callbackQuery.data.split('_')[1]
  ctx.session.__language_code = lang
  ctx.editMessageText(ctx.t('selected-lang', { lang }), {
    reply_markup: { inline_keyboard: [] },
  })
})
handler.command('start', startInit)
