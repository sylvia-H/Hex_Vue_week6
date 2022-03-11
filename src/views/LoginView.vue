<template>
  <!-- 登入介面 -->
  <section class="container | my-12">
    <h2 class="text-center">管理後台入口</h2>
    <hr class="my-6" />
    <div class="row">
      <div class="col-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
        <p class="text-center | my-6">後台管理人員請輸入帳號密碼進行驗證</p>
        <form id="form">
          <div class="form-floating mb-3">
            <input
              v-model="userInfo.username"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
            />
            <!-- eslint-disable-next-line -->
            <label for="username">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="userInfo.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <!-- eslint-disable-next-line -->
            <label for="password">Password</label>
          </div>
          <button
            @click="loginIn"
            class="btn btn-lg btn-primary w-100 mt-3"
            type="button"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    loginIn() {
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, this.userInfo)
        .then((res) => {
          const { token, expired } = res.data;
          // 用 cookie 儲存資料，myToken 是自定義名稱
          document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
          this.$router.push({
            name: 'BEProducts',
          });
        })
        .catch((err) => {
          console.log(err.response);
          // const errTitle = err.response.data.message;
          // const errMSG = err.response.data.error.message;
          // 登入失敗，sweetalert 跳出提示訊息視窗
          // swal(`${errTitle}！`, errMSG, {
          //   icon: "error",
          // });
        });
    },
  },
};
</script>
