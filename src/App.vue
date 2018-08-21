
<script>
import { get } from './util'

export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(123, res)
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

</style>
