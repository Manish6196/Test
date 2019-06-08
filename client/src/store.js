import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'path';
import { rejects } from 'assert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentUser: '',
    // currentInstructor: '',
    currentCart: '',
    product: [],
    cart: [],
    bucket: [],
    isLoggedIn: localStorage.getItem('token')?true:false,
    loginMessage: null,
    signupMessage: null,
    i_signupMessage: null,
    // isInstructorLoggedIn: localStorage.getItem('i_token')?true:false,
    categories: [],
    specifiedItems: []
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
    cart: state => state.cart,
    bucket: state => state.bucket,
    currentUser: state => state.currentUser,
    categories: state => state.categories,
    specifiedItems: state => state.specifiedItems,
    developmentCourses: state => state.developmentCourses
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('http://localhost:8081/products');
  
      commit('setProducts', response.data.products);
    },
    async fetchProduct({ commit }, id) {
      const response = await axios.get('http://localhost:8081/products/' + id);
  
      commit('setProduct', response.data);
    },
    async fetchCategories({ commit }) {
      const response = await axios.get('http://localhost:8081/categories');
  
      commit('setCategories', response.data.categories);
    },
    userLogin ({ commit, dispatch }, data) {
      return new Promise((resolve) => {
        axios.post('http://localhost:8081/user/login', data)
        .then ((res) => {
          console.log(res)
         window.localStorage.setItem("token", res.data.token)
         window.localStorage.setItem("userId", res.data.userId)
         window.localStorage.setItem('userName', res.data.userName)
         commit('loginUser', true);
         commit('setLoginMessage', res.data.message)
         commit('setCurrentUser', res.data.userId);
         let user = {userId: window.localStorage.getItem("userId")}
         dispatch('getCart', user)
         resolve(res);
         }).catch(() => {
          commit('setLoginMessage', "Username or password incorrect")

        } )
      })
    },
    // async i_userLogin ({ commit, dispatch }, data) {
    //   let res = await axios.post('http://localhost:8081/instrustor/login', data)
    //   window.localStorage.setItem("i_token", res.data.token)
    //   window.localStorage.setItem("i_instructorId", res.data.userId)
    //   window.localStorage.setItem('i_instructorName', res.data.userName)
    //   commit('loginInstructor', true);
    //   commit('setCurrentInstructor', res.data.userId);
    //   let user = {userId: window.localStorage.getItem("userId")}
    //   dispatch('getCart', user)
    // },
    async fetchSpecifiedCategoryItems ({ commit }, c) {
      console.log(c)
      const response = await axios.post('http://localhost:8081/categories/specified', { category: c}, {headers: { Authorization : 'bearer ' + localStorage.getItem('token')}} );
      commit('setSpecifiedItems', response.data.products);
    },
    async addToCart({ commit, dispatch }, data) {
      const response = await axios.post('http://localhost:8081/cart', data, {headers: { Authorization : 'bearer ' + localStorage.getItem('token')}});
      commit('pushToBucket', response.data.cart.products);
      let user = {userId: window.localStorage.getItem("userId")}
      dispatch('getCart', user)
    },
    async getCart({ commit }, data) {
      const response = await axios.post('http://localhost:8081/cart/get',data, {headers: { Authorization : 'bearer ' + localStorage.getItem('token')}});
      
      commit('setCart', response.data.cart.products);
      commit('setCurrentCart', response.data.cart._id)
      window.localStorage.setItem("cartId", response.data.cart._id)

      var names = response.data.cart.products.map(function(item) {
        return item['_id'];
      });
      commit('setBucket', names);
    },
    async deleteItemFromCart ({dispatch}, data) {
      await axios.post('http://localhost:8081/cart/item/delete', data, {headers: { Authorization : 'bearer ' + localStorage.getItem('token')}});

      let user = {userId: window.localStorage.getItem("userId")}
      dispatch('getCart', user)
    }
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
    setCart: (state, cart) => (state.cart = cart),
    setCurrentCart: (state, currentCart) => (state.currentCart = currentCart),
    setBucket: (state, names) => (state.bucket = names),
    pushToBucket: (state, itemIds) => (state.bucket = itemIds),
    loginUser: (state, assignTrue) => (state.isLoggedIn = assignTrue),
    setLoginMessage: (state, message) => (state.loginMessage = message),
    // loginInstructor: (state, assignTrue) => (state.isInstructorLoggedIn = assignTrue),
    setCurrentUser: (state, currentUser) => (state.currentUser = currentUser),
    // setCurrentInstructor: (state, currentInstructor) => (state.currentInstructor = currentInstructor),
    logoutUser: (state) => {state.isLoggedIn = false; state.currentUser = ''; state.currentCart = ''; state.cart = []; state.bucket = [] },
    setSpecifiedItems: (state, products) => (state.specifiedItems = products),
    setCategories: (state, categories) => (state.categories = categories)
  }
})
