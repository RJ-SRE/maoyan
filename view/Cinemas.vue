<template>
  <div class="cinemas">
    <div class="container">
      <div class="page-header">
        <h2>影院列表</h2>
        <div class="city-selector">
          <span>当前城市:</span>
          <select v-model="currentCity" @change="handleCityChange">
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>
      </div>

      <div class="cinema-list">
        <div class="cinema-item" v-for="cinema in cinemas" :key="cinema.id">
          <div class="cinema-info">
            <h3 class="cinema-name">{{ cinema.name }}</h3>
            <p class="cinema-address">
              <span class="icon">📍</span>
              {{ cinema.address }}
            </p>
            <div class="cinema-meta">
              <span class="price">
                <span class="price-label">最低票价:</span>
                <span class="price-value">¥{{ cinema.minPrice }}</span>
              </span>
              <span class="distance">
                <span class="icon">🚗</span>
                {{ cinema.distance }}
              </span>
            </div>
            <div class="cinema-tags">
              <span v-for="tag in cinema.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="cinema-actions">
            <button class="seat-btn">选座购票</button>
            <a href="#" class="detail-link">影院详情</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cinemas',
  data() {
    return {
      currentCity: '北京',
      cities: ['北京', '上海', '广州', '深圳', '成都', '杭州'],
      cinemas: [
        {
          id: 1,
          name: '万达影城(CBD店)',
          address: '北京市朝阳区建国路88号SOHO现代城',
          minPrice: 35,
          distance: '1.2km',
          tags: ['杜比全景声', 'IMAX', '4D']
        },
        {
          id: 2,
          name: '博纳国际影城',
          address: '北京市朝阳区光华路甲9号世贸天阶',
          minPrice: 40,
          distance: '2.5km',
          tags: ['激光厅', 'VIP厅']
        },
        {
          id: 3,
          name: '首都电影院(西单店)',
          address: '北京市西城区西单北大街130号',
          minPrice: 30,
          distance: '3.8km',
          tags: ['老字号', '学生优惠']
        },
        {
          id: 4,
          name: 'CGV影城(三里屯店)',
          address: '北京市朝阳区三里屯路19号院',
          minPrice: 45,
          distance: '4.2km',
          tags: ['4DX', 'ScreenX', '情侣座']
        },
        {
          id: 5,
          name: '耀莱成龙国际影城',
          address: '北京市朝阳区朝阳北路101号朝阳大悦城',
          minPrice: 38,
          distance: '5.6km',
          tags: ['巨幕厅', '杜比音效']
        },
        {
          id: 6,
          name: 'UME国际影城',
          address: '北京市朝阳区安定路1号华联商厦',
          minPrice: 42,
          distance: '6.8km',
          tags: ['IMAX', 'VIP厅', '儿童厅']
        }
      ]
    }
  },
  methods: {
    handleCityChange() {
      console.log('切换城市:', this.currentCity)
      // 这里可以添加切换城市后重新获取影院列表的逻辑
    }
  }
}
</script>

<style scoped>
.cinemas {
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

.cinema-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cinema-item {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: box-shadow 0.3s;
}

.cinema-item:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.cinema-info {
  flex: 1;
}

.cinema-name {
  font-size: 20px;
  color: #333;
  margin: 0 0 12px 0;
}

.cinema-address {
  color: #666;
  font-size: 14px;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.cinema-meta {
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
  font-size: 14px;
}

.price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-label {
  color: #666;
}

.price-value {
  color: #e54847;
  font-size: 18px;
  font-weight: bold;
}

.distance {
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
}

.icon {
  font-size: 14px;
}

.cinema-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  background: #f0f0f0;
  color: #666;
  font-size: 12px;
  border-radius: 3px;
}

.cinema-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}

.seat-btn {
  padding: 12px 30px;
  background: #e54847;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  white-space: nowrap;
  transition: background 0.3s;
}

.seat-btn:hover {
  background: #d43d3c;
}

.detail-link {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.detail-link:hover {
  color: #e54847;
  text-decoration: underline;
}
</style>
