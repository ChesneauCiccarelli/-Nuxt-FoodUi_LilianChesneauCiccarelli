<script setup>
const props = defineProps({
  error: Object,
});
</script>

<template>
  <h1>Error Page</h1>
  {{ error }}
</template>

<style lang="scss" scoped>
h1 {
  color: $primary-color;
  font-size: 2rem;
}
</style>
