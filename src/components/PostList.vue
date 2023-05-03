<template>
  <div class="post" v-for="post in posts">
    <div>
      <strong>Name:</strong>
      {{ post.title }}
    </div>
    <div>Description:{{ post.body }}</div>
  </div>
</template>
<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },  
};
</script>
<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>
