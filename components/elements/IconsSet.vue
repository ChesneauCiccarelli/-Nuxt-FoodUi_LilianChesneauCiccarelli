<script setup>
import CartIcon from "@/components/icons/CartIcon.vue";
import ClockIcon from "@/components/icons/ClockIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import PlayIcon from "@/components/icons/PlayIcon.vue";
import LocalisationIcon from "@/components/icons/LocalisationIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import LiltleStarIcon from "@/components/icons/LitleStarIcon.vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
import NextIcon from "@/components/icons/NextIcon.vue";
import PreviousIcon from "@/components/icons/PreviousIcon.vue";
import Food_1Icon from "@/components/icons/Food_1Icon.vue";
import Food_2Icon from "@/components/icons/Food_2Icon.vue";
import DeliveryIcon from "@/components/icons/DeliveryIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

const props = defineProps({
  name: String,
  variant: String,
  size: String,
});

const className = computed(() => ({
  " -primary": props.variant === "Primary",
  " -secondary": props.variant === "Secondary",
  " -white": props.variant === "White",
  " -black": props.variant === "Black",
  " -small": props.size === "Small",
  " -medium": props.size === "Medium",
  " -big": props.size === "Big",
}));

const getIcon = computed(() => {
  switch (props.name) {
    case "Cart":
      return CartIcon;
    case "Clock":
      return ClockIcon;
    case "Phone":
      return PhoneIcon;
    case "Play":
      return PlayIcon;
    case "Localisation":
      return LocalisationIcon;
    case "Search":
      return SearchIcon;
    case "Star":
      return LiltleStarIcon;
    case "ArrowLeft":
      return ArrowLeftIcon;
    case "ArrowRight":
      return ArrowRightIcon;
    case "Next":
      return NextIcon;
    case "Previous":
      return PreviousIcon;
    case "Food_1":
      return Food_1Icon;
    case "Food_2":
      return Food_2Icon;
    case "Delivery":
      return DeliveryIcon;
    case "Facebook":
      return FacebookIcon;
    case "Instagram":
      return InstagramIcon;
    case "LinkedIn":
      return LinkedInIcon;
    default:
      return TwitterIcon;
  }
});
</script>

<template>
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  color: $black;
  display: inline-flex;
  height: 20px;
  justify-content: center;
  padding: rem(15);
  width: 20px;
  svg {
    height: 20px;
    width: 20px;
  }

  &.-primary {
    background-color: $primary-color;
    border-radius: 100%;
    color: $white;
    fill: $white;
  }

  &.-secondary {
    background-color: $secondary-color;
    border-radius: 100%;
    color: $primary-color;
  }

  &.-white {
    background-color: $white;
    border-radius: 100%;
    color: $black;
    box-shadow: 0px 0px 25px rgba(131, 165, 255, 0.25);
  }

  &.-black {
    background-color: $black;
    border-radius: 100%;
    color: $white;
  }

  &.-medium {
    height: 42px;
    width: 42px;
    svg {
      height: 30px;
      width: 30px;
    }
  }

  &.-big {
    height: 98px;
    width: 98px;
    svg {
      height: 50px;
      width: 50px;
    }
  }
}
</style>
