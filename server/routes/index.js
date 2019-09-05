const Router = require('express').Router,
  fs = require('fs'),
  path = require('path'),
  ssr = require('../../build/server'),
  data = require('../../public/assets/data.json'),
  response = require('../services/response');
routes = new Router();

const indexFile = path.resolve('./public/html/index.html');

let initialState = {
  isFetching: false,
  apps: data
}

routes.get('/*', (req, res) => {
  const {
    preloadedState,
    content,
    context
  } = ssr(initialState, req);

  fs.readFile(indexFile, 'utf-8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    if (context.statusCode === 404) {
      res.status(404);
    }

    if (context.url) {
      console.log('REDIRECTED TO ' +  context.url );
      return res.redirect(301, context.url);
    }

    const htmlResponse = response(data, "Server Rendered Page", content, preloadedState);

    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(htmlResponse);
  });

});

module.exports = routes;