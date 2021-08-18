import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()


app.use(express.json())
app.use(routes)

app.use('/uploads/pads', express.static(path.join(__dirname, '..', 'uploads','pads')))
app.use('/uploads/ambient-pad', express.static(path.join(__dirname, '..', 'uploads','ambient-pad')))


app.listen(3333)