import { createStore } from 'vuex'

export default createStore({
  state: {
    currentCity: '北京',
    hotMovies: [],
    upcomingMovies: [],
    cinemas: []
  },
  mutations: {
    setCurrentCity(state, city) {
      state.currentCity = city
    },
    setHotMovies(state, movies) {
      state.hotMovies = movies
    },
    setUpcomingMovies(state, movies) {
      state.upcomingMovies = movies
    },
    setCinemas(state, cinemas) {
      state.cinemas = cinemas
    }
  },
  actions: {
    updateCity({ commit }, city) {
      commit('setCurrentCity', city)
    }
  },
  getters: {
    currentCity: state => state.currentCity
  }
})
