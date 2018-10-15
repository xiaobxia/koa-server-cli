/**
 * Created by xiaobxia on 2018/4/1.
 */
const schedule = require('node-schedule')
const request = require('request-promise')
const reqlib = require('app-root-path').require
const logger = require('../common/logger')
const config = reqlib('/config/index')
const scheduleService = require('../services/schedule')
/**
 * cron风格的
 *    *    *    *    *    *
 ┬    ┬    ┬    ┬    ┬    ┬
 │    │    │    │    │    |
 │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
 │    │    │    │    └───── month (1 - 12)
 │    │    │    └────────── day of month (1 - 31)
 │    │    └─────────────── hour (0 - 23)
 │    └──────────────────── minute (0 - 59)
 └───────────────────────── second (0 - 59, OPTIONAL)
 */
let rule = new schedule.RecurrenceRule()

// 工作日，1点删除不出售的基金
rule.dayOfWeek = [new schedule.Range(2, 4)]
rule.hour = [1]

function deleteUnSellFund() {
  scheduleService.getSchedule('deleteUnSellFund').then((data)=>{
    if (data && data.value === 'open') {
      request({
        method: 'get',
        url: `http://localhost:${config.server.port || 8080}/${config.project.projectName}/schedule/deleteUnSellFund`
      }).catch(function (err) {
        logger.error(err)
      })
    }
  })
}

const job = schedule.scheduleJob(rule, deleteUnSellFund)

module.exports = job
