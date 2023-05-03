<template>
  <input
    v-model="post.title"
    class="input"
    type="text"
    placeholder="Name post" />
</template>

<script>
export default {
  name: "StandartInput",
  data() {
    return {};
  },
  props: {modelValue},

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
.input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
</style>
