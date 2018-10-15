const Proxy = require('../proxy')
const LogAuditProxy = Proxy.LogAudit

exports.addLogAudit = async function (data) {
  return LogAuditProxy.newAndSave(data)
}
