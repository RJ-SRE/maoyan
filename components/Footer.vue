<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-links">
        <div class="link-group">
          <h4>关于我们</h4>
          <a href="#">公司介绍</a>
          <a href="#">联系我们</a>
          <a href="#">加入我们</a>
        </div>
        <div class="link-group">
          <h4>用户帮助</h4>
          <a href="#">购票指南</a>
          <a href="#">常见问题</a>
          <a href="#">意见反馈</a>
        </div>
        <div class="link-group">
          <h4>合作伙伴</h4>
          <a href="#">商务合作</a>
          <a href="#">广告服务</a>
          <a href="#">影院入驻</a>
        </div>
        <div class="link-group">
          <h4>关注我们</h4>
          <a href="#">官方微博</a>
          <a href="#">官方微信</a>
          <a href="#">移动客户端</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 猫眼电影 | 仅供学习参考使用</p>
        <p>本项目为猫眼电影网的简易模仿版本</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #2c2c2c;
  color: #ccc;
  padding: 40px 0 20px;
  margin-top: 60px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 30px;
}

.link-group h4 {
  color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
}

.link-group a {
  display: block;
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.link-group a:hover {
  color: #e54847;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: #999;
  margin: 5px 0;
}
</style>
