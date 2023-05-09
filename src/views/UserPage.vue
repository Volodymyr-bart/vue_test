<template>
  <div class="container">
    <AddUser v-on:user-added="handleUserAdded" />
    <UserList v-on:delete-user="handleUserDeleted" @load-users="loadUsers" />
  </div>
</template>

<script>
import AddUser from "./../components/User/AddUser.vue";
import UserList from "./../components/User/UserList.vue";
export default {
  name: "UserPage",
  data() {
    return {
      users: [],
    };
  },
  props: {},

  components: { AddUser, UserList },

  methods: {
    handleUserAdded(user) {
      console.log("User added: ", user);
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      this.loadUsers(); // оновити список користувачів
    },
    handleUserDeleted(userId) {
      console.log("User deleted: ", userId);
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users = users.filter((user) => user.id !== userId);
      localStorage.setItem("users", JSON.stringify(users));
      this.loadUsers(); // оновити список користувачів
    },
    loadUsers() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      this.users = users;
    },
  },

  computed: {},
};
</script>
