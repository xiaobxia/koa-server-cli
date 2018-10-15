const sysConsts = require('./sysConsts')
const errorConsts = require('./errorConsts')
const emailTemplate = require('./emailTemplate')

module.exports = {
  ...sysConsts,
  ...errorConsts,
  ...emailTemplate
}
