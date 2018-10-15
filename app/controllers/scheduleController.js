/**
 * 添加定时任务
 * @param ctx
 * @returns {Promise.<void>}
 */
exports.addSchedule = async function (ctx) {
  const query = ctx.request.body
  const scheduleService = ctx.services.schedule
  try {
    const data = ctx.validateData({
      name: {type: 'string', required: true},
      describe: {type: 'string', required: true},
      open: {required: true, include: ['open', 'close']},
      type: {type: 'string', required: false}
    }, query)
    // 添加任务
    await scheduleService.addSchedule(data)
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

/**
 * 删除定时任务
 * @param ctx
 * @returns {Promise.<void>}
 */
exports.deleteSchedule = async function (ctx) {
  const query = ctx.query
  const scheduleService = ctx.services.schedule
  try {
    const data = ctx.validateData({
      name: {type: 'string', required: true}
    }, query)
    await scheduleService.deleteSchedule(data.name)
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

/**
 * 更新定时任务
 * @param ctx
 * @returns {Promise.<void>}
 */
exports.updateSchedule = async function (ctx) {
  const query = ctx.request.body
  const scheduleService = ctx.services.schedule
  try {
    const data = ctx.validateData({
      name: {type: 'string', required: true},
      describe: {required: true},
      open: {required: true, include: ['open', 'close']},
      type: {type: 'string', required: false}
    }, query)
    await scheduleService.updateSchedule(data.name, {
      describe: data.describe,
      open: data.open
    })
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

/**
 * 更新定时任务的状态
 * @param ctx
 * @returns {Promise.<void>}
 */
exports.changeScheduleStatus = async function (ctx) {
  const query = ctx.request.body
  const scheduleService = ctx.services.schedule
  try {
    const data = ctx.validateData({
      name: {type: 'string', required: true},
      open: {required: true, include: ['open', 'close']}
    }, query)
    await scheduleService.updateSchedule(data.name, {
      open: data.open
    })
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

/**
 * 获取定时任务
 * @param ctx
 * @returns {Promise.<void>}
 */
exports.getSchedules = async function (ctx) {
  try {
    const schedules = await ctx.services.schedule.getSchedules()
    ctx.body = ctx.resuccess({
      list: schedules
    })
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

exports.getSchedule = async function (ctx) {
  const query = ctx.query
  const scheduleService = ctx.services.schedule
  try {
    const data = ctx.validateData({
      name: {type: 'string', required: true}
    }, query)
    const schdule = await scheduleService.getSchedule(data.name)
    ctx.body = ctx.resuccess(schdule)
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}
