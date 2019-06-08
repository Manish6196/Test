<template>
    <div class="container-fluid window">
      <div class="row cart-heading">
          <div class="col-lg-12">
            <div class="container heading">
              <h1 style="color: white !important; font-weight: 400;">Shopping Cart</h1>
            </div>
          </div>
      </div>
      <div class="container content">
        <div class="row">
          <h3 style="font-weight: 400; font-size: 21px;" class="courseInCart">{{ cart.length }} Courses in Cart</h3>
        </div>
        <div class="row">
          <div v-if="!this.$store.state.cart.length" class="col-lg-12 empty-cart">
            <i class="fas fa-shopping-cart fa-7x"></i><br><br>
            <h4 class="cart-empty-line">Your cart is empty. Keep shopping to find a course!</h4><br>
            <button type="button" class="btn btn-danger" @click="goToHome">Keep Shopping</button>
          </div>
          <div v-if="this.$store.state.cart.length" class="col-lg-9 item">
              <div class="ordered-item" v-for="product in cart" :key="product._id">
                   <div class="col-lg-2 item-pic">
                     <img @click="showDetails(product._id)" class="my-thumbnail" :src="'http://localhost:8081/uploads/'+product.thumbnail" alt="">
                   </div>
                   <div class="col-lg-6">
                     <div @click="showDetails(product._id)" class="item-heading">
                        {{product.title}}
                     </div>
                     <div @click="showDetails(product._id)" class="item-authors">
                        {{product.author}}
                     </div>
                   </div>
                   <div class="col-lg-1"></div>
                   <div class="col-lg-3">
                     <div class="row">
                      <div class="col-lg-5 item-remove">
                        <button type="button" class="btn btn-link remove-link" @click="deleteItem(product._id)">Remove</button>
                      </div>
                      <div class="col-lg-7 item-price">
                        ${{product.price}}
                      </div>
                     </div>
                   </div>
              </div>
          </div>
          <div v-if="this.$store.state.cart.length" class="col-lg-3 right">
            <div class="total-amount">
              ${{total*0.6}}
            </div>
            <p style="text-decoration: line-through; font-size: 20px; margin-bottom: -5px;"> ${{ total}}</p>
            <p style="font-size: 18px;"> 40% off </p>
            <div class="checkout">
              <button type="button" class="btn btn-danger item-checkout-button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ... mapGetters(["cart"]),
    total: function(){
    return this.cart.reduce(function(total, item){
      return total + item.price; 
    },0);
  }
     },
  methods: {
  ...mapActions(["getCart","fetchProduct","deleteItemFromCart"]),
    goToHome () {
      this.$router.push({name: 'home'})
    },
    showDetails (id) {
      this.$router.push({ name: 'details', params: { id: id}, query: { id: id} })
    },
    deleteItem (id) {
      console.log(id)
      this.deleteItemFromCart({productId: id, cartId: window.localStorage.getItem('cartId')})
    }
  },
  created () {
    this.getCart({userId: window.localStorage.getItem("userId")});
  }
}
</script>

<style scoped>
  .window {
    margin-bottom: 10%;
  }

  .cart-heading {
    margin-top: 10px;
    height: 137px;
    background-color: #505763;
  }

  .heading {
    margin-top: 45px;
    
  }

  .content {
    margin-top: 50px;
  }

  .courseInCart {
    color: rgb(105, 105, 104);
  }

  .fa-shopping-cart {
    height: 100px;
    font-weight: 100px;
    color: rgb(230, 224, 224) !important;
  }

  .empty-cart {
    border: 1px solid rgb(196, 194, 194);
    border-radius: 3px;
    height: 300px;
    width: 100%;
    text-align: center;
    padding-top: 40px;
  }

  .cart-empty-line {
    font-weight: 350;
    color: #6a6a6b;
  }

  .btn {
    height: 45px;
    width: 133px;
    font-weight: 500;
  }

  .item {
    padding: 0px;
    padding-left: 0px !important;
  }

  .ordered-item {
    border: 1px solid rgb(235, 230, 230);
    padding-top: 7px;
    border-radius: 2px;
    margin-bottom: 5px;
    height: 90px;
    width: 100%;
  }

  .item-pic {
    cursor: pointer;
    padding-left: 10px;
    height: 100%;
  }

  .my-thumbnail {
    height: 73px;
    width: 133px;
  }

  .item-heading {
    cursor: pointer;
    height: 20px;
    width: 470px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    font-weight: 700;
    white-space: normal;
    margin-bottom: 0;
    max-height: 37px;
  }

  .item-authors {
    cursor: pointer;
    height: 18px;
    width: 290px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #a4a4a8;
    margin-top: 6px;
  }

  .col-lg-3 {
    padding: 0px;
  }

  .remove-link {
    margin-top: 35px;
    font-size: 15px;
  }

  .btn-link:hover {
    text-decoration: none;
  }

  .item-price {
    margin-top: 30px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    color: rgb(236, 69, 69);
  }

  .right {
    padding-left: 15px;
  }

  .total-amount {
    height: 50px;
    font-size: 40px;
    font-weight: 500;
  }

  .item-checkout-button {
    height: 55px;
    width: 270px;
    border-radius: 2px;
    font-size: 17px;
    font-weight: 500;
  }
</style>
