<template>
  <div class="container">
    <AddUser v-on:user-added="handleUserAdded" />
    <UserList v-on:delete-user="handleUserDeleted" :users="users" />
  </div>
</template>

<script>
import AddUser from "./../components/User/AddUser.vue";
import UserList from "./../components/User/UserList.vue";
import userService from '../services/userService';

export default {
  name: "UserPage",
  data() {
    return {
      users: userService.getAllUsers(),
    };
  },
  props: {},

  components: { AddUser, UserList },

  methods: {
    handleUserAdded(user) {
      console.log("User added: ", user);
      userService.addUser(user);
      this.users = userService.getAllUsers();
    },
    handleUserDeleted(userId) {
      console.log("User deleted: ", userId);
      userService.deleteUser(userId);
      this.users = userService.getAllUsers();
    },
  },

  computed: {},
};
</script>
