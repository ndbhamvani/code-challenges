import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const bankESGSchema = new mongoose.Schema({
    esg_id: Number,
    company_name: String,
    stock_symbol: String,
    total: Number
  } 
)

bankESGSchema.plugin(mongooseUniqueValidator)

const ESGinfo = mongoose.model('ESGinfo', bankESGSchema)

export default ESGinfo
