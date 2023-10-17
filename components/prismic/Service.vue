<script setup>
const props = defineProps({
  title: String,
  description: String,
  iconName: String,
  iconVariant: String,
  iconSize: String,
  styleCard: String,
  services: Array,
});

const className = computed(() => ({
  " -neuOver": props.styleCard === "Neu-Over",
  " -neuPressed": props.styleCard === "Neu-Pressed",
}));
</script>

<template>
  <div
    v-for="(item, index) in services"
    :key="index"
    :class="'card card_' + index"
  >
    <div v-if="item.service_icon === 'food_2'">
      <IconsSet name="Food_2" variant="Secondary" size="Medium"></IconsSet>
    </div>
    <div v-if="item.service_icon === 'food_1'">
      <IconsSet name="Food_1" variant="Secondary" size="Medium"></IconsSet>
    </div>
    <div v-if="item.service_icon === 'delivery'">
      <IconsSet name="Delivery" variant="Secondary" size="Medium"></IconsSet>
    </div>
    <div class="card__title">
      <PrismicRichText :field="item.service_title" />
    </div>
    <div class="card__description">
      <PrismicRichText :field="item.service_text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  align-items: center;
  background: $white;
  border-radius: 35px;
  border: 1px solid #b6b6b6;
  display: flex;
  flex-direction: column;
  gap: rem(42);
  padding: rem(103) rem(52);

  font-family: Helvetica, sans-serif;
  text-align: center;

  &_1 {
    box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.15);
  }

  &__title {
    font-size: $medium-font-size;
    font-weight: 700;
  }

  &__description {
    font-size: $regular-font-size;
    font-weight: 500;
  }
}
</style>
