Posts/
<template>
  <div class="app">
    <h1>Page with posts</h1>
    <div class="app__btns">
      <StandartButton @click="showDialog">Add post</StandartButton>
      <add-user @add-user="addUser"></add-user>
      <MySelectNew
        :value="selectedSort"
        :options="sortOptions"
        @input="selectedSort = $event" />
      <!-- <MySelect v-model="selectedSort" :options="sortOptions" /> -->
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList :posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading ....</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import MyDialog from "@/components/UI/MyDialog.vue";
import PostForm from "./../components/Posts/PostForm.vue";
import PostList from "./../components/Posts/PostList.vue";
import AddUser from "@/components/User/AddUser.vue";

export default {
  name: "HomeView",
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "For titile" },
        { value: "body", name: "For body" },
      ],
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
        this.isPostLoading = true;
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = data;
      } catch (error) {
        alert("Error");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;

  &__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
