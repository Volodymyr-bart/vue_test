<template>
  <div class="post">
    <div>
      <strong>Name:</strong>
      {{ post.title }}
    </div>
    <div>Description:{{ post.body }}</div>
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

  components: {},

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
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>
