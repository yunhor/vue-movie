import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Movie from '@/components/Movie'
import Tv from '@/components/Tv'
import User from '@/components/User'
import MovieDetail from '@/components/MovieDetail'
import Search from '@/components/Search'
import About from '@/components/About'

Vue.use(Router)

const routes =  [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/tv',
      name: 'Tv',
      component: Tv
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/movie/detail/:movie_id',
      name: 'MovieDetail',
      component: MovieDetail,
      meta: { keepAlive: false }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ]

for(let item of routes) {
  if (!item.meta) {
    item.meta = { keepAlive: true }
  }
}

export default new Router({
  routes: routes
})