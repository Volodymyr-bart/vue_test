<template>
  <div class="app">
    <h1>Page with posts</h1>
    <StandartButton @click="fetchPost">Get posts</StandartButton>
    <StandartButton @click="showDialog">Add post</StandartButton>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyDialog from "@/components/UI/MyDialog.vue";
import PostForm from "./../components/PostForm.vue";
import PostList from "./../components/PostList.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        // { id: 1, title: "JS", body: "Description posts" },
        // { id: 2, title: "Html", body: "Description posts" },
        // { id: 3, title: "Css", body: "Description posts" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPost() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = data;
      } catch (error) {
        alert("Error");
        console.log(error.message);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
