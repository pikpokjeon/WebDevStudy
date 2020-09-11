import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex);

export const store = new Vuex.Store ({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    items: []
  },
  getters: {
    fetchedAsk(state){
      return state.ask
    },
    fetchedNews(state){
      return state.news
    },
    fetchedJobs(state){
      return state.jobs
    },
    fetchedItem(state){
      return state.items
    }
  
  },
  mutations,
  actions,    
  }
);