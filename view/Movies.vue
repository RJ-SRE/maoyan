<template>
  <div class="movies">
    <div class="container">
      <div class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-item', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </div>
      </div>

      <div class="movies-list">
        <div class="movie-item" v-for="movie in currentMovies" :key="movie.id">
          <div class="movie-poster">
            <img :src="movie.poster" :alt="movie.title">
          </div>
          <div class="movie-details">
            <h3 class="movie-title">{{ movie.title }}</h3>
            <div class="movie-rating" v-if="movie.score">
              <span class="rating-label">评分:</span>
              <span class="rating-score">{{ movie.score }}</span>
            </div>
            <p class="movie-meta">
              <span>类型: {{ movie.type }}</span>
              <span>导演: {{ movie.director }}</span>
            </p>
            <p class="movie-meta">
              <span>主演: {{ movie.actors }}</span>
            </p>
            <p class="movie-meta">
              <span>上映时间: {{ movie.date }}</span>
            </p>
            <p class="movie-desc">{{ movie.description }}</p>
            <button class="action-btn" v-if="activeTab === 'showing' || activeTab === 'upcoming'">
              {{ activeTab === 'showing' ? '购票' : '想看' }}
            </button>
            <button class="action-btn" v-else>查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movies',
  data() {
    return {
      activeTab: 'showing',
      tabs: [
        { id: 'showing', name: '正在上演' },
        { id: 'upcoming', name: '即将上映' },
        { id: 'classic', name: '经典影片' }
      ],
      showingMovies: [
        {
          id: 1,
          title: '正在上映电影1',
          poster: 'https://via.placeholder.com/150x200/e54847/fff?text=上映1',
          score: '9.2',
          type: '剧情/动作',
          director: '张导演',
          actors: '演员A, 演员B, 演员C',
          date: '2024-12-01',
          description: '这是一部精彩的电影,讲述了一个动人的故事...'
        },
        {
          id: 2,
          title: '正在上映电影2',
          poster: 'https://via.placeholder.com/150x200/4a90e2/fff?text=上映2',
          score: '8.8',
          type: '喜剧/爱情',
          director: '李导演',
          actors: '演员D, 演员E',
          date: '2024-11-20',
          description: '一部轻松幽默的爱情喜剧,让人捧腹大笑...'
        },
        {
          id: 3,
          title: '正在上映电影3',
          poster: 'https://via.placeholder.com/150x200/7ed321/fff?text=上映3',
          score: '8.5',
          type: '科幻/冒险',
          director: '王导演',
          actors: '演员F, 演员G, 演员H',
          date: '2024-11-15',
          description: '未来世界的冒险之旅,视觉效果震撼...'
        }
      ],
      upcomingMovies: [
        {
          id: 4,
          title: '即将上映电影1',
          poster: 'https://via.placeholder.com/150x200/bd10e0/fff?text=即将1',
          type: '动作/冒险',
          director: '赵导演',
          actors: '演员I, 演员J',
          date: '2024-12-15',
          description: '一部充满惊险刺激的动作大片...'
        },
        {
          id: 5,
          title: '即将上映电影2',
          poster: 'https://via.placeholder.com/150x200/50e3c2/fff?text=即将2',
          type: '爱情/剧情',
          director: '钱导演',
          actors: '演员K, 演员L',
          date: '2024-12-20',
          description: '感人至深的爱情故事,催人泪下...'
        }
      ],
      classicMovies: [
        {
          id: 6,
          title: '经典影片1',
          poster: 'https://via.placeholder.com/150x200/f5a623/fff?text=经典1',
          score: '9.5',
          type: '剧情',
          director: '经典导演A',
          actors: '传奇演员A, 传奇演员B',
          date: '1994-10-14',
          description: '一部影响了几代人的经典之作...'
        },
        {
          id: 7,
          title: '经典影片2',
          poster: 'https://via.placeholder.com/150x200/d0021b/fff?text=经典2',
          score: '9.3',
          type: '动作/犯罪',
          director: '经典导演B',
          actors: '传奇演员C, 传奇演员D',
          date: '1972-03-24',
          description: '黑帮电影的巅峰之作,永恒的经典...'
        }
      ]
    }
  },
  computed: {
    currentMovies() {
      switch(this.activeTab) {
        case 'showing':
          return this.showingMovies
        case 'upcoming':
          return this.upcomingMovies
        case 'classic':
          return this.classicMovies
        default:
          return []
      }
    }
  }
}
</script>

<style scoped>
.movies {
  background: #f5f5f5;
  padding: 40px 0;
  min-height: calc(100vh - 260px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.tabs {
  display: flex;
  gap: 2px;
  background: #fff;
  padding: 20px 20px 0;
  border-radius: 8px 8px 0 0;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  color: #666;
  font-size: 16px;
}

.tab-item:hover {
  color: #e54847;
}

.tab-item.active {
  color: #e54847;
  border-bottom-color: #e54847;
  font-weight: bold;
}

.movies-list {
  background: #fff;
  padding: 30px;
  border-radius: 0 0 8px 8px;
}

.movie-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s;
}

.movie-item:hover {
  background: #fafafa;
}

.movie-item:last-child {
  border-bottom: none;
}

.movie-poster {
  flex-shrink: 0;
}

.movie-poster img {
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.movie-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movie-title {
  font-size: 22px;
  color: #333;
  margin: 0;
}

.movie-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rating-label {
  color: #666;
  font-size: 14px;
}

.rating-score {
  color: #e54847;
  font-size: 20px;
  font-weight: bold;
}

.movie-meta {
  color: #666;
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
}

.movie-meta span {
  margin-right: 20px;
}

.movie-desc {
  color: #999;
  font-size: 14px;
  line-height: 1.8;
  margin: 10px 0;
}

.action-btn {
  align-self: flex-start;
  padding: 10px 30px;
  background: #e54847;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.action-btn:hover {
  background: #d43d3c;
}
</style>
