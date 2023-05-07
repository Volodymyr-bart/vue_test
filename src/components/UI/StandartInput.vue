<template>
  <input
    class="input"
    :value="modelValue"
    @input="updateInput"
    type="text"
    placeholder="Name post" />
</template>

<script>
export default {
  name: "StandartInput",
  data() {
    return {};
  },
  props: { modelValue: [String, Number] },

  components: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },

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
