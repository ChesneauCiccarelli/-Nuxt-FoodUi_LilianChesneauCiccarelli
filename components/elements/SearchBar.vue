<script setup>
import { useGlobalStore } from "@/stores/global";
const store = useGlobalStore();
</script>

<template>
  <div class="searchbar searchbar__research">
    <div class="searchbar__left">
      <IconsSet variant="Default" name="Search" size="Small" />
      <input class="searchbar__input" type="text" placeholder="Search" />
    </div>
    <div class="searchbar__icon">
      <IconsSet variant="Default" name="Cart" size="Small" />
    </div>
    <div class="count">
      {{ store.cart.length }}
      {{ store.cart }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  position: relative;

  &__left {
    align-items: center;
    display: flex;
  }

  &__research {
    align-items: center;
    background-color: $white;
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
    border-radius: rem(18);
    display: flex;
    justify-content: space-between;
    padding: rem(5) rem(10);
  }

  &__input {
    border: none;
    background-color: none;
    border-radius: none;

    &::placeholder {
      color: $black;
      font-size: $regular-font-size;
      font-family: $primary-font-family;
      font-weight: 500;
    }

    &:focus {
      outline: none;
    }
  }

  &__icon {
    padding-left: rem(10);
    border-left: solid 1px $gray;
  }
}

.count {
  background-color: $primary-color;
  border-radius: 100%;
  color: $white;
  filter: drop-shadow(0px 0px 22px rgba(204, 0, 0, 0.8));
  padding: 3px 5px;
  position: absolute;
  top: 20%;
  right: 5%;

  font-size: $small-font-size;
}
</style>
