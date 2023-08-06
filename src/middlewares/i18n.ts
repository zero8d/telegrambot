import { I18n } from '@grammyjs/i18n'
import { MyContext } from '..'

export const i18n = new I18n<MyContext>({
  defaultLocale: 'en',
  useSession: true,
  directory: 'locales', // Load all translation files from locales/.
})
