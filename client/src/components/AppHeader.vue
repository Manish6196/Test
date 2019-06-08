<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 navbar navbar-expand-lg navbar-light">
        <div class="col-lg-1"><router-link tag="a" to="/"><img src="../assets/udemy-logo.png" class="img" alt=""></router-link></div>
        <div class="col-lg-1 catagory">
          <a-dropdown>
            <a class="ant-dropdown-link drop-down" href="#">
          <img src="../assets/catagory.png" class="category-icon" style="height: 15px; width: 15px; margin-left: 6%;" alt="">
           Catagories</a>
             <a-menu class="menu" slot="overlay" @click="click">
               <a-menu-item class="menu-item" v-for="category in categories" :key="category.category">{{ category.category }}</a-menu-item>
             </a-menu>
           </a-dropdown>
           </div>
        <div class="col-lg-5 search-area">
          <!-- <form class="form-inline ml-5">
         <span style="width: 100%;"><input class="form-control" id="search-input" placeholder="Search for anything"  v-model="search">
         <button class="btn btn-danger" id="sb" @click="searchIt">Search</button></span>
         </form> -->
         <div id="imaginary_container"> 
                <div class="input-group stylish-input-group header-input-field">
                    <input v-on:keyup.enter="searchIt" type="text" class="form-control"  placeholder="What do you want to learn?" v-model="search">
                    <span class="input-group-addon span-for-search-button-header">
                        <button @click="searchIt">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>  
                    </span>
                </div>
            </div>
        </div>
        <div class="col-lg-5 input-left">
          <button class="btn btn-light" @click="goToCreateCourse">Teach on udemy</button>
          <!-- <div class="btn" data-vv-scope="form-4" >
    <button class="btn btn-light" @click="showModal4">Instructor login</button>
    <a-modal
      v-model="visible4"
      onOk="handleOk4"
    ><br>
      <template slot="footer">.
      </template>
    <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2> Instructor Login </h2>
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" style="width: 300px;" v-model="i_user_login.email" v-validate="'required|email'" id="instructor-login-email"  name="instructor-login-email" class="form-control" :class="{ 'is-danger': errors.has('form-4.instructor-login-email') }" />
                <div v-if="errors.has('form-4.instructor-login-email')" class="invalid-feedback">
                  {{ errors.first("form-4.instructor-login-email") }}
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" style="width: 300px;" v-model="i_user_login.password" v-validate="{ required: true, min: 6 }" id="instructor-login-password"  name="instructor-login-password" class="form-control" :class="{ 'is-danger': errors.has('form-4.instructor-login-password') }" />
                <div v-if="errors.has('form-4.instructor-login-password')" class="invalid-feedback">
                  {{ errors.first("form-4.instructor-login-password") }}
                </div>
              </div><br>
              <a-button style="background-color: #d9534f; border: none; height: 40px; width: 150px;font-size: 17px; font-weight:500;" key="submit" type="primary" :loading="loading" @click="handleSubmit4('form-4')" >
                  Login
              </a-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </a-modal>
  </div> -->

          <!-- <img class="cart" src="../assets/shopping-cart.png" style="height: 20px; width: 20px; margin-right:3%; margin-left: 1%;" alt="not found" @click="goToCart"> -->
                   <a-popover placement="bottomRight">
                                  <template slot="content">
                                         <div class="container-fluid items-popover" style="margin: 0px; padding: 0px;">
                                           <div class="row presentation" style="margin: 0px; padding: 0px;">
                                             <div v-if="this.$store.state.cart.length==0" style="text-align: center; width: 315px;">
                                               <P style="margin-bottom: 5px;">Your cart is empty.</P>
                                                  <div class="row popover-go-to-cart">
                                                   <button type="button" class="btn btn-danger keep-shopping-button" @click="goToHome">Keep shopping</button>
                                                  </div>
                                               </div>
                                             <div v-else v-for="product in this.$store.state.cart" :key="product._id" class="items-scroll col-lg-12" style="margin: 0px; padding: 0px;" >
                                                   <div class="item" style="margin-top: 5px;">
                                                     <div class="col-lg-3"><img style="height: 60px; width:75px;" :src="'http://localhost:8081/uploads/'+product.thumbnail" alt=""></div>
                                                     <div class="col-lg-9">
                                                    <div style="width: 197px; height: 32px;">
                                                      <div style="height: 17px ; overflow: hidden; text-overflow: ellipsis;">
                                                            <h6 style="font-size: 14px;">{{ product.title }} </h6>
                                                      </div>
                                                      <div style="height: 15px; overflow: hidden; text-overflow: ellipsis;">
                                                           <p style="font-size: 12px;">{{ product.author }} </p>
                                                      </div>
                                                      <div style="height: 20px; overflow: hidden; text-overflow: ellipsis;">
                                                           <p style="font-size: 17px; color: #d9534f; font-weight: 600;">${{ product.price }} </p>
                                                      </div>
                                                      
                                                    </div>
                                                  </div>                                        
                                                   </div>                                                                                                                                                                                
                                              </div>
                                           </div>
                                           <div v-if="!this.$store.state.cart.length==0" class="row popover-go-to-cart">
                                             <button type="button" class="btn btn-danger goToCart" @click="goToCart">Go to cart</button>
                                           </div>
                                         </div>
                                  </template>
                            <span id="ex4" @click="goToCart">
                                 <span class="p1 fa-stack fa-2x has-badge" :data-count = this.$store.state.isLoggedIn?this.$store.state.bucket.length:0>
                                 <i class="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse cart-icon" data-count="4b"></i>
                                 </span>
                            </span>
                   </a-popover>

             <div class="btn" >
    <button v-if="!this.$store.state.isLoggedIn" class="btn" id="lg-btn" @click="showModal1">Log In</button>
    <a-modal
      v-model="visible1"
      onOk="handleOk1"
    ><br>
      <template slot="footer">.
      </template>
    <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Login </h2>
            <!-- <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" style="width: 300px;" v-model="user_login.email" v-validate="'required|email'" id="user-login-email" name="user-login-email" class="form-control" :class="{ 'input': true,'is-danger': errors.has('form-1.user-login-email') }" />
                <div v-if="errors.has('form-1.user-login-email')" class="help is-danger">
                  {{ errors.first("form-1.user-login-email") }}
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" style="width: 300px;" v-model="user_login.password" v-validate="{ required: true, min: 6 }" id="user-login-password" name="user-login-password" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.user-login-password') }" />
                <div v-if="errors.has('form-1.user-login-password')" class="help is-danger">
                  {{ errors.first("form-1.user-login-password") }}
                </div>
              </div>
              <div v-if="this.$store.state.loginMessage"> {{ this.$store.state.loginMessage }} </div>
              <br>
              <a-button class="btn btn-outline-info" style="background-color: #d9534f; border: none; height: 40px; width: 150px;font-size: 17px; font-weight:500;" key="submit" type="primary" :loading="loading" @click="handleSubmit1('form-1')">
                  Login
              </a-button>
            </form> -->
                 
                 <form @submit.prevent="handleSubmit1('form-1')" class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;" data-vv-scope="form-1">
                   <div v-if="this.$store.state.loginMessage" style="color: rgb(30, 107, 223);font-weight: 500;font-size: 18px;"> {{ this.$store.state.loginMessage }} </div>
            <div class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;">
                <label class="login-label" style="color: black; font-size: 16px; margin:0px; padding: 0px;">Email</label><br>
                    <input name="email" v-model="user_login.email" class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('form-1.email') }" type="text" placeholder="Email">
                    <i style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.email')" class="fa fa-warning"></i>
                    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.email')" class="help is-danger">{{ errors.first('form-1.email') }}</span>
            </div>

            <div class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;">
                <label class="label" style="color: black; font-size: 16px; margin:0px; padding: 0px;">Password</label>
              
                    <input name="password" v-model="user_login.password" class="form-control" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('form-1.password') }" type="password" placeholder="Password">
                    <i style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.password')" class="fa fa-warning"></i>
                    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.password')" class="help is-danger">{{ errors.first('form-1.password') }}</span>
                
            </div>
            <div class="col-lg-12" style="color: black; font-size: 16px; margin-top: 20px; padding: 0px;">
                    <button class="btn btn-danger" type="submit" name="button" :loading="loading">Login</button>
            </div>
            
        </form>


          </div>
        </div>
      </div>
    </div>
  </div>
    </a-modal>
  </div>


     
            <div v-if="!this.$store.state.isLoggedIn" class="btn" data-vv-scope="form-2" >
    <button v-if="!this.$store.state.isLoggedIn" class="btn btn-danger" id="sn-btn" @click="showModal2">Sign Up</button>
    <a-modal 
      style="padding:10px;"
      v-model="visible2"
      onOk="handleOk2"
    ><br>
      <template slot="footer">.
      </template>
      <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Sign Up</h2>
            <!-- <form style="margin-bottom: 0px;">
              <div class="form-group">
                <label for="firstName">Name</label>
                <input type="text" style="width: 300px;" v-model="user_signup.name" v-validate="'required'" id="user-signup-name" name="user-signup-name" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.user-signup-name') }" />
                <div v-if="errors.has('form-2.user-signup-name')" class="help is-danger">
                  {{ errors.first("form-2.user-signup-name") }}
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" style="width: 300px;" v-model="user_signup.email" v-validate="'required|email'"  class="form-control" id="user-signup-email" name="user-signup-email"  :class="{'input': true, 'is-danger': errors.has('form-2.user-signup-email') }" />
                <div v-if="errors.has('form-2.user-signup-email')" class="help is-danger">
                  {{ errors.first("form-2.user-signup-email") }}
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" style="width: 300px;" v-model="user_signup.password" v-validate="{ required: true, min: 6 }" class="form-control" id="user-signup-password" name="user-signup-password" :class="{'input': true, 'is-danger': errors.has('form-2.user-signup-password') }" />
                <div v-if="errors.has('form-2.user-signup-password')" class="invalid-feedback">
                  {{ errors.first("form-2.user-signup-password") }}
                </div>
              </div><br>
              <a-button style="background-color: #d9534f; border: none; height: 40px; width: 150px;font-size: 17px; font-weight:500;" key="submit" type="primary" :loading="loading" @click="handleSubmit2('form-2')">
                 Sign Up
              </a-button>
            </form> -->
                      <form @submit.prevent="handleSubmit2('form-2')" class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;" data-vv-scope="form-1">

                        <div class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;">
                <label class="label" style="color: black; font-size: 16px; margin:0px; padding: 0px;">Name</label><br>
                    <input name="name" v-model="user_signup.name" class="form-control" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('form-1.name') }" type="text" placeholder="Email">
                    <i style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.name')" class="fa fa-warning"></i>
                    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.name')" class="help danger">{{ errors.first('form-1.name') }}</span>
            </div>

            <div class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;">
                <label class="label" style="color: black; font-size: 16px; margin:0px; padding: 0px;">Email</label><br>
                    <input name="email" v-model="user_signup.email" class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('form-1.email') }" type="text" placeholder="Email">
                    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.email')" class="help danger">{{ errors.first('form-1.email') }}</span>
            </div>

            <div class="col-lg-12" style="color: black; font-size: 16px; margin:0px; padding: 0px;">
                <label class="label" style="color: black; font-size: 16px; margin:0px; padding: 0px;">Password</label>
              
                    <input name="password" v-model="user_signup.password" class="form-control" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('form-1.password') }" type="password" placeholder="Password">
                    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-1.password')" class="help danger">{{ errors.first('form-1.password') }}</span>
                
            </div>
            <div class="col-lg-12" style="color: black; font-size: 16px; margin-top: 20px; padding: 0px;">
                <p class="control">
                    <button class="btn btn-danger" type="submit" name="button" :loading="loading">Sign up</button>
                </p>
            </div>
        </form>
              
          </div>
        </div>
      </div>
    </div>
  </div>
    </a-modal>
  </div>


          <button v-else class="btn btn-danger" id="sn-btn" @click="logOut">Log Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AppHeader',
   data() {
    return {
      loading: false,
      visible1: false,
      visible2: false,
      visible4: false,
      i_user_login: {
        email: "",
        password: ""
      },
      user_login: {
        email: "",
        password: ""
      },
      user_signup: {
        name: "",
        email: "",
        password: ""
      },
      submitted_login: false,
      submitted_signup: false,
      submitted_i_login: false,
      search: ''
    }
  },
  computed: { 
    ...mapGetters(["categories"]),
    
    },
  methods: {
    ...mapActions(["fetchCategories","fetchSpecifiedCategoryItems","getCart","userLogin"]),
    searchIt () {
      let search = this.search
      if (search === '') { this.$router.push({ name: 'home' }) }
      else {
         this.$router.push({ name: 'search', params: { searched: this.search}})
      }
    },
    handleSubmit1(scope) {
      this.$validator.validateAll(scope).then(valid => {
        if (valid) {
          this.handleOk1();
        }
      });
    },
    handleOk1() {
      this.loading = true;
       this.userLogin({email: this.user_login.email, password: this.user_login.password})
         .then(res => {
            console.log(res)
            if(window.localStorage.getItem('token')) {
             setTimeout(() => {
             this.visible1 = false
             this.loading = false
             this.$store.state.loginMessage = null
             this.user_login.password = '';
             this.user_login.email = '';
             this.$nextTick(() => {
             this.errors.clear();
             this.$nextTick(() => {
             this.$validator.reset();
                });});
      }, 1000);
            }
             
    })
    },
    reset() {
    this.user_login = {
      email: "",
      password: ""
    };
    this.$validator.clean();
  },
    handleSubmit2(scope) {
      this.$validator.validateAll(scope).then(valid => {
        if (valid) {
          this.handleOk2();
          // this.user_signup.email = '',
          // this.user_signup.password = ''
          // this.user_signup.name = ''
        }
      });
    },
    // handleSubmit4(scope) {
    //   this.$validator.validateAll(scope).then(valid => {
    //     if (valid) {
    //       this.handleOk4();
    //       this.user.email = '',
    //       this.user.password = ''
    //     }
    //   });
    // },
    goToCreateCourse () {
      this.$router.push({path:'/become-an-instructor'})
    },
    click ({key}) {
      this.fetchSpecifiedCategoryItems (key)
      this.$router.push({name:'categorized-products', params: { category: key}, query: { category: key} })
    },
    goToHome () {
      this.$router.push({name: 'home'})
    },
    goToSignUp () {
      this.$router.push({name: 'sign-up'})
    },
    goToLogin () {
      this.$router.push({name: 'login'})
    },
    logOut () {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userId');
      window.localStorage.removeItem('cartId');
      window.localStorage.removeItem('userName');
      this.$store.commit('logoutUser');
      // this.$store.state.cart = [];
      // this.$store.state.bucket = [];
      // this.$store.state.currentUser = '';
      // this.$store.state.currentCart = ''
    },
    goToCart () {
      this.$router.push({name: 'cart'})
    },
     showModal1() {
      this.visible1 = true;
    },
     showModal2() {
      this.visible2 = true;
    },
    async handleOk2() {
      this.loading = true;
      setTimeout(() => {
        this.visible2 = false;
        this.loading = false;
      }, 500);
      await axios.post('http://localhost:8081/user/signup', {email: this.user_signup.email, password: this.user_signup.password, name: this.user_signup.name, role: 'user'});
      
    },
    // async handleOk4() {
    //   this.loading = true;
    //   setTimeout(() => {
    //     this.visible4 = false;
    //     this.loading = false;
    //   }, 500);
    //   await this.i_userLogin({email: this.user.i_l_email, password: this.user.i_l_password})
      
    // },
    handleCancel1() {
      this.visible1 = false;
    },
    handleCancel2() {
      this.visible2 = false;
    },
    // handleCancel4() {
    //   this.visible4 = false;
    // }
  },
  created () {
    this.fetchCategories();
    let loggedIn = this.$store.state.isLoggedIn
    if (loggedIn) {
      this.getCart({userId: window.localStorage.getItem("userId")});
    }
  }
}
</script>

<style>

button:focus {outline:0;}

.form-group {
  width: 450px;
}

.panel-heading {
  background-color: #d9534f;
  color: white;
}

.signup-box {
  width: 400px;
  padding-left: 0px;
}
.panel {
  border: none !important ;
  width: 400px;
}

.logon-box {
  margin-left: 0px !important;
}

.signup-box {
  margin-left: 0px !important;
}

.navbar {
    height: 65px;
    font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: rgb(115, 115, 115);
    background-color: rgb(255, 255, 255);
    margin: 0;
    box-shadow: 0px 0.1px 2px 2px rgb(202, 200, 200);
}

.input-left {
  text-align: right;
}

.img {
    margin-left: 0px;
    height: 70px;
}

.drop-down {
  color: rgb(102, 99, 99) !important;
}
.catagory {
  text-align: right;
  padding-right: 0px;
}

.form-inline {
    width: 100%;
}

#search-input {
  border: 2px solid #f2f3f5;
  width: 85%;
  height: 45px;
   padding: 5px 20px;
   background-color: #f2f3f5;
   border-radius: 0px;
}

li {
  font-size: 15px;
  margin-top: 17px;
  color: rgb(115, 115, 115);
}

li:hover {
  cursor: pointer;
}

#search-input:focus {
  box-shadow: none;
  background-color: white;
}

#sb {
    height:44px;
    border-radius: 0px;
}

.search-area {
    padding-left: 50px;
}

#imaginary_container{
    width: 100%;
   
}
.header-input-field .span-for-search-button-header{
    text-align: left;
    background: white !important; 
    border-radius: 2px;
}
.header-input-field .form-control{
  height: 45px;
  width: 500px;
  font-size: 16px;
	border-right:0; 
	box-shadow:0 0 0; 
	border-color:#ccc;
  border-radius: 2px;
}
.header-input-field button{
    border:0;
    font-size: 20px;
    color: red;
    background:transparent;
}

.span-for-search-button-header:hover {
    background-color: red !important; 
}

.span-for-search-button-header:hover button{
    border:0;
    font-size: 20px;
    color: rgb(235, 221, 221);
    background:transparent;
}

.input-group {
  width: 50%;
  font-weight: 200;
}

.btn-light {
    height: 45px;
    margin: 5px 5px;
    color: rgb(102, 99, 99);
    background-color: white;
    border: none;
    font-size: 15px;
}

.items-popover {
  width: 330px;
  max-height: 402px;
}

.presentation {
  width: 330px;
  max-height: 330px;
  overflow: auto;
}

.items-scroll {
  width: 313px;
  height: 80px;
}

.popover-go-to-cart {
  padding-top: 5px;
  padding-left: 30px;
}

.goToCart {
  border: none;
  font-size: 18px;
  font-weight: 400;
  width: 90%;
  height: 50px;
}

.keep-shopping-button {
  border: none;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 35px;
}

#lg-btn {
  margin: 5px 3px;
  color: #b92722;
  border: 1px solid #a0403c !important;
  background-color: white !important;
  border: none;
  border-radius: 2px;
  height: 40px;
}

#lg-btn:hover {
  margin: 5px 3px;
  color: white;
  border: 1px solid #b92722 !important;
  background-color: #b92722 !important;
  border: none;
  border-radius: 2px;
  height: 40px;
}

#lg-btn:focus,
#lg-btn:active {
  box-shadow: none;
}

#sn-btn {
  margin: 5px 3px;
  border-radius: 2px;
  border: none;
  background-color: #bd4b47 !important;
  height: 40px;
  margin-right: 2%;
}

#sn-btn:hover {
  margin: 5px 3px;
  border-radius: 2px;
  border: none;
  background-color: #b92722 !important;
  height: 40px;
  margin-right: 2%;
}

.btn:focus,.btn:active {
  outline: none !important;
  box-shadow: none;
}

.cart:hover {
  cursor: pointer;
}

#ex4 {
  margin-right: 15px;
}

#ex4 .p1[data-count]:after{
  position:absolute;
  right:15%;
  top:15%;
  content: attr(data-count);
  font-size: 55%;
  padding:.2em;
  border-radius:50%;
  line-height:0.6em;
  color: white;
  background:rgba(255,0,0,.85);
  text-align:center;
  min-width: 1em;
}

.cart-icon {
  color: rgb(185, 181, 181);
}

.cart-icon:hover {
  cursor: pointer;
  color: rgb(156, 156, 156);
}

.category-icon {
  color: rgb(196, 189, 189) !important;
}
</style>
