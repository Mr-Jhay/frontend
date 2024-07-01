<template>
    <div>
      <h2>User Profile</h2>
      <div v-if="isLoggedIn">
        <div v-if="userProfile">
          <p>User ID: {{ userProfile.id }}</p>
          <p>email: {{ userProfile.email }}</p>
          <!-- Display other user profile information as needed -->
        </div>
        <div v-else>
          <p>Loading user profile...</p>
        </div>
        <div v-if="error">
          <p>Error fetching user profile: {{ error }}</p>
        </div>
      </div>
      <div v-else>
        <p>User not logged in.</p>
        <!-- You might redirect to login page or display a login form here -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserProfileComponent',
  
    data() {
      return {
        isLoggedIn: false,
        userProfile: null,
        error: null,
        
      };
    },
  
    methods: {
      async fetchUserProfile() {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('Token not found');
          }
  
          const response = await axios.get('http://127.0.0.1:8000/api/userprofile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
  
          this.userProfile = response.data; // Assuming API returns user profile data
        } catch (error) {
          console.error('Error fetching user profile:', error);
          this.error = error.message; // Set error message to display in the template
        }
      }
    },
  
    mounted() {
      const token = localStorage.getItem('token');
      if (token) {
        this.isLoggedIn = true;
        this.fetchUserProfile(); // Fetch user profile if token exists
      }
    }
  };
  </script>
  