<template>
  <div>
    <form class="form" @submit.prevent>
      <h4>New post</h4>
      <StandartInput v-model="post.title" type="text" placeholder="Name post" />
      <StandartInput
        v-model="post.body"
        type="text"
        placeholder="Description" />
      <StandartButton @click="createPost">Add post</StandartButton>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: { title: "", body: "" },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

</style>
