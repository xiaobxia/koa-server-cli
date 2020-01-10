module.exports = {
  db: 'mongodb://serviceBase:serviceBase@47.98.140.76:27017/serviceBase',
  // 邮件配置
  email: {
    senderAccount: {
      host: 'smtp.mxhichina.com',
      secureConnection: false, // use SSL
      // port: 465, // port for secure SMTP
      port: 25,
      // secure: true, // use TLS
      auth: {
        user: '',
        pass: ''
      },
      ignoreTLS: true
    },
    adminAccount: {
      user: ''
    },
    formName: 'Xiaobxia'
  }
}
