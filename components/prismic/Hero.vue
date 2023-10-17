<script setup>
const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});
</script>

<template>
  <section class="flex">
    <div class="flex__left">
      <BikeElement />
      <div class="flex__left--title">
        <PrismicRichText :field="title" />
      </div>
      <PrismicRichText class="flex__left--content" :field="text" />
      <div class="heroActions">
        <div v-for="button in buttons">
          <MyButton
            v-if="button.button_type === 'default'"
            :href="button.button_link.url"
            :variant="button.button_type"
          >
            {{ button.button_label }}
          </MyButton>
          <div class="flex" v-else>
            <IconsSet name="Play" size="Medium" variant="White"></IconsSet>
            <p>{{ button.button_label }}</p>
          </div>
        </div>
      </div>
    </div>

    <ArrowSVG class="svg" />

    <div class="flex__right">
      <BestSellersLayout />
    </div>

    <div class="fade"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: rem(90);
  margin-top: rem(40);
}
.flex {
  align-items: center;
  display: flex;
  position: relative;
}
.flex__left {
  font-family: Helvetica, sans-serif;
  font-size: $medium-font-size;
  font-weight: 700;

  &--title {
    font-family: Helvetica, sans-serif;
    font-size: $giant-font-size;
    font-weight: 700;
  }

  &--content {
    margin-bottom: rem(90);
    margin-top: rem(50);

    font-family: Helvetica, sans-serif;
    font-size: $regular-font-size;
    font-weight: 500;
  }
}
.flex__right {
  margin-top: 4%;
  width: 100%;
}

.heroActions {
  align-items: center;
  display: flex;
  gap: rem(25);
}

.svg {
  width: 50%;
  z-index: -1;
}

strong {
  color: $primary-color;
}

.fade {
  background-image: linear-gradient(180deg, #d9d9d9 0%, #d9d9d900 100%);
  border-radius: rem(30);
  height: 837px;
  position: absolute;
  top: 0;
  right: 0;
  width: 445px;
  z-index: -1;
}
</style>
