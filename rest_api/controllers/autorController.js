const trainerRepository = require('../repositories/autor-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new autorRepository()

function autorController() {}

autorController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe nome do autor')
  _validator.isRequired(req.body.year, 'Informe a data de nascimento')
  _validator.isRequired(req.body.address, 'Informe o endereço')
 


  ctrlBase.post(_repo, _validator, req, res)
}

autorController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe nome do autor')
  _validator.isRequired(req.body.year, 'Informe a data de nascimento')
  _validator.isRequired(req.body.address, 'Informe o endereço')


  ctrlBase.put(_repo, _validator, req, res)
}

autorController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

autorController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

autorController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}
module.exports = autorController