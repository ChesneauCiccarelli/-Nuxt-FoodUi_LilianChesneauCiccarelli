<script setup></script>

<template>
  <div class="header">
    <div class="header__logo">
      <a href="/">
        <img src="/logo.png" alt="Logo" />
      </a>
    </div>
    <div class="header__links">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Service</a>
      <a href="#">Shop</a>
    </div>
    <div>
      <SearchBar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
.header {
  align-items: center;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  margin-top: rem(10);
  padding: 0 150px;
  z-index: 100;

  font-family: Helvetica, sans-serif;
  font-size: $regular-font-size;
  font-weight: 600;

  &__logo {
    width: 100px;
    padding: rem(10) 0;
  }

  &__links {
    display: flex;
    gap: rem(65);
  }
}
</style>
