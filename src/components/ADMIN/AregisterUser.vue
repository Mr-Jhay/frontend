<template>
    <div>
      <h4 style="background-color: lightgreen; border-top: 5px solid grey; border-bottom: 5px solid grey; padding: 10px;">
        REGISTER NEW USER
      </h4>
      <div class="register-ui">
        <div class="row mt-7">
          <div class="col-md-3">
            <label for="id" class="form-label">ID:</label>
            <input type="text" id="id" class="form-control custom-border" required>
          </div>
  
          <div class="col-md-2">
            <label for="lname" class="form-label">LAST NAME:</label>
            <input type="text" id="lname" class="form-control custom-border" required>
          </div>
  
          <div class="col-md-2">
            <label for="fname" class="form-label">FIRST NAME:</label>
            <input type="text" id="fname" class="form-control custom-border" required>
          </div>
  
          <div class="col-md-2">
            <label for="mname" class="form-label">MIDDLE NAME:</label>
            <input type="text" id="mname" class="form-control custom-border" required>
          </div>
  
          <div class="col-md-3">
            <label for="userType" class="form-label">SELECT USER TYPE:</label>
            <select v-model="selectedUserType" id="userType" class="form-control" @change="checkUserType">
              <option v-for="(type, index) in userTypes" :key="index" :value="type.value">{{ type.label }}</option>
            </select>
          </div>
        </div>
  
        <!-- Conditional Row  teacher-->
        <div v-if="selectedUserType === 'teacher'" class="row mt-7">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 d-flex align-items-end">
                <label for="email" class="form-label">EMAIL ADDRESS:</label>
              </div>
              <div class="col-md-8">
                <input type="text" id="email" class="form-control custom-border" required>
              </div>
            </div>
          </div>
  
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 d-flex align-items-end">
                <label for="position" class="form-label me-2">SELECT POSITION:</label>
              </div>
              <div class="col-md-8">
                <select v-model="selectedPosition" id="position" class="form-control">
                  <option v-for="(positions, index) in positions" :key="index" :value="positions.value">{{ positions.label }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Conditional Row studentsss-->
        <div v-if="selectedUserType === 'student'" class="row mt-7">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 d-flex align-items-end">
                <label for="email" class="form-label">EMAIL ADDRESS:</label>
              </div>
              <div class="col-md-8">
                <input type="text" id="email" class="form-control custom-border" required>
              </div>
            </div>
          </div>
  
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 d-flex align-items-end">
                <label for="mobileno" class="form-label">MOBILE NUMBER:</label>
              </div>
              <div class="col-md-8">
                <input type="text" id="mobileno" class="form-control custom-border" required>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row mt-7">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 d-flex align-items-end">
                <label for="password" class="form-label">PASSWORD:</label>
              </div>
              <div class="col-md-8">
                <input type="text" id="password" class="form-control" required>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 d-flex align-items-end">
                <label for="strand" class="form-label me-2">SELECT STRAND:</label>
              </div>
              <div class="col-md-8">
                <select v-model="selectedStrand" id="strand" class="form-control">
                  <option v-for="(strand, index) in strand" :key="index" :value="strand.value">{{ strand.label }}</option>
                </select>
              </div>
            </div>
          </div>
        </div><br>
        <v-btn color="green-darken-3" size="large" variant="flat">ADD NEW USER</v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterUser',
    data() {
      return {
        selectedUserType: '', // Holds the selected user type
        selectedPosition: '', // Holds the selected position for teachers
        userTypes: [
          { label: 'Teacher', value: 'teacher' },
          { label: 'Student', value: 'student' }
        ],
        positions: [
          { label: 'Head Teacher I', value: 'HeadTeacher1' },
          { label: 'Head Teacher II', value: 'HeadTeacher2' },
          { label: 'Master Teacher I', value: 'MasterTeacher1' },
          { label: 'Master Teacher II', value: 'MasterTeacher2' },
          { label: 'Teacher I', value: 'Teacher1' },
          { label: 'Teacher II', value: 'Teacher2' },
          { label: 'Teacher III', value: 'Teacher3' },
          { label: 'LSS Teacher II', value: 'Teacher2' },
          { label: 'Special Science Teacher I', value: 'SpecialDcienceTeacher1' },
          // Add more positions as needed
        ],
        strand: [
          { label: 'Accountancy, Business, and Management', value: 'ABM' },
          { label: 'Science, Technology, Engineering, and Mathematics', value: 'STEM' },
          { label: 'Humanities and Social Sciences', value: 'HUMMS' },
          { label: 'Technical Vocational Livelihood - Information and Communications Technology', value: 'TVL-ICT' },
          // Add more strand as needed
        ],
      };
    },
    methods: {
      checkUserType() {
        // Reset selected position when user type changes
        if (this.selectedUserType !== 'teacher') {
          this.selectedPosition = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-ui {
    border: 5px solid rgb(6, 146, 1); /* Add 'solid' for the border style */
    padding: 25px; /* Add padding for better visibility */
    border-radius: 10px;
    background-color: lightgreen;
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
  }
  
  </style>
  