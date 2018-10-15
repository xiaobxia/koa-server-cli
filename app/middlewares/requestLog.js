module.exports = async function (ctx, next) {
  console.log(ctx.originalUrl)
  await next()
}
