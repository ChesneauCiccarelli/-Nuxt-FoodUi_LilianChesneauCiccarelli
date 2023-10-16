<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("Homepage", () =>
  client.getSingle("homepage")
);
if (!home.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}
console.log(home);
</script>

<template>
  <section>
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_text"
      :buttons="home.data.hero_buttons"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 0px 100px;
}
</style>
