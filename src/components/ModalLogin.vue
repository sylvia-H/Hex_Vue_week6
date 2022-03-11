<template>
  <div
    class='modal fade'
    ref='loginModal'
    tabindex='-1'
    aria-labelledby='loginModalLabel'
    aria-hidden='true'
  >
    <div class='modal-dialog'>
      <div class='modal-content'>
        <div class='modal-header bg-dark text-white'>
          <h5 class='modal-title' id='loginModalLabel'>管理後台入口</h5>
        </div>
        <div class='modal-body'>
          <p class='text-center | my-6'>後台管理人員請輸入帳號密碼進行驗證</p>
          <form id='form'>
            <div class='form-floating mb-3'>
              <input
                v-model='userInfo.username'
                type='email'
                id='username'
                class='form-control'
                placeholder='name@example.com'
                required
              />
              <!-- eslint-disable-next-line -->
              <label for='username'>Email address</label>
            </div>
            <div class='form-floating mb-3'>
              <input
                v-model='userInfo.password'
                type='password'
                id='password'
                class='form-control'
                placeholder='Password'
                required
              />
              <!-- eslint-disable-next-line -->
              <label for='password'>Password</label>
            </div>
            <button
              @click='loginIn'
              class='btn btn-lg btn-primary w-100 mt-3'
              type='button'
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert';

export default {
  // 元件 - Modal 後台人員登入介面
  data() {
    return {
      modal: '',
      userInfo: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    loginIn() {
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, this.userInfo)
        .then((res) => {
          const { token, expired } = res.data;
          // 用 cookie 儲存資料，myToken 是自定義名稱
          document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
          window.location = './backend.html';
        })
        .catch(() => {
          // console.log(err.response);
          // const errTitle = err.response.data.message;
          // const errMSG = err.response.data.error.message;
          // 登入失敗，sweetalert 跳出提示訊息視窗
          // swal(`${errTitle}！`, errMSG, {
          //   icon: 'error',
          // });
        });
    },
  },
  mounted() {
    // eslint-disable-next-line
    this.modal = new bootstrap.Modal(this.$refs.loginModal);
  },
};
</script>
