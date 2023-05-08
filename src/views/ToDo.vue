<template>
  <div>
    <h1>My To-Do List</h1>
    <add-todo class="add-todo" @add-todo="addTodo"></add-todo>
    <filter-todos
      class="filter-todos"
      @filter-todos="filterTodos"></filter-todos>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.title }} -
        {{ todo.completed ? "Completed" : "Not Completed" }} - User
        {{ todo.userId }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodos from "@/components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    FilterTodos,
  },
  data() {
    return {
      todos: [],
      titleFilter: "",
      userIdFilter: null,
      completedFilter: false,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.todos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    filterTodos(filter) {
      this.titleFilter = filter.title || "";
      this.userIdFilter = filter.userId || null;
      this.completedFilter = filter.completed || false;
    },
  },
  computed: {
    filteredTodos() {
      let filteredTodos = this.todos;
      if (this.titleFilter) {
        filteredTodos = filteredTodos.filter((todo) =>
          todo.title.toLowerCase().includes(this.titleFilter.toLowerCase())
        );
      }
      if (this.userIdFilter !== null && this.userIdFilter !== undefined) {
        filteredTodos = filteredTodos.filter(
          (todo) => todo.userId === this.userIdFilter
        );
      }
      if (this.completedFilter) {
        filteredTodos = filteredTodos.filter(
          (todo) => todo.completed === this.completedFilter
        );
      }
      return filteredTodos;
    },
  },
};
</script>

<style>
/* стилі для заголовка */
h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: black;
}

/* стилі для списку завдань */
ul {
  list-style: none;
  padding: 0;
}

/* стилі для кожного завдання */
li {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background-color: white;
}

/* стилі для кожного завдання, яке виконане */
li.completed {
  background-color: #c7ecc7;
}

/* стилі для кнопки додавання завдання */
.add-todo {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

/* стилі для фільтрів */
.filter-todos {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

/* стилі для полів фільтрів */
.filter-todos input {
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

/* стилі для кнопки фільтрації */
.filter-todos button {
  background-color: #2196f3;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

/* стилі для повідомлення про немає завдань */
.no-todos {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
}
</style>
