# morphertask
Morpher Increment number task.

## Technology stack:
* Client: Vue.js (v2.6.12)
* API: Node.js - Express (v12.18.3)
* Database: PostgreSQL (v13)

## System requirements:
* Node.js - 12.18.3+
* Yarn - 1.22.4+
* Docker - 20.10.2+

## Installation:
```
// Clone the project
git clone https://github.com/harisvreto/morphertask.git

// Navigate to project
cd morphertask

// Navigate to morpher-task-api
cd morpher-task-api

// Add .env file to morpher-task-api with the following content
NODE_ENV='development'
APP_PORT=3000
DB_USER='postgres'
DB_PASS='postgres'
DB_HOST='postgresdb'
DB_PORT=5432
DB_NAME='morpher'

// Navigate to morpher-task-app
cd morpher-task-app

// Add .env file to morpher-task-app with the following content
API_BASE_URL=http://localhost:3000

// Navigate to main project directory /morphertask and run docker
docker-compose up

//WAIT TO PROCESS...
```

## Guide
* Client app -> http://localhost:8080
* API service -> http://localhost:3000
```
Api scheme -> /api
Get number -> GET /api/number
Increment number -> POST /api/number
```
