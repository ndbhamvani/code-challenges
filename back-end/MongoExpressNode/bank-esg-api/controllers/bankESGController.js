import ESGinfo from '../models/esgData.js'

async function getAllBankESGinfo(_req, res, next) {
  try {
    const bankESG = await ESGinfo.find()
    return res.status(200).json(bankESG)
  } catch (err) {
    next(err)
  }
}

async function createBankESGinfo(req, res, next) {
  try {
    const newBankESGinfo = await ESGinfo.create(req.body)

    return res.status(201).send(newBankESGinfo)
  } catch (err) {
    next(err)
  }
}

async function getBankESGinfo(req, res, next) {
  const { id } = req.params

  try {
    const esgData = await ESGinfo.findById(id)
    res.send(esgData)
  } catch (err) {
    next(err)
  }
}

async function deleteBankESGinfo(req, res, next) {
  const { id } = req.params

  try {
    const esgData = await ESGinfo.findByIdAndDelete(id)

    if (!esgData) {
      return res.status(404).send({ message: 'ESGinfo does not exist' })
    }

    return res.status(200).json(esgData)
  } catch (err) {
    next(err)
  }
}

async function updateBankESGinfo(req, res, next) {
  const { id } = req.params
  const { body } = req

  try {
    const esgData = await ESGinfo.findById(id)

    if (!esgData) {
      return res.send({ message: 'No esgData found' })
    }

    esgData.set(req.body)
    const savedBankESGinfo = esgData.save()

    res.status(200).json(esgData)
  } catch (err) {
    next()
  }
}

export default {
  getAllBankESGinfo,
  createBankESGinfo,
  getBankESGinfo,
  deleteBankESGinfo,
  updateBankESGinfo,
}
