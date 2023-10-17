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
defineProps({
  mini: Boolean,
});
</script>

<template>
  <div v-if="mini" class="newsletterMini">
    <form action="submit" class="newsletterMini__form">
      <div class="newsletterMini__form--container">
        <input
          class="newsletterMini__form--input"
          placeholder="Enter your email ....."
          type="email"
        />
        <button class="newsletterMini__form--btn" type="button">
          <IconsSet name="ArrowRight" variant="Primary" size="Small" />
        </button>
      </div>
    </form>
  </div>

  <div v-else class="newsletter">
    <PrismicRichText
      class="newsletter__title"
      :field="home.data.newsletter_title"
    ></PrismicRichText>
    <PrismicRichText
      class="newsletter__text"
      :field="home.data.newsletter_text"
    ></PrismicRichText>
    <form action="submit" class="newsletter__form">
      <div class="newsletter__form--container">
        <input
          class="newsletter__form--input"
          placeholder="Type your email ....."
          type="email"
        />
        <button class="newsletter__form--btn" type="button">Subscribe</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.newsletter {
  display: flex;
  flex-direction: column;
  gap: rem(15);
  transform: translateX(100%);
  width: 50%;

  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;

  &__title {
    font-size: $big-font-size;
    font-weight: 700;
  }

  &__form {
    background-color: $white;
    border-radius: 15px;
    display: flex;
    padding: rem(10);

    &--container {
      background-color: $white;
      display: flex;
      width: 100%;
    }

    &--input {
      border: none;
      border: none;
      outline: none;
      padding-left: rem(30);
      width: 100%;
    }

    &--btn {
      background-color: $primary-color;
      border: none;
      border-radius: 15px;
      color: $white;
      padding: rem(14) rem(24);

      font-size: $regular-font-size;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }
  }
}

.newsletterMini {
  display: flex;
  flex-direction: column;

  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;

  &__title {
    font-size: $big-font-size;
    font-weight: 700;
  }

  &__form {
    background-color: $white;
    border-radius: 50px;
    display: flex;
    padding: rem(10);

    &--container {
      background-color: $white;
      display: flex;
      width: 100%;
    }

    &--input {
      border: none;
      border: none;
      outline: none;
      width: 100%;
    }

    &--btn {
      background-color: $white;
      border: none;
    }
  }
}
</style>
