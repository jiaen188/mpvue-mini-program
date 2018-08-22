
<script>
import { get } from './util'
import qcloud from 'wafer2-client-sdk'
import config from './config.js'

export default {
  async created () {
    // 使用 login 参数之前，需要设置登录地址
    /* qcloud.setLoginUrl(config.loginUrl)
    qcloud.request({
      login: true,
      url: `${config}/weapp/user`,
      success: function (response) {
        console.log(response)
      },
      fail: function (err) {
        console.log(err)
      }
    }) */
    console.log('设置dneglu ')
    qcloud.setLoginUrl(config.loginUrl)
    qcloud.login({
      success: function (userinfo) {
        qcloud.request({
          url: config.userUrl,
          login: true,
          success (userRes) {
            showSuccess('登录成功')
            wx.setStorageSync('userinfo', userRes.data.data)
            self.userinfo = userRes.data.data
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
    });

    // const res = await get('/weapp/demo')
    // console.log(123, res)
    /* wx.request({
      url: config.host + '/weapp/demo',
      success: function (res) {
        console.log(res)
      }
    }) */
    console.log('小程序启动了')
  }
}
</script>

<style>
.btn {
  color: white;
  background-color: #EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active {
  background: #FA5A49;
}
</style>
