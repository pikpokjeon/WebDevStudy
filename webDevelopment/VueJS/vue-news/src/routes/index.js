import Vue from 'vue';
import VueRouter from 'vue-router'
// import NewsView from '../views/NewsView.vue'
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import CLV from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // /#/해쉬값 없애줌
    routes: [
      {
        path: '/',
        redirect: 'news',
      },
      {
        // url 주소가 담기는 곳
        path: '/news',
        name: 'news',
        // url로 갔을 때 보여지는 컴포넌트
        component: CLV('NewsView'), 
      },
      {
        path: '/ask',
        name: 'ask',
        component: CLV('AskView'), 

      },
      {
        path: '/jobs',
        name: 'jobs',
        component: CLV('JobsView'), 
      },
      {
        path: '/user/:id',
        component: UserView 
      },
      {
        path: '/item/:id',
        component: ItemView
      }
      
    ]

});