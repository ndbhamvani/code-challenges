import express from 'express'
import bankESGController from '../controllers/bankESGController.js'

const Router = express.Router()

Router.route('/bankESG')
  .get(bankESGController.getAllBankESGinfo)
  .post(bankESGController.createBankESGinfo)

Router.route('/bankESG/:id')
  .get(bankESGController.getBankESGinfo)
  .put(bankESGController.updateBankESGinfo)
  .delete(bankESGController.deleteBankESGinfo)

export default Router
