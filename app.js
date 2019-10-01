const express = require('express'),
  cookieParser = require('cookie-parser'),
  http = require('http'),
  bodyParser = require('body-parser'),
  services = require('./services');

// init express framework
const app = express();
// apply middleware stack
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use('/api/run', services.run)
  // Last ROUTE catch 404 and forward to error handler
  .use((req, res) => res.status(404).json({ error: 'Not Found. Bad API URL' }))
  // error handler
  .use((err, req, res) => {
    console.error(err);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({ error_msg: err.message });
  });

// Setup NodeJS HTTP server
const port = process.env.PORT || 8080;
const server = http.createServer(app); // create HTTP server

server
  .listen(port)
  .on('error', onError) // server event hanlers 'on.error'
  .on('listening', () => console.log('HTTP server is running on port:', port));

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') throw error;
  let bind = `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      break;
    default:
      throw error;
  }
  process.exit(1);
}

process.on('unhandledRejection', error => console.log('unhandledRejection', error.message));
