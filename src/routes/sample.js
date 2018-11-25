// imports
let SampleModel = require('../models/sample.model')
// dependencies
let express = require('express')
let router = express.Router()

// POST
router.post('/sample', (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing")
  }
  let model = new SampleModel(req.body)

  model.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }
      //201 = resource was created
      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.get('/sample', (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameter: email")
  }
  SampleModel.findOne({
    email: req.query.email
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.stats(500).json(err)
  })
})

// PUT
router.put('/sample', (req, res) => {
  if (!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }
  SampleModel.findOneAndUpdate({
    email: req.query.email
  },  req.body, {
    new: true
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

// DELETE
router.delete('/sample', (req, res) => {
  if (!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }
  SampleModel.findOneAndRemove({
    email: req.query.email
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router
