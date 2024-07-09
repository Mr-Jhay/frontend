<template>
  <div>
    <h4 class="header">
      MANAGE USER
    </h4>
    <v-container>
      <v-row align="end">
        <v-col cols="4" class="d-flex align-items-end">
          <label for="userType" class="form-label me-2">SELECT USER TYPE:</label>
          <v-select v-model="selectedUserType" :items="userTypes" outlined dense hide-details single-line class="user-type-select"></v-select>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
            variant="solo-filled" flat hide-details single-line class="search-field"></v-text-field>
        </v-col>
      </v-row>

      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :search="search"
        :items="filteredItems"
        :server-items-length="totalItems"
        :loading="loading"
        :items-per-page-options="[5, 10, 15]"
        class="elevation-1"
        @update:options="loadItems"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon @click="editUser(item)" class="custom-icon">mdi-account-edit</v-icon>
          <v-icon @click="removeUser(item)" class="custom-icon">mdi-account-remove</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
const users = [
  { lrn: '12345', username: 'user1', sex: 'male', email: 'user1@example.com', usertype: 'student', dateregistered: '2023-01-01' },
  { lrn: '67890', username: 'user2', sex: 'female', email: 'user2@example.com', usertype: 'teacher', dateregistered: '2023-02-01' },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        let items = users.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order === 'desc' ? -1 : 1;
          items.sort((a, b) => sortOrder * (a[sortKey] > b[sortKey] ? 1 : -1));
        }

        const paginated = items.slice(start, end);
        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  name: 'ManageUser',
  data() {
    return {
      search: '',
      selectedUserType: '', // Initially selected user type
      userTypes: ['student', 'teacher'], // Array of user types to select
      itemsPerPage: 5,
      headers: [
        { title: 'LRN', align: 'center', sortable: false, key: 'lrn' },
        { title: 'Username', key: 'username', align: 'center' },
        { title: 'Sex', key: 'sex', align: 'center' },
        { title: 'Email', key: 'email', align: 'center' },
        { title: 'User Type', key: 'usertype', align: 'center' },
        { title: 'Date Registered', key: 'dateregistered', align: 'center' },
        { title: 'Actions', key: 'actions', align: 'center', sortable: false },
      ],
      serverItems: [],
      loading: true,
      totalItems: 0,
    };
  },
  computed: {
    filteredItems() {
      return this.serverItems.filter(item => {
        return (
          (!this.selectedUserType || item.usertype === this.selectedUserType) &&
          (this.search === '' || item.username.toLowerCase().includes(this.search.toLowerCase()))
        );
      });
    },
  },
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
    editUser(item) {
      // Add your edit user logic here
      console.log('Edit user:', item);
    },
    removeUser(item) {
      // Add your remove user logic here
      console.log('Remove user:', item);
    },
  },
};
</script>

<style scoped>
.header {
  background-color: lightgreen;
  border-top: 5px solid grey;
  border-bottom: 5px solid grey;
  padding: 10px;
  font-family: Verdana;
}
.search-field {
  border: 1px solid black;
  margin-bottom: 10px;
}
.user-type-select {
  margin-right: 10px;
  margin-bottom: 20px;

}
.custom-icon {
  cursor: pointer;
  color: black;
  font-size: 25px;
  padding-right: 35px;
}
.custom-icon:hover {
  color: rgb(18, 211, 173);
  font-size: 30px;
}
</style>
