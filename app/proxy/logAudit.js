/**
 * Created by xiaobxia on 2018/1/23.
 */
const models = require('../models')

const LogAuditModel = models.LogAudit

/**
 * 基本
 */

const field = { _id: 0, create_at: 0, __v: 0 }

exports.LogAuditModel = LogAuditModel

exports.newAndSave = function (data) {
  const log = new LogAuditModel(data)
  return log.save()
}

exports.delete = function (data) {
  return LogAuditModel.remove(data)
}

exports.update = function (query, data) {
  return LogAuditModel.update(query, {
    $set: data
  })
}

exports.find = function (query, select, opt) {
  return LogAuditModel.find(query, select || field, opt)
}

exports.findOne = function (query, select) {
  return LogAuditModel.findOne(query, select || field)
}

exports.findOneById = function (id) {
  return LogAuditModel.findById(id)
}

exports.check = function (query, opt) {
  return LogAuditModel.findOne(query, '_id', opt)
}

exports.count = function (query) {
  return LogAuditModel.count(query)
}
