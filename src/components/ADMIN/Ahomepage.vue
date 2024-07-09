<template>
  <v-app>
    <v-card>
      <v-app-bar color="#AEE9C4" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-img :src="imageSrc" alt="Toolbar Image" max-height="100" max-width="100" class="mr-3"></v-img>
        </v-toolbar-title>

        <h4 style="margin-right: 20px; font-family: 'Courier New'; font-size: 25px;"><b>WELCOME ADMIN !</b></h4>

        <v-btn icon @click="toggleOverlay">
          <v-icon style="font-size: 50px;">mdi-account-tie-hat</v-icon>
        </v-btn>

        <v-overlay v-model="overlay" absolute class="d-flex align-center justify-center">
          <v-card width="400" class="pa-4">
            <v-card-title class="text-h5">Admin Profile</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Name: Admin</v-list-item-title>
                    <v-list-item-subtitle>Email: admin@gmail.com</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="success" @click="overlay = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-overlay>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary style="background-color: #AEE9C4;">
        <v-list>
          <router-link v-for="(item, index) in items" :key="index" :to="item.path" v-slot="{ navigate }">
            <div class="item-box" @click="selectItem(item, navigate)">
              <v-list>
                <v-list-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-icon>
                <v-list-title>{{ item.title }}</v-list-title>
              </v-list>
            </div>
          </router-link>
          <div class="logOut" @click="logout">
            <v-icon left>mdi-send</v-icon>LOG OUT
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 600px;">
        <v-card-text>
          <!-- Dynamic component rendering based on selected item -->
          <router-view></router-view>
        </v-card-text>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'HomePageAdmin',
  data() {
    return {
      imageSrc: require('@/assets/examlogo.png'),
      drawer: false,
      overlay: false,
      items: [
        { title: 'Admin Dashboard', path: '/admindashboard', icon: 'mdi-view-dashboard' },
        { title: 'Register User', path: '/register', icon: 'mdi-account-plus' },
        { title: 'Manage User', path: '/manageUser', icon: 'mdi-account-edit' },
        { title: 'Strand Section', path: '/strandSection', icon: 'mdi-book' },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleOverlay() {
      this.overlay = !this.overlay;
    },
    selectItem(item, navigate) {
      navigate();
    },
    logout() {
      // Logic for logging out
    },
  },
  beforeMount() {
    this.$router.push('/admindashboard');
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.item-box {
  border: 2px solid green;
  border-radius: 15px;
  max-width: 200px;
  margin-left: 25px;
  padding: 10px;
  background-color: whitesmoke;
  color: black;
  margin-top: 10px;
}
.logOut {
  border: 4px solid green;
  border-radius: 15px;
  max-width: 200px;
  margin-left: 25px;
  padding: 15px;
  margin-top: 120px;
  background-color: whitesmoke;
}
.item-box:hover {
  background-color: green;
  border: 2px solid rgb(239, 239, 239);
}
.logOut:hover {
  background-color: green;
  border: 4px solid rgb(239, 239, 239);
}
</style>