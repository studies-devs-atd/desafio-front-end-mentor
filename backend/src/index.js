import express from 'express'
import cors from 'cors'

import logger from './config/logger.js'
import router from './router.js'
import { PORT } from './config/globals.js'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use('/', router)

app.listen(PORT, () => logger.success(`Server started on port :${PORT}`))
