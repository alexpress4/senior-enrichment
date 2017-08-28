'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = db.model('campus');
const Student = db.model('student');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}));

// CAMPUS GET ROUTES

api.get('/campuses', function(req, res, next){
  Campus.findAll()
    .then(result => res.json(result))
    .catch(next);
});

api.get('/campuses/:id', function(req, res, next){
  var currentId = req.params.id;

  Campus.findById(currentId)
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
});

// STUDENT GET ROUTES

api.get('/students', function(req, res, next){
  Student.findAll()
    .then(result => res.json(result))
    .catch(next);
});

api.get('/students/:id', function(req, res, next){
  var currentId = req.params.id;

  Student.findById(currentId)
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
});

// STUDENT & CAMPUS POST ROUTES

api.post('/students', function(req, res, next){
  Student.create(req.body)
    .then(result => res.send(result))
    .catch(next);
});

api.post('/campuses', function(req, res, next){
  Campus.create(req.body)
    .then(result => res.send(result))
    .catch(next);
});

// STUDENT & CAMPUS PUT ROUTES

api.put('/students/:id', function(req, res, next){
  var currentId = req.params.id;

  Student.findById(currentId)
    .then(result => result.update(req.body))
    .catch(next);
});

api.put('/campuses/:id', function(req, res, next){
  var currentId = req.params.id;

  Campus.findById(currentId)
    .then(result => result.update(req.body))
    .catch(next);
});

// STUDENT & CAMPUS DELETE ROUTES

api.delete('/students/:id', function(req, res, next){
  var currentId = req.params.id;

  Student.destroy({
    where: {
      id: currentId
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

api.delete('/campuses/:id', function(req, res, next){
  var currentId = req.params.id;

  Campus.destroy({
    where: {
      id: currentId
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = api;
