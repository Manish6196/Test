<template>
    <div class="container-fluid">
        <div class="row category-heading">
            <div class="container">
              <div class="col-lg-12">
                <h1 style="color: white; font-size: 50px;"> {{ specifiedItems[0].category }} </h1>
              </div>
            </div>
        </div>
        <br>
        <div class="row">
          <div class="container">
            <div class="col-lg-12">
              <h2 class="sub-heading">Courses to get you started</h2>
            </div>
          </div>
        </div>
        <br>
        <div class="row products">
            <div class="container products-container">
                <div class="col-lg-12 course-div">
                   <div class="course-box" v-for="product in specifiedItems" :key="product._id">

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
              <img class="course-img" :src="'http://localhost:8081/uploads/'+product.thumbnail" alt="">
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
  name: 'categorized-products',
  computed: {
      ...mapGetters(["categories","specifiedItems"])
  },
  methods:{
    ...mapActions(["fetchCategories","addToCart"]),
    showDetails (id) {
      this.$router.push({ name: 'details', params: { id: id}, query: { id: id} })
    },
    goToCart () {
      this.$router.push({name: 'cart'})
    },
    addItemToCart (id) {
        this.addToCart({productId: id, userId: window.localStorage.getItem("userId")})
    }
  },
  created() {
    this.fetchCategories();
  }
}
</script>

<style scoped>
h3 {
  margin-top: 15px;
  color: #636466;
}

p {
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


.category-heading {
    height: 100px;
    margin-top: 30px;
    padding-top: 20px;
    background: linear-gradient(220deg,#EC5252 -10%,#6E1A52 70%);
    color: white;
}

.products-container {
  border-top: 1px solid rgb(194, 192, 192);
}

.sub-heading {
  color: rgb(95, 95, 95);
}

.course-div {
  margin-top: 15px;
  margin-bottom: 200px;
  margin-left: 5%;
  margin-right: -5%;
}

.course-box {
  display: inline-block;
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
}

.course-img {
  margin: 0px;
  padding: 0px;
  width: 213px;
  height: 115px;
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
