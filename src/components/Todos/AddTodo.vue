<template>
  <div>
    <h2>Add To-Do Item</h2>
    <form class="form" @submit.prevent="addTodo">
      <div class="form_container">
        <div class="form_container_item">
          <label>Title:</label>
          <input type="text" v-model="title" />
        </div>
        <div class="form_container_item">
          <label>Completed:</label>
          <input type="checkbox" v-model="completed" />
        </div>
        <div class="form_container_item">
          <label>User ID:</label>
          <input type="number" v-model="userId" />
        </div>
      </div>
      <div>
        <button type="submit">Add To-Do Item</button>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      completed: false,

      userId: 0,
    };
  },
  methods: {
    addTodo() {
      const todo = {
        title: this.title,
        completed: this.completed,
        id: uuidv4(),
        userId: this.userId,
      };
      this.$emit("add-todo", todo);
      this.title = "";
      this.completed = false;
      this.userId = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  &_container {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
  }
}
</style>
