<script setup>
const route = useRoute();

const recipe = ref({});
const getRecipeByIdAxios = async (id) => {
  const response = await client.get(`/recipes/${id}`);
  return response.data;
};

onMounted(() => {
  const id = route.params.id;
  getRecipeByIdAxios(id).then((data) => {
    recipe.value = data;
  });
});
</script>

<template>
  <main>
    <div class="card">
      <h1 class="card__title">{{ recipe.recipe_name }}</h1>
      <img :src="'/' + recipe.image_url" alt="Recipe Image" />
      <p>{{ recipe.recipe_description }}</p>
      <div class="card__infos">
        <div>
          <p>Rating</p>
          <p>{{ recipe.rating }}</p>
        </div>
        <div>
          <p>Price</p>
          <p>${{ recipe.price }}</p>
        </div>
      </div>

      <NuxtLink to="/" class="RouterLink">
        <MyButton size="Small" variant="Rounded">
          Retour à l'accueuil
        </MyButton>
      </NuxtLink>
    </div>
    <iframe
      src="https://giphy.com/embed/97ZWlB7ENlalq"
      width="480"
      height="294"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </main>
</template>

<style lang="scss" scoped>
.RouterLink {
  color: $white;

  font-family: Helvetica, sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
}

main {
  align-items: center;
  display: flex;
  gap: rem(100);
  justify-content: center;
}

.card {
  background: $secondary-color;
  border-radius: 15px;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: rem(20);
  height: fit-content;
  margin-top: rem(100);
  padding: rem(50);
  width: 500px;

  font-family: Helvetica, sans-serif;
  font-size: $medium-font-size;
  font-weight: 500;
  text-align: center;

  &__title {
    color: $primary-color;

    font-size: $big-font-size;
    font-weight: 700;
  }

  &__infos {
    display: flex;
    justify-content: space-around;

    font-size: $regular-font-size;
    font-weight: 700;
  }
}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 16px;
}

.card button {
  padding: 8px 25px;
  display: block;
  margin: auto;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  background: #6b64f3;
  color: white;
  font-weight: 600;
}
</style>
