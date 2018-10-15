const reqlib = require('app-root-path').require
const sendMail = require('../common/email')
const config = reqlib('/config/index')
const emailTemplate = require('../const/emailTemplate')

/**
 * 发送测试邮件
 * @param ctx
 * @returns {Promise<void>}
 */
exports.testEmail = async function (ctx) {
  try {
    await sendMail(emailTemplate.sayHello({
      userEmail: config.email.adminAccount.user
    }))
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}
