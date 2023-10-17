<script setup>
defineProps({
  title: String,
  description: String,
  iconName: String,
  iconVariant: String,
  iconSize: String,
  information: Array,
});
</script>

<template>
  <div v-for="item in information" class="card">
    <div v-if="item.information_icon === 'clock'">
      <IconsSet name="Clock" variant="Primary" size="Small"></IconsSet>
    </div>
    <div v-if="item.information_icon === 'localisation'">
      <IconsSet name="Localisation" variant="Primary" size="Small"></IconsSet>
    </div>
    <div v-if="item.information_icon === 'phone'">
      <IconsSet name="Phone" variant="Primary" size="Small"></IconsSet>
    </div>
    <div class="card__title">
      <PrismicRichText :field="item.information_title" />
    </div>
    <div class="card__description">
      <PrismicRichText :field="item.information_text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: rem(15);
  margin: 0 auto;
  padding: rem(20) rem(50);
  width: 400px;

  font-family: Helvetica, sans-serif;
  text-align: center;

  &__title {
    font-size: $regular-font-size;
    font-weight: 600;
  }

  &__description {
    font-size: $small-font-size;
    font-weight: 400;
    margin-top: -10px;
  }

  &:nth-child(even) {
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }
}
</style>
