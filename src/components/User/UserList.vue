<template>
  <div>
    <h2>User List</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
        <span>{{ user.phone }}</span>
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      this.users = users;
    },
    deleteUser(userId) {
      this.$emit("delete-user", userId);
      this.loadUsers();
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>
