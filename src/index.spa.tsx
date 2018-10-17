import { h, render } from 'preact'
import { createApp } from './createApp'
import { createRouter } from './createRouter'
import createCustomHistory from './createCustomHistory'

(Object as any).start = function start (initialStore, dom = document.body) {
  const { history, onChange } = createCustomHistory()
  const router = createRouter(createCustomHistory())
  const App = createApp({ router })
  render(<App />, document.body, dom)
}
