import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

const Navigation = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ path }) => {
          if (path == '/') return null
          return (
            <li key={path}>
              <Link to={path}>{path.substring(1)}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
