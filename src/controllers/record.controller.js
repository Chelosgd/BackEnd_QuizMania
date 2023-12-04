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

    createRecord(req, res) {
      const recordData = req.body;
      console.log(req.body);
      Record.create(recordData)
        .then(response=>{
            console.log(response);
            if(response){
                console.log('Record created:', response);
                res.send(response);
            }
            else{
                res.sendStatus(400);
            }
        })
        .catch(err=>{
            console.log('Record error:', err);
        })
    }
}

module.exports = new RecordController();