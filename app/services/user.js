const Proxy = require('../proxy')

const UserProxy = Proxy.User

/**
 * 通过用户名获取用户
 * @param name
 * @returns {Promise<void>}
 */
exports.getUserByName = async function (name) {
  const user = await UserProxy.findOne({name})
  if (!user) {
    throw new Error('用户不存在')
  }
  return user
}
