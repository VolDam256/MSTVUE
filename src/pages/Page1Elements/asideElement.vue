<template>
  <div class="aside__element">
    <a
      :class="{
        aside__link__active: this.$store.getters.GetActiveById(index),
      }"
      class="aside__link"
      :href="this.$store.getters.GetHrefById(index)"
      :data-title="this.$store.getters.GetContentById(index)"
      @click="ActivateElement"
      >{{ this.$store.getters.GetContentById(index) }}</a
    >
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ActivateElement() {
      this.$store.commit("SET_NEW_ACTIV", this.index);
    },
  },
};
</script>
<style lang="scss">
.aside__element {
  list-style-type: none;
  margin-top: 20px;
}

.aside__link {
  position: relative;
  display: inline-block;
  opacity: 1;
  font: normal 300 13px/15px Roboto;
  transition: transform 0.8s ease, font 0.4s ease;
  text-decoration: none;
  letter-spacing: 0.03em;
  color: #262525;
  transform: scale 1;

  &:before {
    content: attr(data-title);
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s easy;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    content: "";
    position: relative;
    display: block;
    left: -5px;
    top: -7px;
    height: 9px;
    width: 0;
    background-color: #ebd8cc;
    z-index: -1;
    transition: width 0.8s ease;
  }

  &:hover:after {
    width: calc(100% + 10px);
  }
}

.aside__link__active {
  text-transform: uppercase;
  font: normal bold 14px/16px Roboto;
  transform: scale 1.01;

  &:after {
    width: calc(100% + 10px);
  }
}
</style>