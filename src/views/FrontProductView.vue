<template>
  <h2>前台單一產品資訊頁</h2>
  {{ product }}
</template>

<script>
export default {
  data() {
    return {
      product: [],
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.$http
      .get(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/product/${id}`,
      )
      .then((res) => {
        this.product = res.data.product;
      });
  },
};
</script>
