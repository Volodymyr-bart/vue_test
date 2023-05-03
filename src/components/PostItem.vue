<template>
  <div class="post">
    <div>
      <strong>Name:</strong>
      {{ post.title }}
    </div>
    <div>Description:{{ post.body }}</div>
    <StandartButton>Delete</StandartButton>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  data() {
    return {};
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {},

  computed: {},

  watch: {},

  directives: {},

  filters: {},
};
</script>

<style scoped lang="scss">
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>
