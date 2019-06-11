<template>
  <div>
  <div id="banner-container" class="container-fluid">
    <div id="row1" class="row">
      <div class="col-lg-12">
      <div class="container">
	<div class="row">
        <div class="col-lg-10">
            <div class="heading"><h1>Learn it. Do it.</h1></div>
            <div class="paragraph"><p>Learn new skills for as low as ₹700. Ends 30 May, 11:59 p.m.</p></div>
            <div id="imaginary_container"> 
                <div class="input-group stylish-input-group">
                    <input id="input" v-on:keyup.enter="searchIt" type="text" class="form-control"  placeholder="What do you want to learn?" v-model="search">
                    <span class="input-group-addon">
                        <button @click="searchIt">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>  
                    </span>
                </div>
            </div>
        </div>
	</div>
</div>
</div>
</div>
</div>
<div id="tab-contaier" class="container-fluid">
  <div class="row">
    <div class="col-lg-12">
      <ul class="nav justify-content mr-auto">
        <li active-class="active" class="catergory" v-for="category in categories" :key="category._id" @click="onClick(category.category)"><a>{{ category.category }}</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="container-fluid content-container">
  <div class="row content-row">
        <div class="col-lg-12 course-div">
          <div class="course-box" v-for="product in products" :key="product._id" >
            <a-popover placement="right">
                      <template slot="content">
                        <div class="popover-container">
                            <h3 style="font-size: 20px;text-align: justify;text-justify: inter-word;">{{ product.title }}</h3>
                            <p id="sub-heading">Game development & design. Learn Unity 2018 in C#. Your first 7 2D Unity games for web, Mac & PC. Includes Tilemap</p>
                            <ul>
                              <li><p>Learn C#, a powerful modern language, from scratch. No prior programming experience is necessary.</p></li>
                              <li><p>Become excellent at using the Unity game engine.</p></li>
                              <li><p>Build a solid foundation for game design and game development that will help you build your own games.</p></li>
                            </ul>
                            <button v-if="$store.state.bucket.includes(product._id) && $store.state.isLoggedIn" type="button" class="btn btn-danger goToCart" @click="goToCart">Go to cart</button>
                            <button v-if="!$store.state.bucket.includes(product._id) && $store.state.isLoggedIn" type="button" class="btn btn-danger addTOCart" @click="addItemToCart(product._id)">Add to cart</button>
                        </div>                   
                      </template>     
            <div  @click="showDetails(product._id)">
              <div>
              <img class="course-img" :src="'http://192.168.0.106:8081/uploads/'+product.thumbnail" alt="">
              </div>
                <div class="content-box">
                  <div class="content-heading">{{product.title}}</div>
                   <span class="author">{{product.author}}</span>
                   <span class="rating"></span>
                   <span class="price"> ${{product.price}}</span>
                </div>
            </div>
            </a-popover>
          </div>
        </div>
  </div>
</div>
</div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'home',
  data () {
    return {
      search: ''
    }
  },
  computed: mapGetters(["products","categories"]),
  methods:{
    ...mapActions(["fetchProducts","fetchSpecifiedCategoryItems","addToCart"]),
    searchIt () {
      this.$router.push({ name: 'search', params: { searched: this.search}})
    },
    showDetails (id) {
      this.$router.push({ name: 'details', params: { id: id}, query: { id: id} })
    },
    onClick (key) {
      this.fetchSpecifiedCategoryItems (key)
      this.$router.push({name:'categorized-products', params: { category: key}, query: { category: key} })
    },
    goToCart () {
      this.$router.push({name: 'cart'})
    },
    addItemToCart (id) {
      if (this.$store.state.isLoggedIn) {
        this.addToCart({productId: id, userId: window.localStorage.getItem("userId")})
      } else {
        this.$router.push({name: 'login', query: { redirect: '/details/'+id }})
      }
    }
  },
  created() {
    this.fetchProducts();
  }
} 
</script>

<style scoped>
h3 {
  margin-top: 15px;
  color: #636466;
}

.paragraph {
  font-size: 14px;
  text-align: justify;
  text-justify: inter-word;
}

#sub-heading {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: -15px;
  margin-top: 20px;
  color: rgb(138, 136, 133);
  text-align: justify;
  text-justify: inter-word;
}

.popover-container {
  width: 300px;
  padding: 5px 15px 10px 10px;
}

.pop-over {
  width: 200px !important ;
  height: 500px;
}

.addTOCart {
  font-size: 18px;
  border: none; 
  color: #FFF;
  background-color: #6E1A52;
  border-color: transparent;
  font-weight: 400;
  width: 100%;
  height: 50px;
}

.goToCart {
  background-color: rgb(97, 43, 79);
  border: none;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  height: 50px;
}

#banner-container {
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.nav,
.mr-auto {
flex: 1;
margin: auto !important;
display: flex;
justify-content: space-between;
color: #29303b;
font-size: 20px;
border: none;
padding-bottom: 10px;
border-bottom: 1px solid rgb(182, 178, 178);
}

#row1 {
  width: 100%;
  height: 500px;
  margin: 0px;
  padding: 0px;
  background-image: url('../assets/main-banner.png');
  background-repeat: no-repeat;
  background-size: 100% 500px;
}

.col-lg-12 {
  margin: 0px;
  padding: 0px;
  width: 100%;
  
}

.col-lg-10 {
  height: 20%;
  margin-top: 12%;
  margin-left: -80px;
}

.heading {
  width: 100%;
}

.paragraph {
  color: white;
  font-size: 20px;
}

#imaginary_container{
    width: 100%;
    margin-top: 3%;
}
.stylish-input-group .input-group-addon{
    text-align: left;
    background: white !important; 
    border-radius: 2px;
}
.stylish-input-group .form-control{
  height: 55px;
  font-size: 18px;
	border-right:0; 
	box-shadow:0 0 0; 
	border-color:#ccc;
  border-radius: px;
}
.stylish-input-group button{
    border:0;
    font-size: 25px;
    color: red;
    background:transparent;
}

.input-group-addon:hover {
    background-color: red !important;
    border: 1px solid red;
}

.input-group-addon:hover button{
    border:0;
    font-size: 25px;
    color: rgb(255, 254, 254);
    background:transparent;
}

.input-group {
  width: 50%;
  font-weight: 200;
}

h1 {
  font-size: 40px;
  margin: 10px 0px;
  color: white;
  font-weight: 600;
}

.catergory {
  color: rgb(12, 8, 8) !important;
}

.course-div {
  margin-top: 15px;
  margin-bottom: 200px;
  text-align: center;
}

.course-box {
  display: inline-block;
  text-align: left;
  height: 290px;
  width: 215px;
  margin: 0px 0.5%;
  margin-top: 5px;
  margin-bottom: 40px;
  border: 1px solid rgb(204, 199, 199);
}

.course-box:hover {
  box-shadow: 2px 2px 8px rgb(204, 198, 198), -2px -2px 8px rgb(204, 198, 198);
  cursor: pointer;
  border: 1px solid rgb(223, 217, 217);
}

.course-box:hover img  {
  -webkit-filter: brightness(60%);
}

.course-img {
  margin: 0px;
  padding: 0px;
  width: 213px;
  height: 115px;
  position: relative;
}

.content-box {
  padding: 15px 10px 0 15px;
  display: block;
  font-size: small;
}

.content-heading {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-weight: 500;
    height: 50px;
    margin-bottom: 20px;
    line-height: 1.43;
    font-size: 18px;
    color: #29303b;
    margin-bottom: 10px;
}

.author {
    height: 30px;
    padding-top: 7px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #686f7a;
}

.rating {
    height: 30px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #686f7a;
}

.price {
    height: 40px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 21px;
    font-weight: 550;
    text-align: right;
    padding-right: 13px;
    color: rgb(22, 22, 22);
}
</style>
