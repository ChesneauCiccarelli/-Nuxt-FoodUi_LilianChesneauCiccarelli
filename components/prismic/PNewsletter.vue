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
</script>

<template>
  <section class="flex relative">
    <div class="absolute">
      <PrismicImage
        class="image"
        :field="home.data.newsletter_image"
      ></PrismicImage>
    </div>
    <MyNewsletter />
  </section>
</template>

<style lang="scss" scoped>
.flex {
  align-items: center;
  background-color: $black;
  border-radius: 50px;
  color: $white;
  display: flex;
  margin: rem(75) 0;
  padding: rem(105) rem(75);
}

.relative {
  position: relative;
}
.absolute {
  position: absolute;
  bottom: -170px;
  left: -10px;
}

.image {
  scale: 1.2;
}
</style>
