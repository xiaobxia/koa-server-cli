const models = require('../models')

const DictionaryModel = models.Dictionary

/**
 * 基本
 */

const field = { _id: 0, create_at: 0, __v: 0 }

exports.DictionaryModel = DictionaryModel

exports.newAndSave = function (data) {
  const Dictionary = new DictionaryModel(data)
  return Dictionary.save()
}

exports.delete = function (query) {
  return DictionaryModel.remove(query)
}

exports.update = function (query, data) {
  return DictionaryModel.update(query, {
    $set: data
  })
}

exports.find = function (query, select, opt) {
  return DictionaryModel.find(query, select || field, opt)
}

exports.findOne = function (query, select) {
  return DictionaryModel.findOne(query, select || field)
}

exports.findOneById = function (id) {
  return DictionaryModel.findById(id)
}

exports.check = function (query, opt) {
  return DictionaryModel.findOne(query, '_id', opt)
}

exports.count = function (query) {
  return DictionaryModel.count(query)
}
