<template>
  <!-- <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Choose your variant</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  
  </select> -->
</template>

<script>
export default {
  name: "MySelect",
  data() {
    return {};
  },
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },

  components: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },

  computed: {},

  watch: {},

  directives: {},

  filters: {},
};
</script>

<style scoped lang="scss"></style>
