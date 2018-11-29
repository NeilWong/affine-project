let PhysicianModel = require('../models/physician.model')
let express = require('express')
let router = express.Router()
let app = express()


// Get method for the physicians database
router.get('/physician', (req, res) => {
  console.log(req.query)
  if (!req.query.Physician_First_Name && !req.query.Physician_Last_Name) {
    console.log('failed')
    return res.status(400).send("Missing URL parameter(s): Physician_First_Name + Physician_Last_Name")
  }
  if (req.query.Physician_First_Name && req.query.Physician_Last_Name && !req.query.Physician_Middle_Name) {
    console.log("passed")
    PhysicianModel.findOne({
      Physician_First_Name: req.query.Physician_First_Name,
      Physician_Last_Name: req.query.Physician_Last_Name
    })
    .then(doc => {
      const address = doc.Recipient_Primary_Business_Street_Address_Line1 + " " + doc.Recipient_City + " " + doc.Recipient_State;
      console.log(address);
      res.render('profile', {address: address})
    })
    .catch(err => {
      console.log("physican request error")
    })
  } else {
    console.log("passed")
    PhysicianModel.findOne({
      Physician_First_Name: req.query.Physician_First_Name,
      Physician_Last_Name: req.query.Physician_Last_Name
    })
    .then(doc => {
      console.log("passed2")
      let address = doc.Recipient_Primary_Business_Street_Address_Line1 + " " + doc.Recipient_City + " " + doc.Recipient_State;
      console.log(address);
      res.render('profile', {address: address})
    })
    .catch(err => {
      console.log(err);
    })

  }
})

module.exports = router
