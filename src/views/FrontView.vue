<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light | py-5">
    <div class="container">
      <!-- 首頁 logo -->
      <router-link to="/" class="me-8">
        <i class="bi bi-house-heart-fill fs-4"></i>
        首頁
      </router-link>
      <router-link to="/products">
        <i class="bi bi-boxes fs-4"></i>
        產品列表
      </router-link>
      <!-- 漢堡 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarList"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 選單內容 -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarList">
        <ul class="navbar-nav">
          <li class="nav-item d-flex align-items-center | me-4">
            <!-- 購物車 -->
            <router-link to="/cart">
              <i class="bi bi-cart3 fs-4 text-dark | me-2 me-lg-0"></i>
              <p class="d-lg-none text-dark">購物車</p>
            </router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <!-- 後台管理人員登入 -->
            <router-link to="/login">
              <i class="bi bi-person-circle fs-4 text-dark | me-2 me-lg-0"></i>
              <p class="d-lg-none text-dark">後台管理人員登入</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="bg-dark">
    <div class="container | d-flex ai-c justify-content-center | py-6">
      <!-- Copyright -->
      <p class="h6 text-white text-center | d-none d-md-block">
        © 2022. All Rights Reserved.
      </p>
      <p class="h6 text-white text-center | d-block d-md-none">
        © 2021.<br />All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
// import swal from 'sweetalert';

export default {};
</script>
