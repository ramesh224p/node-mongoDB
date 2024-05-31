const express = require('express');
const apiRtr = express.Router();

const accessCtrl = require('../modules/auth/controllers/accessCtrl');

apiRtr.post('/login',accessCtrl.loginCtrl)

apiRtr.post('/update',accessCtrl.updateCtrl)




module.exports = apiRtr;
