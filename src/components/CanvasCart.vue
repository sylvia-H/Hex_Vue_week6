<script>
// import swal from 'sweetalert';

export default {
  data() {
    return {
      canvas: '',
      carts: [],
    };
  },
  template: `
  <div
    ref="cart_canvas"
    class="offcanvas offcanvas-end bg-dark"
    tabindex="-1"
    aria-labelledby="cartLabel"
  >
    <!-- Cart 購物車 offcanvas-header -->
    <div class="offcanvas-header pt-8 ps-8">
      <h2 id="cartLabel" class="text-white">購物車列表</h2>
    </div>

    <!-- Cart 購物車 offcanvas-body -->
    <div class="offcanvas-body fashion-scrollbar ps-8 h-100">
      <!-- Card 購物車卡片01 -->
      <div
        v-for="item in carts.carts"
        :key="item.id"
        class="card rounded-2 py-6 px-4 mb-3 position-relative"
      >
        <button
          @click="delCart(item.id, item.product.title)"
          class="btn-close position-absolute top-0 end-0 m-2"
          type="button"
          aria-label="Close"
        ></button>
        <div class="row g-0 align-items-center">
          <div class="col-3">
            <img
              class="img-cover w-100 h-100"
              :src="item.product.imageUrl"
              alt="..."
            />
          </div>
          <div class="col-9 ps-4">
            <div class="row">
              <div
                class="
                  col-7
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-center
                "
              >
                <h5 class="card-title mb-4">
                  {{ item.product.title }}
                </h5>
                <p class="card-text">
                  單價 NT
                  <span
                    v-if="item.product.origin_price !== item.product.price"
                    class="text-gray"
                  >
                    <s>{{ item.product.origin_price }}</s>
                  </span>
                  {{ item.product.price }} 元
                </p>
              </div>
              <div class="col-5 d-flex align-items-end">
                <div
                  class="
                    btn-group
                    d-flex
                    justify-content-around
                    align-items-center
                  "
                  role="group"
                  aria-label="Basic"
                >
                  <button
                    @click="editCart(item.id, item.qty - 1)"
                    :disabled="item.qty - 1 === 0"
                    type="button"
                    class="btn btn-warning fw-bold"
                  >
                    －
                  </button>
                  <!-- eslint-disable-next-line -->
                  <input
                    :value="item.qty"
                    type="text"
                    class="
                      form-control-plaintext
                      p-0
                      border-0
                      fw-bold
                      text-black text-center
                    "
                  />
                  <button
                    @click="editCart(item.id, item.qty + 1)"
                    type="button"
                    class="btn btn-warning fw-bold"
                  >
                    ＋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart 購物車 offcanvas-footer -->
    <div
      class="
        offcanvas-footer
        d-flex
        justify-content-between
        align-items-center
        py-6
        px-8
      "
    >
      <div class="d-flex ai-c">
        <p class="h5 text-white me-24">小計</p>
        <span class="h5 text-white">NT$ {{ carts.total }}</span>
      </div>
      <div class="d-flex ai-c">
        <button
          @click="delCart(null)"
          :disabled="carts.carts?.length === 0"
          class="btn btn-outline-danger px-4 py-2 me-6"
        >
          清空購物車
        </button>
        <form action="checkout-order.html">
          <button
            type="submit"
            class="btn btn-danger px-4 py-2"
            :disabled="carts.carts?.length === 0"
          >
            前往結帳
          </button>
        </form>
      </div>
    </div>
  </div>`,
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
          // console.log(this.carts);
        })
        .catch(() => {
          // console.log(err.response);
        });
    },
    openCanvas() {
      this.canvas.show();
    },
    editCart(id, qty) {
      const data = {
        product_id: id,
        qty,
      };
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`,
          { data },
        )
        .then(() => {
          // console.log(res.data);
          this.$emit('emit-cart');
        })
        .catch(() => {
          // console.log(err.response);
        });
    },
    delCart(id) {
      let url = '';
      if (id) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
        this.$http
          .delete(url)
          .then(() => {
            // 成功刪除產品，sweetalert 跳出提示訊息視窗
            // swal('成功！', `已刪除 ${title}`, {
            //   icon: 'success',
            // });
            this.$emit('emit-cart');
          })
          .catch(() => {
            // console.log(err.response);
            // 刪除失敗，sweetalert 跳出提示訊息視窗
            // swal('失敗！', '請再試一次', {
            //   icon: 'error',
            // });
          });
        // swal({
        //   title: `確定要將${title}刪除嗎？`,
        //   icon: 'warning',
        //   buttons: true,
        //   dangerMode: true,
        // }).then((willDelete) => {
        //   if (willDelete) {
        //     swal(`您已將${title}刪除了！`, {
        //       icon: 'success',
        //     });
        //     this.$http
        //       .delete(url)
        //       .then((res) => {
        //         console.log(res);
        //         // 成功刪除產品，sweetalert 跳出提示訊息視窗
        //         swal('成功！', `已刪除 ${title}`, {
        //           icon: 'success',
        //         });
        //         this.$emit('emit-cart');
        //       })
        //       .catch((err) => {
        //         console.log(err.response);
        //         // 刪除失敗，sweetalert 跳出提示訊息視窗
        //         swal('失敗！', '請再試一次', {
        //           icon: 'error',
        //         });
        //       });
        //   }
        // });
      } else {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
        this.$http
          .delete(url)
          .then(() => {
            // console.log(res);
            // 成功刪除產品，sweetalert 跳出提示訊息視窗
            // swal('成功！', '已清空購物車', {
            //   icon: 'success',
            // });
            this.$emit('emit-cart');
          })
          .catch(() => {
            // console.log(err.response);
            // 刪除失敗，sweetalert 跳出提示訊息視窗
            // swal("失敗！", "請再試一次", {
            //   icon: "error",
            // });
          });
        // swal({
        //   title: '確定要清空購物車嗎？',
        //   icon: 'warning',
        //   buttons: true,
        //   dangerMode: true,
        // }).then((willDelete) => {
        //   if (willDelete) {
        //     swal('您已將購物車清空了！', {
        //       icon: 'success',
        //     });
        //     this.$http
        //       .delete(url)
        //       .then((res) => {
        //         console.log(res);
        //         // 成功刪除產品，sweetalert 跳出提示訊息視窗
        //         swal('成功！', '已清空購物車', {
        //           icon: 'success',
        //         });
        //         this.$emit('emit-cart');
        //       })
        //       .catch((err) => {
        //         console.log(err.response);
        //         // 刪除失敗，sweetalert 跳出提示訊息視窗
        //         swal('失敗！', '請再試一次', {
        //           icon: 'error',
        //         });
        //       });
        //   }
        // });
      }
    },
  },
  mounted() {
    // eslint-disable-next-line
    this.canvas = new bootstrap.Offcanvas(this.$refs.cart_canvas);
  },
};
</script>
