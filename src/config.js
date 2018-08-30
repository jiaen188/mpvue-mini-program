// 配置项

// 不在以下 request 合法域名列表中， 必须是https协议，8080端口
// const host = 'http://localhost:5757'
// 测试环境域名
const host = 'https://ljizgmvy.qcloud.la'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}
export default config
