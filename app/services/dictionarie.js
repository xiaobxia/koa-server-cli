const Proxy = require('../proxy')

const Dictionarie = Proxy.Dictionarie

/**
 * 通过键获取字典
 * @param key
 * @returns {Promise.<void>}
 */
exports.getByKey = async function (key) {
  return Dictionarie.findOne({ key })
}
