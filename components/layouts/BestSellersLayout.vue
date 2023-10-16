<script setup>
const env = useRuntimeConfig();
const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

const recipesBestSellers = 4;
const bestSellers = computed(() => {
  // return recipes.value.filter((item) => item.image_url.toLowerCase().includes('.png'))
  return recipes.value.slice(0, recipesBestSellers);
});
</script>

<template>
  <div class="grid">
    <MiniCard
      v-for="recipe in bestSellers"
      :key="recipe.id"
      :title="recipe.recipe_name"
      :description="recipe.recipe_description"
      :price="recipe.price"
      :imgSrc="'/' + recipe.image_url"
      imgAlt="Image of a gyro sandwich"
    ></MiniCard>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
