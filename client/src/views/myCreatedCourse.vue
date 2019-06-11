<template>
    <div class="container-fluid">
        <div class="row search-upper-banner">
            <div class="col-lg-12">
                <div class="container">
                    <h3 style="margin-top: 20px;color: black; font-weight: 350;"> {{ filteredList.length }} results for Created Courses </h3>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 serched-items-container">
                    <div class="serched-item" v-for="product in filteredList" :key="product._id">
                        <div>
                            <div class="col-lg-4 image-item">
                                 <img @click="showDetails(product._id)" class="course-img" :src="'http://192.168.0.106:8081/uploads/'+product.thumbnail" alt="">
                            </div>
                            <div class="content-box col-lg-5">
                               <div @click="showDetails(product._id)" style="cursor: pointer;" class="content-heading">{{product.title}}</div>
                               <span @click="showDetails(product._id)" style="cursor: pointer;" class="author">{{product.author}}</span>
                            </div>
                            <div class="col-lg-2 price-div" style="height: 100%; width: 100%; margin-top: 10px;">
                                <button class="btn btn-danger" style="width: 100px; height: 35px; font-weight: 500;" @click="myCourses">Edit</button>
                            </div>
                            <div class="col-lg-1 price-div" style="height: 100%; width: 100%; margin-top: 6px;">
                                <span class="price"> ${{product.price}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
computed: {
    filteredList() {

          const value = this.$route.params.userId
          return this.$store.state.products.filter(function(product) {return (product.userId.indexOf(value) > -1 );});}
},
methods:{
    ...mapActions(["fetchProducts","addToCart"]),
showDetails (id) {
    this.$router.push({ name: 'details', params: { id: id} })
 },
    myCourses () {
      this.$router.push({name: 'my-courses'})
    }
},
created () {
    this.fetchProducts();
}
}
</script>

<style scoped>

.search-upper-banner {
    /* height: 146px; */
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #ebe2eb;
    opacity: 0.9;
    min-width: 320px;
}

.serched-items-container {
    border-top: 1px solid rgb(209, 207, 207);
}

.serched-item {
    height: 160px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(218, 215, 215);
}

.image-item {
    height: 152px;
}

.image-item img{
    width: 100%;
    height: 100%;
}

.course-img:hover {
    cursor: pointer;
}

.content-box {
    padding: 0px;
}

.content-heading {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 20px;
    color: #394352;
}

.author {
    height: 30px;
    padding-top: 7px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #686f7a;
}

.price-div {
    padding: 0px;
    padding-top: 5px;
    padding-right: 30px;
    text-align: right;
}

.price {
    font-size: 25px;
    font-weight: 500;
    text-align: right;
}

</style>
