<template>
  <div>
    <h2>User Profile</h2>
    <div v-if="isLoggedIn">
      <div v-if="userProfile">
        <p>User ID: {{ userProfile.id }}</p>
        <p>Email: {{ userProfile.email }}</p>
        <!-- Display other user profile information as needed -->
      </div>
      <div v-else>
        <p>Loading user profile...</p>
      </div>
      <div v-if="error">
        <p>Error fetching user profile: {{ error }}</p>
      </div>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>User not logged in.</p>
      <!-- You might redirect to login page or display a login form here -->
    </div>

    <!-- New User Form -->
    <h2>Add New User</h2>
    
    <input type="text" v-model="newUser.name" placeholder="Name">
    <input type="text" v-model="newUser.email" placeholder="Email">
    <input type="password" v-model="newUser.password" placeholder="Password">
    
    <button @click="addNewUser">Add User</button>
    <div v-if="addUserError">
      <p>{{ addUserError }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'UserProfile',
  data() {
    return {
      isLoggedIn: false,
      userProfile: null,
      error: null,
      newUser: {
        name:'',
        email: '',
        password: ''
      },
      addUserError: null
    };
  },
  created() {
    this.checkLoginStatus();
    if (this.isLoggedIn) {
      this.fetchUserProfile();
    }
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('token');
      this.isLoggedIn = !!token;
    },
    async fetchUserProfile() {
      try {
        const response = await axios.get('http://localhost:8000/api/userprofile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.userProfile = response.data.data;
      } catch (error) {
        this.error = error.response && error.response.data.message ? error.response.data.message : 'Failed to fetch user profile';
      }
    },
    async logout() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/api/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data.message);
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.userProfile = null;
        router.push('/'); // Redirect to home or login page after logout
      } catch (error) {
        console.error('Logout failed:', error);
        // Optionally, you can reset user state and handle error display
      }
    },
    async addNewUser() {
      try {
        const response = await axios.post('http://localhost:8000/api/register', {
          name: this.newUser.name,
          email: this.newUser.email,
          password: this.newUser.password
        });
        console.log('New user added:', response.data.message);
        // Optionally handle success, clear form fields, etc.
      } catch (error) {
        this.addUserError = error.response && error.response.data.message ? error.response.data.message : 'Failed to add new user';
      }
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
