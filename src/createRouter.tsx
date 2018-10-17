import { h, VNode } from 'preact'
import Router, { Route } from 'preact-router'
import PageA from './components/PageA'
import PageB from './components/PageB'
import PageC from './components/PageC'
import PageD from './components/PageD'


export function createRouter (addons): VNode<any> {
  return (
    <Router {...addons}>
      <Route default component={PageA} />
      <Route path='/b' component={PageB} />
      <Route path='/c' component={PageC} />
      <Route path='/d' component={PageD} />
    </Router>
  )
}
