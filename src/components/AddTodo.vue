<template>
  <div>
    <h2>Add To-Do Item</h2>
    <form @submit.prevent="addTodo">
      <div>
        <label>Title:</label>
        <input type="text" v-model="title">
      </div>
      <div>
        <label>Completed:</label>
        <input type="checkbox" v-model="completed">
      </div>
      <div>
        <label>ID:</label>
        <input type="number" v-model="id">
      </div>
      <div>
        <label>User ID:</label>
        <input type="number" v-model="userId">
      </div>
      <div>
        <button type="submit">Add To-Do Item</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
      completed: false,
      id: 0,
      userId: 0
    }
  },
  methods: {
    addTodo() {
      const todo = {
        title: this.title,
        completed: this.completed,
        id: this.id,
        userId: this.userId
      };
      this.$emit('add-todo', todo);
      this.title = '';
      this.completed = false;
      this.id = 0;
      this.userId = 0;
    }
  }
}
</script>
