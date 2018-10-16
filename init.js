const proxys = require('./app/proxy/index')

proxys.User.newAndSave({
  name: 'xiaobxia',
  password: '3f71b00f7ad3aa3d676b188628702fc4'
}).then((doc) => {
  console.log(doc)
})

proxys.Schedule.newAndSave({
  name: 'sayHello',
  describe: '发送问好邮件',
  open: 'open',
  type: 'test'
}).then((doc) => {
  console.log(doc)
})
