<template>
<div class="container-fluid main-container">
        <div class="row category-heading">
            <div class="container">
              <div class="col-lg-12">
                <h1 style="color: white; font-size: 50px;"> Create Your Course </h1>
              </div>
            </div>
        </div>
        <br>
        <div class="row products">
            <div class="container">
              <div class="col-lg-7">
                   <form data-vv-scope="form-4" class="product-form">              
  <div class="form-group">
    <label for="exampleInputEmail1">Course title</label>
    <input type="text" class="form-control" v-model="title" name="title" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('form-4.title') }" aria-describedby="emailHelp" placeholder="Please enter a descriptive title">
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.title')" class="help is-danger">{{ errors.first('form-4.title') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Authors</label>
    <input class="form-control" v-model="author"  v-validate="'required'" name="author" :class="{'input': true, 'is-danger': errors.has('form-4.author') }" aria-describedby="emailHelp" placeholder="Authors name">
    <small>You can add multiple names seprated by commas. </small>
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.author')" class="help is-danger">{{ errors.first('form-4.author') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control"  v-model="category" name="category"  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('form-4.category') }">
      <option>Development</option>
      <option>Business</option>
      <option>Finance & Accounting</option>
      <option>IT & Software</option>
      <option>Personal Development</option>
      <option>Design</option>
      <option>Marketing</option>
    </select>
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.category')" class="help is-danger">{{ errors.first('form-4.category') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Price ( in US dollors)</label>
    <input type="number" class="form-control" v-model="price" name="price"  aria-describedby="emailHelp" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('form-4.price') }" placeholder="e.g. $850">
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.price')" class="help is-danger">{{ errors.first('form-4.price') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Course thumbnail</label>
    <input type="file" v-on:change="handleImageFileUpload($event)" class="form-control-file"  v-validate="'required'" name="thumbnail" :class="{'input': true, 'is-danger': errors.has('form-4.thumbnail') }">
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.thumbnail')" class="help is-danger">{{ errors.first('form-4.thumbnail') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Preview video</label>
    <input type="file" v-on:change="handleVideoFileUpload($event)" class="form-control-file" v-validate="'required'" name="preview" :class="{'input': true, 'is-danger': errors.has('form-4.preview') }">
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.preview')" class="help is-danger">{{ errors.first('form-4.preview') }}</span>
  </div>

  <button type="btn" class="btn btn-primary" @click.prevent ="handleSubmit4('form-4')">Create your course</button>
</form>
              </div>
                <div class="col-lg-5">
                  <div class="course-box-container">
                            <div class="course-box">
            <div>
              <div id="preview">
              <img class="course-img" :src="url">
              </div>
                <div class="content-box">
                  <div class="content-heading">{{title}}</div>
                   <span class="author">{{author}}</span>
                   <span class="rating"></span>
                   <span class="price"> ${{price}}</span>
                </div>
            </div>
        </div>
                  </div>
                       
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  data () {
      return {
          title: '',
          author: '',
          price: '',
          thumbnail: '',
          preview: '',
          category: '',
          url: null
      }
  },
  methods: {
      handleImageFileUpload( event ) {
      this.thumbnail = event.target.files[0];
      this.url = URL.createObjectURL(event.target.files[0]);
      },
      handleVideoFileUpload( event ) {
      this.preview = event.target.files[0];
      },
      handleSubmit4(scope) {
      this.$validator.validateAll(scope).then(valid => {
        if (valid) {
          this.createProduct();
        }
      });
    },
      createProduct () {
          let formData = new FormData();
          formData.set('title', this.title);
          formData.set('userId', window.localStorage.getItem('userId'))
          formData.set('author', this.author);
          formData.set('price', this.price);
          formData.set('category', this.category);
          formData.append('thumbnail', this.thumbnail); 
          formData.append('preview', this.preview); 
      axios.post( 'http://localhost:8081/products',
  formData,
  {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }
).then(function(){
  console.log('SUCCESS!!');
  this.$router.push({name: 'home'})
})
.catch(function(){
  console.log('FAILURE!!');
});
      }
  }
}
</script>

<style scoped >

.product-form {
  border: 1px solid rgb(228, 225, 227);
  border-radius: 0px;
  margin-top: 30px;
  margin-bottom: 90px;
  padding: 5% 3% 5% 13%;

}

.create-course-heading {
    height: 150px;
    background-color: rgb(211, 206, 206);
}

.category-heading {
    height: 100px;
    margin-top: 30px;
    padding-top: 20px;
    background: linear-gradient(220deg,#EC5252 -10%,#6E1A52 70%);
    color: white;
}

.form-control {
  color: #6E1A52;
}

label {
 color: #6E1A52;
}

.products-container {
  border-top: 1px solid rgb(194, 192, 192);
}

.sub-heading {
  color: rgb(95, 95, 95);
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

.course-box-container {
   padding: 25% 10% 25% 40%;
   height: 500px;
   position: relative;
}

.course-box {
  display: inline-block;
  height: 290px;
  width: 215px;
  margin: 0px 0.5%;
  margin-top: 5px;
  margin-bottom: 40px;
  border: 1px solid rgb(204, 199, 199);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.course-box:hover {
  box-shadow: 2px 2px 8px rgb(204, 198, 198), -2px -2px 8px rgb(204, 198, 198);
  cursor: pointer;
}

.course-img {
  margin: 0px;
  border: none;
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
