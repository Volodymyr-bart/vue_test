<template>
  <select :value="modelValue" @input="changeOption($event.target.value)">
    <option disabled value="">Choose your variant</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelectNew",
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
  methods: {
    changeOption(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped lang="scss"></style>
