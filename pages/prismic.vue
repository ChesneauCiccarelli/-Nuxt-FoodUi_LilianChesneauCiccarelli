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
console.log(home);

useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_title,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image.url,
});
</script>

<template>
  <section class="prismic">
    <section>
      <Hero
        :title="home.data.hero_title"
        :text="home.data.hero_text"
        :buttons="home.data.hero_buttons"
      />
    </section>

    <section class="flex sectionHLP">
      <Information :information="home.data.information" />
    </section>

    <SectionLayout class="section" section="Product" title="Most Popular Items">
      <template #content>
        <MenuLayout></MenuLayout>
      </template>
    </SectionLayout>

    <SectionLayout
      class="section"
      section="Services"
      title="Why Choose Our Favorite Food"
    >
      <template #content>
        <div class="flex sectionServices__container">
          <Service :services="home.data.services"></Service>
        </div>
      </template>
    </SectionLayout>

    <SectionLayout
      class="section"
      section="How To Work"
      title="Food Us An Important Part Of A Balanced Diet"
    >
      <template #content>
        <div class="flex process">
          <LineSVG class="LineSVG__1" />
          <HowTo :items="home.data.how_to"></HowTo>
          <LineSVG class="LineSVG__2" />
        </div>
      </template>
    </SectionLayout>

    <SectionLayout
      class="section"
      section="Testimonials"
      title="Our Happy Client Says"
    >
      <template #content>
        <div class="flex testimonial">
          <div class="flexRow flex1">
            <IconsSet
              class="testimonial__iconLeft"
              name="ArrowLeft"
              variant="Primary"
              size="Small"
            />
            <div class="testimonial__content">
              <div class="flex testimonial__content--container">
                <PrismicImage
                  class="testimonial__content--picture"
                  :field="home.data.testimonials_client_image"
                ></PrismicImage>
                <div>
                  <PrismicRichText
                    class="testimonial__content--name"
                    :field="home.data.testimonials_client_name"
                  />
                  <PrismicRichText
                    class="testimonial__content--job"
                    :field="home.data.testimonials_client_job"
                  />
                </div>
              </div>
              <PrismicRichText
                class="testimonial__content--description"
                :field="home.data.testimonials_client_text"
              />
            </div>
            <IconsSet
              class="testimonial__iconRight"
              name="ArrowRight"
              variant="Primary"
              size="Small"
            />
          </div>

          <div class="flex1">
            <PrismicImage :field="home.data.testimonials_image"></PrismicImage>
          </div>
        </div>
      </template>
    </SectionLayout>

    <PNewsletter />
  </section>
</template>

<style lang="scss" scoped>
.prismic {
  margin: 0 150px;
}

main {
  margin: 0 150px;
}
.section {
  padding: rem(62) 0;
}

.flex {
  display: flex;
  justify-content: space-between;
}
.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex1 {
  flex: 1;
}

section.sectionHLP {
  background-color: $white;
  border-radius: rem(50);
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
  padding: rem(60) 0;
}

.sectionHLP-m {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
}

.sectionServices__container {
  gap: rem(50);
}

div.process {
  position: relative;
}

.LineSVG__1 {
  position: absolute;
  left: 9%;
  rotate: -5deg;
  z-index: -1;
}
.LineSVG__2 {
  position: absolute;
  right: 9%;
  rotate: 5deg;
  transform: scale(-1, 1);
  z-index: -1;
}

.testimonial {
  &__content {
    background: $white;
    border-radius: 35px;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
    padding: rem(110) rem(50);

    font-family: Helvetica, sans-serif;
    font-size: $regular-font-size;
    font-weight: 500;

    &--container {
      align-items: center;
      justify-content: center;
      gap: rem(15);
    }

    &--picture {
      clip-path: circle(50% at 50% 50%);
      height: rem(75);
    }

    &--name {
      font-size: $regular-font-size;
      font-weight: 600;
    }

    &--job {
      font-size: $small-font-size;
      font-weight: 400;
    }

    &--description {
      margin-top: rem(30);
      text-align: center;
    }
  }

  &__iconLeft {
    transform: translateX(50%);
  }

  &__iconRight {
    transform: translateX(-50%);
  }
}
</style>
