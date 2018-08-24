const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const { page } = ctx.request.query
    const size = 10
    const books = await mysql('books')
                    .select('books.*', 'cSessionInfo.user_info')
                    // 链表查询，查询cSessionInf的user_info，对应books的openid和cSessionInf的open_id相等的数据
                    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
                    .limit(size)
                    .offset(Number(page) * size)
                    .orderBy('books.id', 'desc')
    ctx.state.data = {
        list: books.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign({}, v, {
                user_info: {
                    nickName: info.nickName
                }
            })
        })
    }
}
