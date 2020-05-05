import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import compression from 'compression'

// --- Modules
import markupTemplate from './views/markupTemplate'
import App from './views/components/App'
import routes from './routes'

const app = express()
const PORT = process.env.PORT || 5454
app.use(express.static(__dirname))
app.use(compression())

app.get('/favicon.ico', (req, res) => res.end())

app.get('*', (req, res) => {
  const preloadedMarkup = renderToString(
    <StaticRouter context={{}} location={req.url}>
      <App />
    </StaticRouter>
  )
  const requestLocation =
    routes.find((route) => matchPath(req.url, route)) || null

  requestLocation
    ? res.status(200).send(markupTemplate(preloadedMarkup))
    : res.status(400).send('Document not goblin')
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  return console.info(`Server running @ port ${PORT}`)
})
