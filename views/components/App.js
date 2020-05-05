import React from 'react'
import Navigation from './Navigation'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes'

const App = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>This small application was built with the purpose to serve as a boilerplate for server-side rendered applications with a React frontend. This sample app is simple enough that you most likely won't notice any perfomance improvements. In a relatively scaled application, however, it'll prove incredbly faster than most client-side rendered applications. More info & how to setup <a href="https://github.com/ua-lock/ssr-react-boilerplate" rel="noreferreer" target='_blank'>here</a>.</p>
      <p>To see some routing in action, click a planet or black hole link  below to see some quick facts about it:</p>
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
