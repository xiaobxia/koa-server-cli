const models = require('../models')

const ScheduleModel = models.Schedule

/**
 * 基本
 */
const field = { _id: 0, create_at: 0, __v: 0 }

exports.ScheduleModel = ScheduleModel

exports.newAndSave = function (data) {
  const Schedule = new ScheduleModel(data)
  return Schedule.save()
}

exports.delete = function (query) {
  return ScheduleModel.remove(query)
}

exports.update = function (query, data) {
  return ScheduleModel.update(query, {
    $set: data
  })
}

exports.find = function (query, select, opt) {
  return ScheduleModel.find(query, select || field, opt)
}

exports.findOne = function (query, select) {
  return ScheduleModel.findOne(query, select || field)
}

exports.findOneById = function (id) {
  return ScheduleModel.findById(id)
}

exports.check = function (query, opt) {
  return ScheduleModel.findOne(query, '_id', opt)
}

exports.count = function (query) {
  return ScheduleModel.count(query)
}
