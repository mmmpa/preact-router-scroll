import { h, VNode } from 'preact'
import { Link } from 'preact-router/match'

export default function Linkers (): VNode<any> {
  return (
    <div>
      <ul>
        <li><Link activeClassName='active' href='/'>page A</Link></li>
        <li><Link activeClassName='active' href='/b'>page B</Link></li>
        <li><Link activeClassName='active' href='/c'>page C</Link></li>
        <li><Link activeClassName='active' href='/d'>page D</Link></li>
      </ul>
    </div>
  )
}
