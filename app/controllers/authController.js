/**
 * 登录
 * @param ctx
 * @returns {Promise<void>}
 */
exports.login = async function (ctx) {
  const query = ctx.request.body
  try {
    const data = ctx.validateData({
      account: {type: 'string', required: true},
      password: {type: 'string', required: true},
      platform: {type: 'string', required: true, include: ['mobile', 'pc']}
    }, query)
    const userRaw = await ctx.services.auth.login(data.account, data.password)
    const user = {
      name: userRaw.name
    }
    //登录在线时间
    const keepDay = 7
    const token = ctx.token.sign(user, 60 * 60 * 24 * keepDay)
    //添加登录日志
    ctx.services.log.addLogAudit({
      log_type: 'login',
      platform: data.platform,
      user_id: userRaw._id,
      user_name: userRaw.name
    })
    ctx.body = ctx.resuccess({
      token,
      ...user
    })
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

/**
 * 检查登录状态
 * @param ctx
 * @returns {Promise<void>}
 */
exports.checkLogin = async function (ctx) {
  const token = ctx.query.token
  if (token) {
    try {
      const tokenRaw = ctx.token.verify(token)
      ctx.body = ctx.resuccess({
        name: tokenRaw.name,
        isLogin: true,
        token
      })
    } catch (err) {
      ctx.body = ctx.resuccess({
        isLogin: false
      })
    }
  } else {
    ctx.body = ctx.resuccess({
      isLogin: false
    })
  }
}

/**
 * 退出登录
 * @param ctx
 * @returns {Promise<void>}
 */
exports.logout = async function (ctx) {
  const query = ctx.query
  try {
    const data = ctx.validateData({
      token: {type: 'string', required: false},
      platform: {type: 'string', required: true, include: ['mobile', 'pc']}
    }, query)
    const tokenRaw = ctx.token.verify(data.token)
    const userRaw = await ctx.services.user.getUserByName(tokenRaw.name)
    //添加退出登录日志
    ctx.services.log.addLogAudit({
      log_type: 'logout',
      platform: data.platform,
      user_id: userRaw._id,
      user_name: userRaw.name
    })
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}
