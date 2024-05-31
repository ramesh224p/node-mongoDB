#!/usr/bin/env node
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');



app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : true
}))

app.use('/mongoapiv1',require('./api/routes/mainApiRtr'));

const port = 8800;

app.listen(port, (err)=>{
    console.log(`application listing on port: ${port}`)
})