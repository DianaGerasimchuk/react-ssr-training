const express = require('express'),
  app = express(),
  path = require('path'),
  routes = require('./routes');

app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/', routes);

module.exports = app;