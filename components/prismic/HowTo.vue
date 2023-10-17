<script setup>
defineProps({
  title: String,
  description: String,
  imgSrc: String,
  imgAlt: String,
  reverse: Boolean,

  items: Array,
});
</script>

<template>
  <div v-for="(item, index) in items" :key="index">
    <div :class="'itemCard itemCard_' + index">
      <PrismicImage
        class="itemCard__img"
        :field="item.how_to_image"
      ></PrismicImage>
      <div>
        <PrismicRichText class="itemCard__title" :field="item.how_to_title" />
        <PrismicRichText
          class="itemCard__description"
          :field="item.how_to_text"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.itemCard {
  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 500;
  width: 400px;

  &__img {
    height: 220px;
    margin-bottom: rem(45);
  }

  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
    margin-bottom: rem(25);
    text-transform: uppercase;
  }

  &_0 {
    text-align: left;
  }

  &_1 {
    display: flex;
    flex-direction: column-reverse;
    gap: rem(30);
    text-align: center;
  }

  &_2 {
    text-align: right;
  }
}
</style>
