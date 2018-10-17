import { h, VNode } from 'preact'
import Linkers from './Linkers'

export default function PageC (): VNode<any> {
  return (
    <div>
      <Linkers />
      <h1>page C</h1>
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
      <div style={{ backgroundColor: '#000', width: '5px', height: '500px' }} />
      <Linkers />
    </div>
  )
}
