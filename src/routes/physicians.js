let PhysicianModel = require('../models/physician.model')
let express = require('express')
let router = express.Router()

// Get method for the physicians database
router.get('/physicians', (req, res) => {
  if (!req.query.Physician_First_Name) {
    return res.status(400).send("Missing URL parameter: Physician_First_Name")
  }
  PhysicianModel.findOne({
    Physician_First_Name: req.query.Physician_First_Name
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.stats(500).json(err)
  })
})

module.exports = router
