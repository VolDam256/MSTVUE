<template>
  <div class="aside__element">
    <a
      v-bind:class="{
        aside__link__active: description__item_position === index,
      }"
      v-bind:href="todo.href"
      class="aside__link"
      v-bind:data-title="todo.content"
      @click="ActiveEl"
      >{{ todo.content }}</a
    >
  </div>
</template>
<script>
export default {
  props: {
    description__item_position: {
      type: Number,
      required: true,
    },
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ActiveEl() {
      this.$emit("updateParent", this.index);
    },
  },
};
</script>
<style scoped>
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
}
.aside__link:before {
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

.aside__link:hover:before {
  opacity: 1;
}

.aside__link:after {
  content: "";
  position: relative;
  display: block;
  left: -5px;
  top: -7px;
  height: 9px;
  width: 0;
  background-color: #ebd8cc;
  z-index: -1;
  transition-duration: 0.8s;
}

.aside__link:hover:after {
  width: calc(100% + 10px);
}

.aside__link__active {
  text-transform: uppercase;
  font: normal bold 14px/16px Roboto;
  transform: scale 1.01;
}

.aside__link__active:after {
  width: calc(100% + 10px);
}
</style>