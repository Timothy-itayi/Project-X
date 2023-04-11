import { join } from 'node:path'
import express from 'express'

const usersRoutes = require('./routes/users.ts')

const server = express()

server.use(express.static(join(__dirname, 'public')))
server.use('/users', usersRoutes)

export default server
