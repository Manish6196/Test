import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BecomeAnInstructor from './views/BecomeAnInstructor.vue'
import Details from './views/Details'
import Search from './views/Search'
import CategorizedProducts from './views/CategorizedProducts'
// import SignUp from './views/SignUp'
// import Login from './views/Login'
import Cart from './views/Cart'
import CreateCourse from './views/CreateCourse.vue'
import MyCreatedCourses from './views/myCreatedCourse.vue'
import MyCourses from './views/MyCourses.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/become-an-instructor',name: 'become-an-instructor',component: BecomeAnInstructor},
    {path: '/details/:id',name: 'details',component: Details},
    {path: '/search/:searched',name: 'search',component: Search},
    {path: '/categories/:category', name: 'categorized-products', component: CategorizedProducts},
    // {path:'/sign-up', name: 'sign-up', component: SignUp},
    // {path:'/login', name: 'login', component: Login},
    {path: '/cart', name: 'cart', component: Cart },
    {path: '/create-course', name: 'create-course', component: CreateCourse},
    {path: '/:userId', name: 'my-created-courses', component: MyCreatedCourses},
    {path: '/my-courses', name: 'my-courses', component: MyCourses}
  ]
})
