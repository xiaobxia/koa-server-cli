module.exports = {
  user: {
    resBase: ['_id', 'name', 'token']
  },
  schedule: {
    resBase: ['_id', 'name', 'describe', 'type', 'open', 'create_at']
  },
  logAudit: {
    resBase: ['_id', 'log_type', 'user_id', 'user_name', 'platform', 'create_at']
  },
  dictionary: {
    resBase: ['_id', 'key', 'user_id', 'user_name', 'platform', 'create_at']
  }
}
