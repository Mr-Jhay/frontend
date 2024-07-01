<template>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <div>
            <h1>Login</h1>
            <hr/>
          </div>
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" v-model="email"/>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password"/>
            </div>
            <div class="my-3">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.email,
            password: this.password
          });
          console.log(response.data);
  
          // Save the token to local storage
          localStorage.setItem('token', response.data.token);
  
          // Navigate to the user profile page
          router.push('/RegistrationForm');
        } catch (error) {
          console.error('Login failed:', error);
          // Handle error, e.g., show error message
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  