<template>
  <div>
    <h2>Filter To-Do Items</h2>
    <div>
      <label>Title:</label>
      <input type="text" v-model="titleFilter">
    </div>
    <div>
      <label>User ID:</label>
      <input type="number" v-model.number="userIdFilter">
    </div>
    <div>
      <label>Completed:</label>
      <input type="checkbox" v-model="completedFilter">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterTodos',
  data() {
    return {
      titleFilter: '',
      userIdFilter: null,
      completedFilter: false
    }
  },
  watch: {
    titleFilter() {
      this.$emit('filter-todos', {
        title: this.titleFilter,
        userId: this.userIdFilter,
        completed: this.completedFilter
      });
    },
    userIdFilter() {
      this.$emit('filter-todos', {
        title: this.titleFilter,
        userId: this.userIdFilter,
        completed: this.completedFilter
      });
    },
    completedFilter() {
      this.$emit('filter-todos', {
        title: this.titleFilter,
        userId: this.userIdFilter,
        completed: this.completedFilter
      });
    }
  }
}
</script>
