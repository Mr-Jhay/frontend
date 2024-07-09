import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';


import Teacher_homepage from './components/TEACHER/teacherhomepage.vue';

import Student_homepage from './components/STUDENTS/studenthomepage.vue';
import StudentDashboard from './components/STUDENTS/Sdashboard.vue';
import AddSubject from './components/STUDENTS/Saddsubject.vue';
import PendingExam from './components/STUDENTS/Spendingexam.vue';
import FinishedExam from './components/STUDENTS/Sfinishedexam.vue';
import StudentPerformance from './components/STUDENTS/Sperformance.vue';

import HomePageAdmin from './components/ADMIN/Ahomepage.vue';
import AdminDashboard from './components/ADMIN/ADashboard.vue';
import RegisterUser from './components/ADMIN/AregisterUser.vue';
import ManageUser from './components/ADMIN/AManageUser.vue';
import StrandSection from './components/ADMIN/AStrandSection.vue';

const routes = [
  { path: '/', redirect: '/app' }, // Redirect to login page by default
  { path: '/app', name: 'App', component: App },
 
  { path: '/admin', name: 'HomePageAdmin', component: HomePageAdmin },
  { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/manageUser', name: 'ManageUser', component: ManageUser },
  { path: '/strandSection', name: 'StrandSection', component: StrandSection },
  { path: '/register', name: 'RegisterUser', component: RegisterUser },
  { path: '/teacher', name: 'Thomepage', component: Teacher_homepage },

  { path: '/student', name: 'Student_homepage', component: Student_homepage},
  { path: '/studentdashboard', name: 'StudentDashboard', component: StudentDashboard},
  { path: '/addsubject', name: 'AddSubject', component: AddSubject},
  { path: '/pendingexam', name: 'PendingExam', component: PendingExam},
  { path: '/finishedexam', name: 'FinishedExam', component: FinishedExam},
  { path: '/myperformance', name: 'StudentPerformance', component: StudentPerformance},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
