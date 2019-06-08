<template>
    <div class="container">    
        <div id="signupbox" style="margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <div class="panel-title">Sign Up</div>
                        </div>  
                        <div class="panel-body" >
                            <form id="signupform" class="form-horizontal" role="form">
                                  
                                <div class="form-group">
                                    <label for="email" class="col-md-3 control-label">Email</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="email" placeholder="Email Address" v-model="email">
                                    </div>
                                </div>
                                    
                                <div class="form-group">
                                    <label for="name" class="col-md-3 control-label">Name</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" name="name" placeholder="Your Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="col-md-3 control-label">Password</label>
                                    <div class="col-md-9">
                                        <input type="password" class="form-control" name="passwd" placeholder="Password" v-model="password">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <!-- Button -->                                        
                                    <div class="col-md-offset-3 col-md-9">
                                        <button id="btn-signup" type="button" class="btn btn-danger" @click="createUser"><i class="icon-hand-right"></i> Sign Up</button>

                                    </div>
                                </div>
                                                                                  
                            </form>
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
          email: '',
          password: ''
      }
  },
  methods: {
      goToLogin () {
          this.$router.push({name: 'login'})
      },
    async createUser () {
      await axios.post('http://localhost:8081/user/signup', {email: this.email, password: this.password});
    }
  }
}
</script>

<style scoped>
.panel-heading {
  background-color: #d9534f;
  color: white;
}

.panel {
  border: 1px solid #d9534f ;
}
</style>
