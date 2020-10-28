<template>
  <img
    class="picture__slaider"
    :class="{
      picture__slaider__active: this.$store.getters.GetIdByActive >= index,
    }"
    :src="this.$store.state[index].src"
  />
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.picture__slaider {
  position: absolute;
  width: 35.6vw;
  height: 87.5vh;
  clip: rect(0, 35.6vw, 0, 0);
  overflow: hidden;
  transition-duration: 0.4s;
}
.picture__slaider__active {
  clip: rect(0, 35.6vw, 87.5vh, 0);
}
</style>