import { CustomHistory as PreactCustomHistory, RouterOnChangeArgs } from 'preact-router'

type StoredScrollPosition = { x: number, y: number }
type ScrollPositionStore = { [key: number]: StoredScrollPosition }
type RoutingListener = (l: Location) => any

const defaultScrollPosition: StoredScrollPosition = { x: 0, y: 0 }

class CustomHistory implements PreactCustomHistory {
  idNow = 0
  currentId = 0
  scrollPositions: ScrollPositionStore = {}
  location: Location = window.location

  constructor () {
    window.addEventListener('popstate', this.onPopState)
  }

  listen (f: RoutingListener): () => void {
    const listener = (): void => f(location)
    window.addEventListener('popstate', listener)
    return () => window.removeEventListener('popstate', listener)
  }

  store () {
    const { scrollX: x, scrollY: y } = window
    this.scrollPositions[this.currentId] = { x, y }
  }

  onPopState = ({ state: { id } }: PopStateEvent): void => {
    this.store()
    this.currentId = id
  }

  work (type, url) {
    this.store()

    this.idNow += 1
    this.currentId = this.idNow
    window.history[`${type}State`]({ id: this.idNow }, `page${this.idNow}`, url)
  }

  push (url) {
    this.work('push', url)
  }

  replace (url) {
    this.work('replace', url)
  }

  onChange = ({ current }: RouterOnChangeArgs): void => {
    if (!current) {
      return
    }
    const { x, y } = this.scrollPositions[this.currentId] || defaultScrollPosition
    setTimeout(() => window.scrollTo(x, y))
  }
}

export default function createCustomHistory (): { history: CustomHistory, onChange: (args: RouterOnChangeArgs) => void } {
  const history = new CustomHistory()
  return { history, onChange: history.onChange }
}
