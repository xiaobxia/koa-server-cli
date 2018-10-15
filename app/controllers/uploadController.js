const fs = require('fs-extra')
const del = require('del')

function getFilePath (ctx) {
  return `${ctx.localConfig.uploadDir}/${ctx.req.file.filename}`
}

exports.importNumbers = async function (ctx) {
  // 获取上传数据
  const filePath = getFilePath(ctx)
  const data = await fs.readJson(filePath)
  try {
    console.log(data.list)
    ctx.body = ctx.resuccess()
  } catch (err) {
    ctx.body = ctx.refail({
      message: 'json数据不正确'
    })
  } finally {
    del(filePath)
  }
}


