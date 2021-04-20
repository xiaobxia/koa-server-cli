module.exports = {
  db: 'mongodb://serviceBase:serviceBase@localhost:27017/serviceBase',
  // 邮件配置
  email: {
    // 发送邮件账户
    senderAccount: {
      host: 'smtp.mxhichina.com',
      secureConnection: true, // use SSL
      // port: 465, // port for secure SMTP
      port: 465,
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
    // 显示的来源（用户看到是谁发来的）
    formName: 'Xiaobxia'
  }
}
