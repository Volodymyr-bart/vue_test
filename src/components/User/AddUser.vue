<template>
  <div>
    <h2>Add User</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="user.phone" required />
      </div>
      <!-- <div>
        <label for="website">Website:</label>
        <input type="url" id="website" v-model="user.website" required>
      </div> -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddUser",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        userId: "",
      },
    };
  },
  methods: {
    submitForm() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      this.user.userId = uuidv4(); // Генеруємо новий id
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
      this.$emit("user-added", this.user);
      this.user = {
        name: "",
        email: "",
        phone: "",
        userId: "",
      };
    },
  },
};
</script>
