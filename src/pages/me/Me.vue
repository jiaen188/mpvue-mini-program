<template>
  <div class="container">
    <div class="userinfo" @click="login">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>

    <button v-if="userinfo.openId" @click="scanBook" class="btn">添加图书</button>
    <button v-else open-type="getUserInfo" lang="zh_CN" class='btn' @getuserinfo="login">点击登录</button>

  </div>
</template>

<script>
import YearProgress from '../../components/YearProgress.vue'
import { showSuccess, showModal } from '../../util';
import qcloud from 'wafer2-client-sdk'
import config from '../../config.js'

export default {
  created () {
    // this.userinfo = wx.getStorageSync('userinfo')
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: ''
      }
    }
  },
  methods: {
    scanBook () {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    getWxLogin () {
      const self = this
      // 获取临时登录凭证  https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html#wxloginobject
      wx.login({
        success: function (loginResult) {
          console.log('loginResult', loginResult)
          qcloud.setLoginUrl(config.loginUrl)
          qcloud.login({
            success () {
              // 获取用户信息
              qcloud.request({
                url: config.userUrl,
                login: true,
                success (userRes) {
                  showSuccess('登录成功')
                  console.log('登录成功')
                  wx.setStorageSync('userinfo', userRes.data.data)
                  self.userinfo = userRes.data.data
                }
              })
            },
            fail(error) {
              showModal('登录失败', error)
            }
          })
        }
      })
    },
    login (e) {
      const self = this
      // 当前的用户设置 https://developers.weixin.qq.com/miniprogram/dev/api/setting.html#wxgetsettingobject
      wx.getSetting({
        success: function(res) {
          console.log('当前的用户设置', res)
          // 用户的授权结果 https://developers.weixin.qq.com/miniprogram/dev/api/signature.html#wxchecksessionobject
          if (res.authSetting['scope.userInfo']) {
            // 检查用户登录是否过期
            wx.checkSession({
              success: function () {
                showSuccess('登录成功')
                console.log('登录成功')
              },
              fail: function () {
                // 过期了，需要重新登录，先清除登录状态
                qcloud.clearSession()
                self.getWxLogin()
              }
            })
          } else {
            showModal('用户未授权', e.mp.detail.errMsg)
          }
        },
      })
    }
  },
  components: {
    YearProgress
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 30rpx;
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      margin: 20rpx;
      border-radius: 50%
    }
  }
}
</style>
