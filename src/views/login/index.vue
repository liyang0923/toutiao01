<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="user.mobile" name="手机号" placeholder="请输入手机号">
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field v-model="user.code" name="验证码" placeholder="请输入验证码">
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <!-- 验证码按钮 -->
          <van-button size="small" type="default" class="send-sms-btn" round>获取验证码</van-button>
        </template>
      </van-field>

      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 导入封装好的 请求模块
import { login } from '@/api/user.js'

export default {
  name: 'LoginIndex',
  data() {
    return {
      // 登陆表单数据对象
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async onSubmit() {
      //1 获取请求的数据 
      const user = this.user

      //2 表单验证



      // 自定义加载图标
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,  //禁用背景点击
        duration: 0 //持续时间  默认为 2000毫秒 为0则表示持续显示
      });

      //3 提交表单 请求登录
      try {
        const res = await login(user)
        console.log('登录成功', res);
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机或验证码错误')
          console.log('手机或验证码错误');
        } else {
          console.log('登录失败', err);
          this.$toast.fail('登录失败')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }

  .send-sms-btn {
    width: 160px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
