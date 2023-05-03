<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostForm from "./../components/PostForm.vue";
import PostList from "./../components/PostList.vue";

export default {
  name: "HomeView",
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JS", body: "Description posts" },
        { id: 2, title: "Html", body: "Description posts" },
        { id: 3, title: "Css", body: "Description posts" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
