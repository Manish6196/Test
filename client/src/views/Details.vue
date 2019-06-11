<template>
  <div class="container-fluid" style="margin-bottom: 10%;">
      <div class="row back-gray">
          <div class="col-lg-12">
            <div class="col-lg-2" style="height: 100%"></div>
            <div class="col-lg-7" style="height: 100%; margin-left: -4%; padding-bottom: 60px; width: 780px;">
              <div style="height: 225px; width: 720px; margin-top: 9%;">
                <h1 style="font-size: 37px; color: #fff;">{{ product.title }}</h1>
                <h4 style="font-size: 20px; color: #fff;">Build, compose, deploy, and manage Docker containers from development to DevOps based Swarm clusters</h4>
                <br>
                <p> Created by {{ product.author }}</p>
              </div>
            </div>  
            <div class="col-lg-3 preview-area">
              <video class="review-video" :src="'http://192.168.0.106:8081/uploads/' + product.preview" preload="auto|metadata|none" controls></video>
              <div class="preview-content">
                <h1 style="font-weight: 700; font-size:40px; color: #505763; line-height: 0.7;"> ${{ product.price }} </h1>
                <p style="color: #992337;padding-top: 8px;font-size: 16px;">1 day left at this price. Hurry Up!</p>
                <button v-if="$store.state.bucket.includes(product._id) && $store.state.isLoggedIn" type="button" class="btn btn-danger goToCart" @click="goToCart">Go to cart</button>
                <button v-if="!$store.state.bucket.includes(product._id) && $store.state.isLoggedIn" type="button" class="btn btn-danger addTOCart" @click="addItemToCart(product._id)">Add to cart</button>
                <button v-if="$store.state.isLoggedIn" type="button" class="btn basic-btn">Buy now</button>
              </div>
            </div>
          </div>  
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Details',
  computed: mapGetters(["product"]),
  methods: {
    ...mapActions(["fetchProduct","addToCart"]),
    addItemToCart (id) {
      if (this.$store.state.isLoggedIn) {
        this.addToCart({productId: id, userId: window.localStorage.getItem("userId")})
      } else {
        this.$router.push({name: 'login', query: { redirect: '/details/'+id }})
      }
    },
    goToCart () {
      this.$router.push({name: 'cart'})
    }
  },
  created () {
    this.fetchProduct(this.$route.params.id);
  }
}
</script>

<style scoped>
.back-gray {
  height: 330px;
  background-color: #505763;
  margin-top: 3%;
  background: linear-gradient(#29303B,#29303B,#29303B);
  color: #fff;
  font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.43;
}

.preview-area {
  border: 1px solid rgb(216, 212, 212);
  background-color: #fff;
  margin-top: 25px;
  padding-bottom: 0px;
  padding: 0px;
  width: 350px;
  color: black;
  border-radius: 4px;
}

.review-video {
  height: 200px;
  width: 348px !important;
}

.review-video {
  outline: none;
}

.review-video:focus {
  outline: none;
}

.preview-content {
  width: 340px;
  padding: 10px 10px;
  margin: 0px;
}

.btn-danger {
  border-radius: 2px;
  width: 300px;
  height: 55px;
  margin: 10px 20px;
  font-size: 17px;
}

.basic-btn {
  border-radius: 2px;
  border: 1px solid rgb(163, 159, 159);
  width: 300px;
  height: 55px;
  margin: 10px 20px;
  margin-bottom: 30px;
  color: #505763;
  font-size: 17px;
}

.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
</style>
