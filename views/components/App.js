import React from 'react'
import Navigation from './Navigation'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes'

const App = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>Like space? Pick a star, and see some facts about it:</p>
      <Navigation />
      <hr />
      <Switch>
        {routes.map(({path, exact, component: C}) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <C {...props} />}
          />
        ))}
      </Switch>
    </div>
  )
}

export default App
