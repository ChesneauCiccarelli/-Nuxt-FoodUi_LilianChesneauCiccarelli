<script setup></script>

<template>
  <section class="flex relative">
    <div class="absolute">
      <img class="image" src="/burger.png" alt="Image of a burger" />
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
