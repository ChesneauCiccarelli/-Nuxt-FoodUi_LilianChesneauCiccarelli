<script setup>
const route = useRoute();
</script>

<template>
  <h1>Recette : {{ route.params.id }}</h1>
</template>

<style></style>
