<template>
  <div v-if="posts.length > 0">
    <h3>List Posts</h3>
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)" />
  </div>
  <h3 v-else>Post not find</h3>
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
