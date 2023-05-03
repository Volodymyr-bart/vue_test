<template>
  <div>
    <h3>List Posts</h3>
    <PostItem v-for="post in posts" :post="post" />
  </div>
</template>
<script>
import PostItem from "./PostItem.vue";
export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style></style>
