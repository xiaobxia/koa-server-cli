const mongoose = require('mongoose')

const Schema = mongoose.Schema
// 定时任务
const schema = new Schema({
  // 名称
  name: String,
  // 说明
  describe: String,
  // 归类
  type: String,
  // 是否开启
  open: String,
  // 上次修改时间
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({key: 1}, {unique: true})
schema.index({create_at: -1})

module.exports =  mongoose.model('Dictionaries', schema)
