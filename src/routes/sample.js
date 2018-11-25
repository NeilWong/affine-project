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
router.get('./sample', (req, res) => {
  if (!req.query.fName && !req.query.lName) {
    return res.status(400).send("Missing URL parameter: first name & last name")
  }
  SampleModel.findOne({
    fName: req.query.fName,
    lName: req.query.lName
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.stats(500).json(err)
  })
})

module.exports = router
