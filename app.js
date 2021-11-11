const http = require('http');

const express=require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}))

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(`/admin`,adminRoutes)
app.use(`/shop`,shopRoutes)
app.use((req, res,next) => {
    res.status(404).send(`<h1>page not found</h1>`)
})

app.listen(3000)