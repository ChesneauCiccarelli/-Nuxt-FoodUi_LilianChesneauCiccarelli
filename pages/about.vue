<script setup>
const { client } = usePrismic();
const { data: about, error } = await useAsyncData("About", () =>
  client.getSingle("about")
);
if (!about.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}
console.log(about);
</script>

<template>
  <div class="about-page">
    <div class="about-header">
      <PrismicRichText :field="about.data.about_title"></PrismicRichText>
      <PrismicRichText :field="about.data.about_subtitle"></PrismicRichText>
    </div>

    <div class="about-content">
      <div class="about-image">
        <PrismicImage :field="about.data.about_image"></PrismicImage>
      </div>

      <div class="about-text">
        <PrismicRichText :field="about.data.story"></PrismicRichText>
        <PrismicRichText :field="about.data.story_text"></PrismicRichText>

        <PrismicRichText :field="about.data.mission_title"></PrismicRichText>
        <PrismicRichText :field="about.data.mission_text"></PrismicRichText>

        <PrismicRichText :field="about.data.team_title"></PrismicRichText>
        <PrismicRichText :field="about.data.team_text"></PrismicRichText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  padding: 2rem;

  .about-header {
    text-align: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      color: #888;
    }
  }

  .about-content {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    .about-image {
      flex: 1;
      img {
        max-width: 100%;
        border-radius: 8px;
      }
    }

    .about-text {
      flex: 2;

      h2 {
        font-size: 1.8rem;
        margin-top: 1.5rem;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
