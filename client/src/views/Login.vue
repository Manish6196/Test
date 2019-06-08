<template>
    <div class="container">
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
            <div class="panel panel-info" >
                    <div class="panel-heading">
                        <div class="panel-title">Sign In</div>
                    </div>     

                    <div style="padding-top:30px" class="panel-body" >

                        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                            
                        <form id="loginform" class="form-horizontal" role="form">
                                    
                            <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" type="text" class="form-control" name="username" placeholder="your email" v-model="email">                                        
                                    </div>
                                
                            <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" class="form-control" name="password" placeholder="password" v-model="password">
                                    </div>
                                    

                                
                            <div class="input-group">
                                      <div class="checkbox">
                                        <label>
                                          <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                                        </label>
                                      </div>
                                    </div>


                                <div style="margin-top:10px" class="form-group">
                                    <!-- Button -->

                                    <div class="col-sm-12 controls">
                                      <button id="btn-login" class="btn btn-danger" @click="logInUser">Login  </button>
                                    </div>
                                </div>
                             
                            </form>     

                        </div>                     
                    </div>  
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(["userLogin","getCart"]),
    goToSignUp () {
      this.$router.push({name: 'sign-up'})
    },
   async logInUser () {
       await this.userLogin({email: this.email, password: this.password, cartId: window.localStorage.getItem('cartId')})
       this.$router.push({name: 'home'})
    }
  },
  mounted () {
    this.getCart({userId: window.localStorage.getItem("userId")});
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
