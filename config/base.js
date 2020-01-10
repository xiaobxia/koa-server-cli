const path = require('path')

const root = path.resolve(__dirname, '../')
function resolveRoot (dir) {
  return path.resolve(root, dir)
}

module.exports = {
  root: path.resolve(__dirname, '../'),
  project: {
    projectName: 'serviceBase'
  },
  server: {
    port: 3010,
    token: {
      key: 'xiaobxia',
      expiresIn: 60 * 60 * 24
    }
  },
  // 日志配置
  logger: {
    dir: resolveRoot('logs'),
    fileName: 'cheese.log',
    debugLogLevel: 'all',
    productLogLevel: 'info'
  },
  // 上传配置
  uploadDir: 'uploads',
  qiniu: {
    zone: 'Zone_z2'
  }
}
