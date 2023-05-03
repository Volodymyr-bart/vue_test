<template>
  <div>
    <form class="form" @submit.prevent>
      <h4>New post</h4>
      <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Name post" />
      <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Description" />
      <button class="button" @click="createPost">Add post</button>
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
.input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
.button {
  padding: 10px 15px;
  align-self: flex-end;
  background-color: none;
  color: teal;
  border: 1px solid teal;
}
</style>
