const Proxy = require('../proxy')

const Dictionaries = Proxy.Dictionaries

/**
 * 通过键获取字典
 * @param key
 * @returns {Promise.<void>}
 */
exports.getByKey = async function (key) {
  return Dictionaries.findOne({key})
}
