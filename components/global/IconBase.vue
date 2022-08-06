<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: false,
      default: "Icon",
    },
    width: { type: Number, required: false, default: 10 },
    height: { type: Number, required: false, default: 10 },
  },
};
</script>