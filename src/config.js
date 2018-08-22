// 配置项

// 不在以下 request 合法域名列表中， 必须是https协议，8080端口
const host = 'http://localhost:5757'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}
export default config
