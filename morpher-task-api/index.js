const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const socketIo = require('socket.io')

dotenv.config({
  path: '.env'
})

const app = express()

const http = require('http').createServer(app)

const io = socketIo(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true,
  },
  serveClient: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Allow cors
app.use(cors({ origin: 'http://localhost:8080', credentials: true }))

app.use((req, res, next) => {
  res.io = io
  next()
})

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

io.on('connect', (socket) => {
  socket.emit('TEST', 1)
})

const port = process.env.PORT || 3000
// Setup app and listen
http.listen(port, () => {
  console.log('API service started on port: ' + port)
})