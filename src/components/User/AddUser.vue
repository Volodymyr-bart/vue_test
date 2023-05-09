<template>
  <div>
    <h2>Register User</h2>
    <form class="form" @submit.prevent="submitForm">
      <div class="form_container">
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
      </div>
      <button class="form_btn" type="submit">Submit</button>
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
      this.user.userId = uuidv4(); // Генеруємо новий id
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
<style scoped lang="scss">
.form {
  margin-top: 20px;
  &_container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
