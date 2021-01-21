const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const WebSocketServer = require('websocket').server

dotenv.config({
  path: '.env'
})

const app = express()

const http = require('http').createServer(app)

const wsServer = new WebSocketServer({
  httpServer: http
});

module.exports = wsServer;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Allow cors
app.use(cors({ origin: 'http://localhost:8080', credentials: true }))

// routes
const apiRouter = require('./routes')
app.use('/api', apiRouter)

// 404 response
app.all('*', (req, res) => res.status(404).json({
  status: 404,
  message: 'Page not found.'
}))

// Unauthorized error
app.use((err, req, res) => {
  if(err.name === 'UnauthorizedError') res.status(404).json({
    status: 401,
    message: 'Unauthorized'
  })
})

wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);
  
  connection.on('close', function(reasonCode, description) {
      console.log('Client has disconnected.');
  });
})

const port = process.env.PORT || 3000
// Setup app and listen
http.listen(port, () => {
  console.log('API service started on port: ' + port)
})