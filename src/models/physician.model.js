let mongoose = require('mongoose')

// variables used to connect to the mongo database
const server = 'ds047632.mlab.com:47632'
const database ='restful-api-test-database'
const user = 'nkw1'
const password = 'NKW_t3ch!1'

// command to connect to the mongo database
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, {useNewUrlParser: true})

let PhysicianSchema = new mongoose.Schema({
  Change_Type: String,
  Physician_Profile_ID: Number,
  Physician_First_Name: {
    type: String,
    required: true
  },
  Physician_Middle_Name: String,
  Physician_Last_Name: {
    type:String,
    required: true
  },
  Physician_Name_Suffix: String,
  Recipient_Primary_Business_Street_Address_Line1: {
    type: String,
    required: true
  },
  Recipient_Primary_Business_Street_Address_Line2: String,
  Recipient_City: {
    type: String,
    required: true
  },
  Recipient_State: String,
  Recipient_Zip_Code: Number,
  Recipient_Country: String,
  Recipient_Province: String,
  Recipient_Postal_Code: String,
  Physician_Primary_Type: String,
  Physician_Specialty: String,
  Record_ID: Number,
  Program_Year: Number,
  Total_Amount_Invested_USDollars: Number,
  Value_of_Interest: Number,
  Terms_of_Interest: String,
  Submitting_Applicable_Manufacturer_or_Applicable_GPO_Name: String,
  Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID: Number,
  Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Name: String,
  Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_State: String,
  Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Country: String,
  Dispute_Status_for_Publication: String,
  Interest_Held_by_Physician_or_an_Immediate_Family_Member: String,
  Payment_Publication_Date: String
})

module.exports = mongoose.model('Physicians', PhysicianSchema)
