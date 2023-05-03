<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "StandartButton",
  data() {
    return {};
  },
  props: {},

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
.button {
  font-size: 16px;
  padding: 10px 15px;
  background-color: #fff;
  color: teal;
  border: 1px solid teal;
}
</style>
