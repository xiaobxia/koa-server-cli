module.exports = {
  db: 'mongodb://serviceBase:serviceBase@47.98.140.76:27017/serviceBase',
  // 邮件配置
  email: {
    // 发送邮件账户
    senderAccount: {
      host: 'smtp.mxhichina.com',
      secureConnection: false, // use SSL
      // port: 465, // port for secure SMTP
      port: 25,
      // secure: true, // use TLS
      auth: {
        // 账户
        user: '',
        // 密码
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
