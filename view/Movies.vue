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
          title: '涉过愤怒的海',
          poster: 'assets/1.jpg',
          score: '9.2',
          type: '剧情/悬疑',
          director: '曹保平',
          actors: '黄渤, 周迅, 祖峰',
          date: '2024-11-25',
          description: '一桩离奇的少女死亡案件，牵扯出两个家庭的爱恨情仇。渔民老金在海边发现女儿娜娜的尸体，深信是她的男友李苗苗所为。老金展开了一场跨国寻仇之旅...'
        },
        {
          id: 2,
          title: '年会不能停',
          poster: 'assets/1.jpg',
          score: '8.8',
          type: '喜剧/剧情',
          director: '董润年',
          actors: '大鹏, 白客, 庄达菲',
          date: '2024-12-29',
          description: '一场年会引发的职场风云。普通员工胡建林意外卷入公司裁员风波，通过一系列啼笑皆非的事件，揭开了职场的真相...'
        },
        {
          id: 3,
          title: '潜行',
          poster: 'assets/1.jpg',
          score: '8.5',
          type: '动作/犯罪',
          director: '关智耀',
          actors: '刘德华, 林家栋, 彭于晏',
          date: '2024-12-29',
          description: '卧底警察潜入犯罪集团，在黑白两道间游走。面对身份暴露的危机和内心的挣扎，他必须做出艰难的抉择...'
        }
      ],
      upcomingMovies: [
        {
          id: 4,
          title: '三大队',
          poster: 'assets/1.jpg',
          type: '剧情/犯罪',
          director: '戴墨',
          actors: '张译, 李晨, 魏晨',
          date: '2024-12-15',
          description: '改编自真实事件，刑警队长程兵带领三大队追查一起恶性案件，历经十二年的漫长追凶路...'
        },
        {
          id: 5,
          title: '白日之下',
          poster: 'assets/1.jpg',
          type: '剧情/犯罪',
          director: '简君晋',
          actors: '余香凝, 姜大卫, 梁仲恒',
          date: '2024-12-20',
          description: '记者晓琪追踪一宗残疾院舍虐待案件，在调查过程中揭开惊人真相，直面人性的黑暗与光明...'
        }
      ],
      classicMovies: [
        {
          id: 6,
          title: '肖申克的救赎',
          poster: 'assets/1.jpg',
          score: '9.7',
          type: '剧情/犯罪',
          director: '弗兰克·德拉邦特',
          actors: '蒂姆·罗宾斯, 摩根·弗里曼',
          date: '1994-10-14',
          description: '银行家安迪被冤枉杀害妻子及情人入狱后，他不动声色、步步为营地谋划自我拯救并最终成功越狱，重获自由...'
        },
        {
          id: 7,
          title: '教父',
          poster: 'assets/1.jpg',
          score: '9.3',
          type: '剧情/犯罪',
          director: '弗朗西斯·福特·科波拉',
          actors: '马龙·白兰度, 阿尔·帕西诺',
          date: '1972-03-24',
          description: '美国黑帮家族史诗巨作。教父维托的小儿子迈克接手家族事业，在权力、家庭与道义之间艰难抉择...'
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
