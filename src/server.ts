import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()


app.use(express.json())
app.use(routes)

app.use('/uploads/warm_pads', express.static(path.join(__dirname, '..', 'uploads','WARM_PADS')))
app.use('/uploads/pad_shimmer', express.static(path.join(__dirname, '..', 'uploads','PAD_SHIMMER')))
app.use('/uploads/motions_pad', express.static(path.join(__dirname, '..', 'uploads','MOTIONS_PAD')))
app.use('/uploads/hilsong_pad', express.static(path.join(__dirname, '..', 'uploads','HILSONG_PAD')))
app.use('/uploads/ambient_pad', express.static(path.join(__dirname, '..', 'uploads','AMBIENT_PAD')))
app.use('/uploads/guitar_pad', express.static(path.join(__dirname, '..', 'uploads','GUITAR_PAD')))
/** the next updateding */
app.use('/uploads/agudo_pad', express.static(path.join(__dirname, '..', 'uploads','AGUDO_PAD')))
app.use('/uploads/ambrose_pad', express.static(path.join(__dirname, '..', 'uploads','AMBROSE_PAD')))
app.use('/uploads/bethel_pad', express.static(path.join(__dirname, '..', 'uploads','BETHEL_PAD')))
app.use('/uploads/envolving_pad', express.static(path.join(__dirname, '..', 'uploads','ENVOLVING_PAD')))
app.use('/uploads/organ_choir_pad', express.static(path.join(__dirname, '..', 'uploads','ORGAN_CHOIR_PAD')))
app.use('/uploads/hilsong_pad_2', express.static(path.join(__dirname, '..', 'uploads','HILSONG_PAD_2')))
app.use('/uploads/worship_solution_pad', express.static(path.join(__dirname, '..', 'uploads','WORSHIP_SOLUTION_PAD')))



app.listen(3333, () => console.log('server is running'))