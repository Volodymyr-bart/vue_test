<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/todo">To do</router-link>
      <router-link to="/add-user">Add User</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  display: flex;
  justify-content: center;
}

nav {
  padding: 30px;
  display: flex;
  text-align: center;
  gap: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
