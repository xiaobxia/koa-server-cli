const xlsx = require('node-xlsx')

/**
 * 导出数字
 * @param ctx
 * @returns {Promise<void>}
 */
exports.exportNumbers = async function (ctx) {
  try {
    let list = []
    for (let i = 0; i < 10; i++) {
      list.push({
        number: i
      })
    }
    ctx.body = {
      list
    }
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}

/**
 * 导出xlsx
 * @param ctx
 * @returns {Promise<void>}
 */
exports.exportXlsx = async function (ctx) {
  try {
    const data = [
      [1, 2, 3],
      [true, false, null, 'sheetjs'],
      ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
      ['baz', null, 'qux']
    ];
    ctx.body = xlsx.build([{name: "mySheetName", data: data}]);
  } catch (err) {
    ctx.body = ctx.refail(err)
  }
}
