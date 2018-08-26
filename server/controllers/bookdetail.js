const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const { id } = ctx.request.query
    const detail = await mysql('books')
                          .select('books.*', 'cSessionInfo.user_info')
                          // 链表查询，查询cSessionInf的user_info，对应books的openid和cSessionInf的open_id相等的数据
                          .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
                          .where('id', id)
                          .first()
    const info = JSON.parse(detail.user_info)
    ctx.state.data = Object.assign({}, detail, {
        user_info: {
            name: info.nickName,
            image: info.avatarUrl
        },
        tags: detail.tags.split(','),
        summary: detail.summary.split('\n')
    })

    await mysql('books')
            .where('id', id)
            .increment('count', 1)
}
