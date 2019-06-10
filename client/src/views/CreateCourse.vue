<template>
<div class="container-fluid main-container">
        <div class="row category-heading">
            <div class="container">
              <div class="col-lg-12">
                <h1 style="color: black; font-size: 50px;"> Create Your Course </h1>
              </div>
            </div>
        </div>
        <br>
        <div class="row products">
            <div class="container">
                <form data-vv-scope="form-4">
                    {{title}}
                    {{author}}
                    {{price}}
                    {{category}}
                    
  <div class="form-group">
    <label for="exampleInputEmail1">Course title</label>
    <input type="text" class="form-control" v-model="title" name="title" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('form-4.title') }" aria-describedby="emailHelp" placeholder="Please enter a descriptive title">
    <span style="color: red; font-size: 12px; margin:0px; padding: 0px;" v-show="errors.has('form-4.title')" class="help is-danger">{{ errors.first('form-4.title') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Authors</label>
    <input class="form-control" v-model="author"  v-validate="'required'" name="author" :class="{'input': true, 'is-danger': errors.has('form-4.author') }" aria-describedby="emailHelp" placeholder="Authors name">
    <small>You can add multiple names seprated by commas</small>
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
          category: ''
      }
  },
  methods: {
      handleImageFileUpload( event ) {
      this.thumbnail = event.target.files[0];
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
          formData.set('author', this.author);
          formData.set('price', this.price);
          formData.set('category', this.category);
          formData.append('thumbnail', this.thumbnail); 
          formData.append('preview', this.preview); 
          console.log(formData)
      axios.post( 'http://localhost:8081/products',
  formData,
  {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }
).then(function(){
  console.log('SUCCESS!!');
})
.catch(function(){
  console.log('FAILURE!!');
});
      }
  }
}
</script>

<style scoped >
.main-container {
    background-color: rgb(241, 241, 241);
    padding-left: 30%;
}
</style>
