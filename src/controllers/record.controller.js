const express = require('express');
const Record = require('../models/record');

class RecordController {
    getUserRecords(req, res) {
      const userId = req.params.id;
  
      Record.find({ idUser: userId })
        .then(userRecords => {
          res.send(userRecords);
        })
        .catch(error => {
          console.error('Can not get user records', error);
        });
    }
}

module.exports = new RecordController();