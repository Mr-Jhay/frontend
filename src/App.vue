<template>
  <div>
    <!-- Conditional rendering based on isAdmin, isTeacher, and isStudent -->
    <HomePageAdmin v-if="isAdmin" />
    <Teacher_homepage v-else-if="isTeacher" />
    <Student_homepage v-else-if="isStudent" />
    <div class="container" v-else>
      <!-- Login form -->
      <div class="row">
        <div class="col-md-4">
          <img src="./assets/examlogo.png" class="img-fluid" alt="Your Image">
        </div>
        <div class="col-md-8">
          <div class="signup-card">
            <center><h3>LOG IN</h3></center>
            <br>
            <form @submit.prevent="handleSubmit">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="background-color: transparent; border-right: 0;">
                    <i class="fas fa-envelope fa-lg mr-2"></i>
                    <strong style="font-family: 'Arial', sans-serif;">EMAIL :</strong>
                  </span>
                </div>
                <input type="email" class="form-control" placeholder="Enter email" v-model="email" required>
              </div>
              
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" style="background-color: transparent; border-right: 0;">
                    <i class="fas fa-lock fa-lg mr-2"></i>
                    <strong style="font-family: 'Arial', sans-serif;">PASSWORD :</strong>
                  </span>
                </div>
                <input :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Enter password" v-model="password" required>
                <span class="input-group-text password-toggle" id="password-addon-1" @click="togglePassword">
                  <i :class="passwordFieldIcon"></i>
                </span>
              </div>
              <br>
              <center>
                <div class="col-6">
                  <button type="submit" class="btn btn-custom">
                    <i class="bi bi-send mr-2"></i>LOG IN
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageAdmin from './components/ADMIN/Ahomepage.vue';
import Teacher_homepage from './components/TEACHER/teacherhomepage.vue';
import Student_homepage from './components/STUDENTS/studenthomepage.vue';

export default {
  name: 'App',
  components: {
    HomePageAdmin,
    Teacher_homepage,
    Student_homepage,
  },
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      isAdmin: false,
      isTeacher: false,
      isStudent: false,
    };
  },
  computed: {
    passwordFieldIcon() {
      return this.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
  },
  methods: {
    handleSubmit() {
      if (this.email === 'admin@gmail.com' && this.password === '12345678') {
        this.isAdmin = true;
        console.log('Admin login successful');
        this.$router.push('/adminpage');
      } else if (this.email === 'teacher@gmail.com' && this.password === '12345678') {
        this.isTeacher = true;
        console.log('Teacher login successful');
        this.$router.push('/teacher');
      } else if (this.email === 'student@gmail.com' && this.password === '12345678') {
        this.isStudent = true;
        console.log('Student login successful');
        this.$router.push('/student');
      } else {
        console.log('Form submitted with email:', this.email, 'and password:', this.password);
        // Optionally, show an error message or handle other logic for failed login attempt
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.container {
  margin: 100px;
}
.signup-card {
  border: 4px solid green;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.btn-custom {
  background-color: #28a745;
  border-color: black;
  border-width: 3px;
  outline-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 200px;
  height: 44px;
  padding: 5px;
}

.btn-custom:hover {
  background-color: #218838;
}

h3 {
  font-family: fantasy;
  font-size: 30px;
  font-weight: 300;
}

.password-toggle {
  cursor: pointer;
}
</style>
