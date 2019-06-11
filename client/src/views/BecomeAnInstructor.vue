<template>
    <div class="main-page" v-if="(!this.$store.state.isLoggedIn) || (!this.$store.state.isInstructor)">
      <div class="container-fluid">
        <div class="row big-img-row">
            <div class="col-lg-12 big-img">
                <div class="col-lg-1"></div>
                <div class="col-lg-6 big-img-heading">
                  <h1 style="font-size: 50px; color: white;">Make a global impact</h1>
                  <p style="font-size: 20px; width: 550px; color: white;">Create an online video course and earn money by teaching people around the world.</p>
                  <br><br>
                 
                  <div class="btn" data-vv-scope="form-3" >
    <button type="button" class="btn btn-danger" style="height: 60px; width: 280px; font-size: 16px;" @click="showModal3"><b style="font-weight: 550;">Become an instructor</b></button>
    <a-modal 
      style="padding:10px;"
      v-model="visible3"
      onOk="handleOk3"
    ><br>
      <template slot="footer">.
      </template>
      <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Instructor Sign Up</h2>
            <form style="margin-bottom: 0px;">
              <div class="form-group">
                <label for="firstName">Name</label>
                <input type="text" style="width: 300px;" v-model="i_user_signup.name" v-validate="'required'" id="instructor-signup-name" name="instructor-signup-name" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-3.instructor-signup-name') }" />
                <div v-if="errors.has('form-3.instructor-signup-name')" class="invalid-feedback">
                  {{ errors.first("form-3.instructor-signup-name") }}
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" style="width: 300px;" v-model="i_user_signup.email" v-validate="'required|email'" id="instructor-signup-email" name="instructor-signup-email" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-3.instructor-signup-email') }" />
                <div v-if="errors.has('form-3.instructor-signup-email')" class="invalid-feedback">
                  {{ errors.first("form-3.instructor-signup-email") }}
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" style="width: 300px;" v-model="i_user_signup.password" v-validate="{ required: true, min: 6 }" id="instructor-signup-password" name="instructor-signup-password" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-3.instructor-signup-password') }" />
                <div v-if="submitted_i_signup && errors.has('form-3.instructor-signup-password')" class="invalid-feedback">
                  {{ errors.first("form-3.instructor-signup-password") }}
                </div>
              </div><br>
              <a-button style="background-color: #d9534f; border: none; height: 40px; width: 150px;font-size: 17px; font-weight:500;" key="submit" type="primary" @click="handleSubmit3('form-3')">
                 Sign Up
              </a-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </a-modal>
  </div>
                </div>
            </div>
        </div><br><br><br><br>
        <div class="row">
            <div class="col-lg-12">
                <h1 class="discover">Discover Your Potential</h1>
            </div>
        </div>
    </div><br>
    <div class="container">
        <div class="row feature">
            <div class="col-lg-4">
                <h3>Earn money</h3><br>
                <p>Earn money every time a student purchases your course. Get paid monthly through PayPal or Payoneer, it’s your choice.</p>
            </div>
            <div class="col-lg-4">
                <h3>Inspire students</h3><br>
                <p>Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge.</p>
            </div>
            <div class="col-lg-4">
                <h3>Join our community</h3><br>
                <p>Take advantage of our active community of instructors to help you through your course creation process.</p>
            </div>
        </div>
    </div><br><br>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 appendix">
                <h1 style="font-size: 40px; margin-bottom: 0px;">Become an instructor today</h1><br>
                <h4 style="font-size: 21px; margin-top: 0px;">Join the world's largest online learning marketplace.</h4>
                <br><br>
              
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'create-course',
  data () {
      return {
          visible3: false,
          submitted_i_signup: false,
          i_user_signup: {
             name: "",
             email: "",
             password: ""
           }
      }
  },
  methods: {
      handleSubmit3(scope) {
      this.$validator.validateAll(scope).then(valid => {
        if (valid) {
          this.handleOk3();
          this.i_user_signup.email = '',
          this.i_user_signup.password = ''
          this.i_user_signup.name = ''
        }
      });
    },
     showModal3() {
      this.visible3 = true;
    },
    async handleOk3() {
      setTimeout(() => {
        this.visible3 = false;
      }, 500);
        let res = axios.post('http://localhost:8081/user/signup', {email: this.i_user_signup.email, password: this.i_user_signup.password, name: this.i_user_signup.name, role: 'instructor'});
          res.then(res => {
            let y = res
            y = ''
            console.log(y)
        this.$router.push({name: 'create-course'})
        }).catch(err => {
           console.log(err)
        }
        )
    }
  },
  beforeRouteEnter(to, from, next){
    next(vm => { 
        // access to component instance via `vm` 
        if(vm.$store.state.isInstructor){
            next('/');
        }else{
            next();
        }
    })
} 
}
</script>

<style scoped>
.main-page {
    margin-bottom: 10%;
}

.big-img {
    height: 450px;
    background: #505763 url(../assets/big-img.png) center top no-repeat;
    background-size: cover;
}

.big-img-heading {
    margin-top: 130px;
    color: white;
    padding-left: 5%;
}

.discover {
    font-size: 40px;
    text-align: center;
    font-weight: 300;
    padding-bottom: 0px;
}

.underline {
    text-align: center;
    font-weight: 100000;
    color: green;
}

.feature {
    text-align: center;
}

.col-lg-4 {
    padding: 3%;
}

.appendix {
    padding: 2%;
    text-align: center;
}

.get-started-button {
    width: 210px;
    height: 60px;
    font-size: 18px;
}


</style>
