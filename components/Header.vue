<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <div class="logo">
          <span class="logo-icon">🎬</span>
          <span class="logo-text">猫眼电影</span>
        </div>
        <nav class="nav-menu">
          <router-link to="/" class="nav-item">主页</router-link>
          <router-link to="/movies" class="nav-item">电影</router-link>
          <router-link to="/cinemas" class="nav-item">影院</router-link>
          <router-link to="/shows" class="nav-item">演出</router-link>
        </nav>
      </div>
      <div class="header-right">
        <a href="#" class="app-download">APP下载</a>
        <button class="login-btn">登录</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #e54847;
  cursor: pointer;
}

.logo-icon {
  font-size: 24px;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: #e54847;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.app-download {
  text-decoration: none;
  color: #666;
  font-size: 14px;
}

.app-download:hover {
  color: #e54847;
}

.login-btn {
  padding: 8px 20px;
  background: #e54847;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.login-btn:hover {
  background: #d43d3c;
}
</style>
