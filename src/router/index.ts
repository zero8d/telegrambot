import { Router } from '@grammyjs/router'
import { start } from './start'
import { main } from './main'
import { MyContext } from '..'

export const router = new Router<MyContext>(ctx => ctx.session.state)
router.route('start', start)
router.route('main', main)
