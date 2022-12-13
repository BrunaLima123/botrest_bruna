const trainerRepository = require('../repositories/editora-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new editoraRepository()

function editoraController() {}

editoraController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe nome do editora')
  _validator.isRequired(req.body.year, 'Informe o ano de lançamento')
  _validator.isRequired(req.body.address, 'Informe o endereço')


  ctrlBase.post(_repo, _validator, req, res)
}

editoraController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe nome do editora')
  _validator.isRequired(req.body.year, 'Informe o ano de lançamento')
  _validator.isRequired(req.body.address, 'Informe o endereço')


  ctrlBase.put(_repo, _validator, req, res)
}

editoraController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

editoraController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

editoraController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}
module.exports = editoraController