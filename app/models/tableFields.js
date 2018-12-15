/**
 * resBase 非敏感数据，面向用户
 */
module.exports = {
  user: {
    resBase: ['_id', 'name', 'token', 'roles']
  },
  schedule: {
    resBase: ['_id', 'name', 'describe', 'type', 'open']
  },
  logAudit: {
    resBase: ['_id', 'log_type', 'user_id', 'user_name', 'platform']
  },
  dictionary: {
    resBase: ['_id', 'key', 'describe', 'type', 'value']
  }
}
