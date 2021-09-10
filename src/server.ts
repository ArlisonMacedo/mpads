import express from 'express'
import routes from './routes'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(cors())

app.use(express.json())
app.use(routes)

app.use('/uploads/warm_pads', express.static(path.join(__dirname, '..', 'uploads','WARM_PADS')))
app.use('/uploads/pad_shimmer', express.static(path.join(__dirname, '..', 'uploads','PAD_SHIMMER')))
app.use('/uploads/motions_pad', express.static(path.join(__dirname, '..', 'uploads','MOTIONS_PAD')))
app.use('/uploads/hilsong_pad', express.static(path.join(__dirname, '..', 'uploads','HILSONG_PAD')))
app.use('/uploads/ambient_pad', express.static(path.join(__dirname, '..', 'uploads','AMBIENT_PAD')))



app.listen(process.env.PORT || 3333)