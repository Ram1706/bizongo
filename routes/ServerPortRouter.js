const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');


ServerPortRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });
});

module.exports = ServerPortRouter;