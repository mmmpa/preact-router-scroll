import { h, VNode } from 'preact'
import Linkers from './Linkers'

export default function PageA (): VNode<any> {
  return (
    <div>
      <Linkers />
      <h1>page A</h1>
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <Linkers />
    </div>
  )
}
