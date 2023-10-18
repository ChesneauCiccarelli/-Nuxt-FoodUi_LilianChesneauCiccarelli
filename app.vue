<script setup lang="ts">
useSeoMeta({
  title: "Food UI Application",
  ogTitle: "Food UI Application",
  description:
    "A test project created for an educational course for an MMI project. ",
  ogDescription:
    "A test project created for an educational course for an MMI project. ",
  ogImage: "/public/cover.jpg",
  twitterCard: "summary_large_image",
});

const store = useGlobalStore();
onMounted(() => {
  const cart = localStorage.getItem("cart");
  store.setCart(JSON.parse(cart));
});
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>
