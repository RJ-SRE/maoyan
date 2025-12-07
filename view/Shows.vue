<template>
  <div class="shows">
    <div class="container">
      <div class="page-header">
        <h2>演出活动</h2>
        <div class="city-selector">
          <span>演出城市:</span>
          <select v-model="currentCity" @change="handleCityChange">
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>
      </div>

      <div class="category-tabs">
        <div
          v-for="category in categories"
          :key="category.id"
          :class="['category-item', { active: activeCategory === category.id }]"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </div>
      </div>

      <div class="shows-grid">
        <div class="show-card" v-for="show in currentShows" :key="show.id">
          <div class="show-poster">
            <img :src="show.poster" :alt="show.title">
            <div class="show-label">{{ show.label }}</div>
          </div>
          <div class="show-info">
            <h3 class="show-title">{{ show.title }}</h3>
            <p class="show-venue">
              <span class="icon">📍</span>
              {{ show.venue }}
            </p>
            <p class="show-time">
              <span class="icon">🕐</span>
              {{ show.time }}
            </p>
            <div class="show-price">
              <span class="price-label">¥</span>
              <span class="price-value">{{ show.price }}</span>
              <span class="price-unit">起</span>
            </div>
            <button class="buy-ticket-btn">购票</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shows',
  data() {
    return {
      currentCity: '北京',
      cities: ['北京', '上海', '广州', '深圳', '成都', '杭州', '南京', '武汉'],
      activeCategory: 'concert',
      categories: [
        { id: 'concert', name: '音乐会' },
        { id: 'drama', name: '话剧歌剧' },
        { id: 'dance', name: '舞蹈芭蕾' },
        { id: 'sports', name: '体育赛事' }
      ],
      concerts: [
        {
          id: 1,
          title: '周杰伦演唱会2024',
          poster: 'https://img.piaoniu.com/uploadfile/show/f5/f5/f5f58e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '国家体育场(鸟巢)',
          time: '2024-12-20 19:30',
          price: 580,
          label: '热卖'
        },
        {
          id: 2,
          title: '五月天人生无限公司巡回演唱会',
          poster: 'https://img.piaoniu.com/uploadfile/show/a2/a2/a2a28e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '工人体育场',
          time: '2024-12-25 19:00',
          price: 480,
          label: '即将开售'
        },
        {
          id: 3,
          title: '新年交响音乐会',
          poster: 'https://img.piaoniu.com/uploadfile/show/c3/c3/c3c38e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '国家大剧院',
          time: '2024-12-31 20:00',
          price: 280,
          label: '限时优惠'
        },
        {
          id: 4,
          title: '钢琴独奏会',
          poster: 'https://img.piaoniu.com/uploadfile/show/d4/d4/d4d48e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '中山音乐堂',
          time: '2024-12-18 19:30',
          price: 180,
          label: '余票充足'
        }
      ],
      dramas: [
        {
          id: 5,
          title: '《茶馆》经典话剧',
          poster: 'https://pic.baike.soso.com/ugc/baikepic2/0/20190508/1557308404-7758651726_jpg_600_800_56847.jpg',
          venue: '首都剧场',
          time: '2024-12-22 19:30',
          price: 280,
          label: '经典剧目'
        },
        {
          id: 6,
          title: '《悲惨世界》音乐剧',
          poster: 'https://img.piaoniu.com/uploadfile/show/b6/b6/b6b68e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '上海文化广场',
          time: '2024-12-28 19:00',
          price: 380,
          label: '热卖'
        }
      ],
      dances: [
        {
          id: 7,
          title: '《天鹅湖》芭蕾舞剧',
          poster: 'https://img.piaoniu.com/uploadfile/show/e7/e7/e7e78e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '国家大剧院',
          time: '2024-12-24 19:30',
          price: 480,
          label: '限时优惠'
        },
        {
          id: 8,
          title: '现代舞专场',
          poster: 'https://img.piaoniu.com/uploadfile/show/g8/g8/g8g88e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '北京舞蹈学院剧场',
          time: '2024-12-21 19:00',
          price: 180,
          label: '余票充足'
        }
      ],
      sports: [
        {
          id: 9,
          title: 'CBA篮球联赛',
          poster: 'https://img.piaoniu.com/uploadfile/show/h9/h9/h9h98e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '五棵松体育馆',
          time: '2024-12-19 19:35',
          price: 80,
          label: '热卖'
        },
        {
          id: 10,
          title: '羽毛球公开赛',
          poster: 'https://img.piaoniu.com/uploadfile/show/i0/i0/i0i08e0a6f1d1e0e1e1e1e1e1e1e1e1e.jpg',
          venue: '国家体育馆',
          time: '2024-12-26 14:00',
          price: 120,
          label: '即将开赛'
        }
      ]
    }
  },
  computed: {
    currentShows() {
      switch(this.activeCategory) {
        case 'concert':
          return this.concerts
        case 'drama':
          return this.dramas
        case 'dance':
          return this.dances
        case 'sports':
          return this.sports
        default:
          return []
      }
    }
  },
  methods: {
    handleCityChange() {
      console.log('切换演出城市:', this.currentCity)
      // 这里可以添加切换城市后重新获取演出列表的逻辑
    }
  }
}
</script>

<style scoped>
.shows {
  background: #f5f5f5;
  padding: 40px 0;
  min-height: calc(100vh - 260px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  background: #fff;
  padding: 25px 30px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h2 {
  font-size: 24px;
  color: #333;
  margin: 0;
}

.city-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
}

.city-selector select {
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s;
}

.city-selector select:hover {
  border-color: #e54847;
}

.category-tabs {
  display: flex;
  gap: 2px;
  background: #fff;
  padding: 20px 20px 0;
  border-radius: 8px 8px 0 0;
  margin-bottom: 0;
}

.category-item {
  flex: 1;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  color: #666;
  font-size: 16px;
}

.category-item:hover {
  color: #e54847;
}

.category-item.active {
  color: #e54847;
  border-bottom-color: #e54847;
  font-weight: bold;
}

.shows-grid {
  background: #fff;
  padding: 30px;
  border-radius: 0 0 8px 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.show-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #f0f0f0;
}

.show-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.show-poster {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.show-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.show-label {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(229, 72, 71, 0.9);
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
}

.show-info {
  padding: 20px;
}

.show-title {
  font-size: 18px;
  color: #333;
  margin: 0 0 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.show-venue, .show-time {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.icon {
  font-size: 14px;
}

.show-price {
  margin: 15px 0;
  display: flex;
  align-items: baseline;
}

.price-label {
  color: #e54847;
  font-size: 16px;
  font-weight: bold;
}

.price-value {
  color: #e54847;
  font-size: 28px;
  font-weight: bold;
}

.price-unit {
  color: #999;
  font-size: 14px;
  margin-left: 4px;
}

.buy-ticket-btn {
  width: 100%;
  padding: 12px;
  background: #e54847;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  transition: background 0.3s;
}

.buy-ticket-btn:hover {
  background: #d43d3c;
}
</style>
