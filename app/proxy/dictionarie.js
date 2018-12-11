const models = require('../models')

const DictionarieModel = models.Dictionarie

/**
 * 基本
 */

exports.DictionarieModel = DictionarieModel

exports.newAndSave = function (data) {
  const Dictionarie = new DictionarieModel(data)
  return Dictionarie.save()
}

exports.delete = function (query) {
  return DictionarieModel.remove(query)
}

exports.update = function (query, data) {
  return DictionarieModel.update(query, {
    $set: data
  })
}

exports.find = function (query, opt) {
  return DictionarieModel.find(query, {}, opt)
}

exports.findOne = function (query) {
  return DictionarieModel.findOne(query)
}

exports.findOneById = function (id) {
  return DictionarieModel.findById(id)
}

exports.check = function (query, opt) {
  return DictionarieModel.findOne(query, '_id', opt)
}

exports.count = function (query) {
  return DictionarieModel.count(query)
}
