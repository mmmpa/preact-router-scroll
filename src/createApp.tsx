import { h, VNode } from 'preact'

export function createApp ({ router }): () => VNode<any> {
  return function App (): VNode<any> {
    return (
      <article>
        {router}
      </article>
    )
  }
}
