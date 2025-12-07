<template>
  <div class="home">
    <div class="container">
      <section class="movie-section">
        <div class="section-header">
          <h2>正在热映</h2>
          <a href="#" class="more-link">查看全部 →</a>
        </div>
        <div class="movie-grid">
          <div v-for="movie in hotMovies" :key="movie.id" class="movie-card">
            <div class="movie-poster">
              <img :src="movie.poster" :alt="movie.title">
              <div class="movie-score">{{ movie.score }}</div>
            </div>
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="movie-info">{{ movie.type }} | {{ movie.date }}</p>
            <button class="buy-btn">购票</button>
          </div>
        </div>
      </section>

      <section class="movie-section">
        <div class="section-header">
          <h2>即将上映</h2>
          <a href="#" class="more-link">查看全部 →</a>
        </div>
        <div class="movie-grid">
          <div v-for="movie in upcomingMovies" :key="movie.id" class="movie-card">
            <div class="movie-poster">
              <img :src="movie.poster" :alt="movie.title">
              <div class="movie-tag">{{ movie.tag }}</div>
            </div>
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="movie-info">{{ movie.type }} | {{ movie.date }}</p>
            <button class="pre-sale-btn">预售</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      hotMovies: [
        { id: 1, title: '涉过愤怒的海', poster: 'assets/1.jpg', score: '9.2', type: '剧情/悬疑', date: '2024-11-25' },
        { id: 2, title: '年会不能停', poster: 'assets/1.jpg', score: '8.8', type: '喜剧/剧情', date: '2024-12-29' },
        { id: 3, title: '潜行', poster: 'assets/1.jpg', score: '8.5', type: '动作/犯罪', date: '2024-12-29' },
        { id: 4, title: '金手指', poster: 'assets/1.jpg', score: '9.0', type: '剧情/犯罪', date: '2024-12-30' }
      ],
      upcomingMovies: [
        { id: 5, title: '三大队', poster: 'assets/1.jpg', tag: '12月15日', type: '剧情/犯罪', date: '2024-12-15' },
        { id: 6, title: '白日之下', poster: 'assets/1.jpg', tag: '12月20日', type: '剧情/犯罪', date: '2024-12-20' },
        { id: 7, title: '一闪一闪亮星星', poster: 'assets/1.jpg', tag: '12月25日', type: '爱情/奇幻', date: '2024-12-25' },
        { id: 8, title: '照明商店', poster: 'assets/1.jpg', tag: '12月30日', type: '剧情/家庭', date: '2024-12-30' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  background: #f5f5f5;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.movie-section {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}

.section-header h2 {
  font-size: 24px;
  color: #333;
}

.more-link {
  color: #e54847;
  text-decoration: none;
  font-size: 14px;
}

.more-link:hover {
  text-decoration: underline;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}

.movie-card {
  text-align: center;
}

.movie-poster {
  position: relative;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.movie-poster:hover {
  transform: translateY(-5px);
}

.movie-poster img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.movie-score {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(229, 72, 71, 0.9);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

.movie-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
}

.movie-title {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-info {
  font-size: 13px;
  color: #999;
  margin-bottom: 12px;
}

.buy-btn, .pre-sale-btn {
  width: 100%;
  padding: 10px;
  background: #e54847;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.buy-btn:hover, .pre-sale-btn:hover {
  background: #d43d3c;
}

.pre-sale-btn {
  background: #ff6a00;
}

.pre-sale-btn:hover {
  background: #e65f00;
}
</style>
