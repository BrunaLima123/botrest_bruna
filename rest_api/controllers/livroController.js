const trainerRepository = require('../repositories/livro-repository')
const ctrlBase = require('../bin/base/controller-base')
const validators = require('../bin/lib/validators')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const config = require('../config')

const _repo = new livroRepository()

function livroController() {}

livroController.prototype.post = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe nome do livro')
  _validator.isRequired(req.body.genre, 'Informe o genero')
  _validator.isRequired(req.body.year, 'Informe o ano de lançamento')
  _validator.isRequired(req.body.autor, 'Informe o autor')


  ctrlBase.post(_repo, _validator, req, res)
}

livroController.prototype.put = async (req, res) => {
  let _validator = new validators()

  _validator.isRequired(req.body.name, 'Informe nome do livro')
  _validator.isRequired(req.body.genre, 'Informe o genero')
  _validator.isRequired(req.body.year, 'Informe o ano de lançamento')
  _validator.isRequired(req.body.autor, 'Informe o autor')


  ctrlBase.put(_repo, _validator, req, res)
}

livroController.prototype.get = async (req, res) => {
  ctrlBase.get(_repo, req, res)
}

livroController.prototype.getById = async (req, res) => {
  ctrlBase.getById(_repo, req, res)
}

livroController.prototype.delete = async (req, res) => {
  ctrlBase.delete(_repo, req, res)
}
module.exports = livroController