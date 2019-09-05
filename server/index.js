const http = require('http'),
  app = require('./app'),
  port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, function () {
  console.log(`Server is running on ${port}`);
});
