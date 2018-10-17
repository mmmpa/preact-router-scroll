import { h, VNode } from 'preact'
import Linkers from './Linkers'

export default function PageB (): VNode<any> {
  return (
    <div>
      <Linkers />
      <h1>page B</h1>
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <Linkers />
    </div>
  )
}
