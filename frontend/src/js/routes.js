import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/index.js'
import Host from './views/Host/index.js'
import Form from './views/Form/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Host} />
    <Route path='/form' component={Form} />
  </Route>
)
