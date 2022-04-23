const express = require('express');
const app = express()
const mongoose = require('mongoose');
const { mongoUri, PORT } = require('./config');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketListItems')


app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDb connected..."))
    .catch((err) => console.error(err))

app.use('/api/bucketListItems', bucketListItemRoutes)
app.get('/', (req, res) => res.send('Hello world'))

app.listen(PORT, () => console.log(`App listening at http:://localhost:${PORT}`))
