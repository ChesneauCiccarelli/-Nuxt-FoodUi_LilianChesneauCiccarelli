<script setup>
const env = useRuntimeConfig();
const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

const recipesBestSellers = 4;
const gridPage = ref(1);
const menuItems = computed(() => {
  const recipesByPage = 6;
  return recipes.value.slice(
    recipesBestSellers,
    recipesBestSellers + recipesByPage * gridPage.value
  );
});

const moreRecipesToShow = computed(() => {
  return menuItems.value.length < recipes.value.length - recipesBestSellers;
});

const showMore = () => {
  gridPage.value++;
};
</script>

<template>
  <div class="grid">
    <MenuCard
      v-for="recipe in menuItems"
      :key="recipe.id"
      :title="recipe.recipe_name"
      :rating="recipe.rating"
      :price="recipe.price"
      :imgSrc="'/' + recipe.image_url"
      imgAlt="Image of a gyro sandwich"
      :href="`/recipes/${recipe.recipe_id}`"
      :cardId="fetchedCardId"
      :id="recipe.recipe_id"
    ></MenuCard>
  </div>
  <MyButton
    v-if="moreRecipesToShow"
    class="product__button"
    size="Small"
    variant="Rounded"
    showIcon
    @click="showMore"
  >
    See More Products
  </MyButton>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
}

.product__button {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: rem(50);
}
</style>
