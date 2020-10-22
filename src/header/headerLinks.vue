<template>
  <div class="menu_element">
    <p @click="ChangeLinePos">
      <router-link
        v-bind:ref="'element'"
        v-bind:to="todo.href"
        class="menu_link"
        >{{ todo.content }}</router-link
      >
    </p>
  </div>
</template>
<script>
export default {
  props: {
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
    ChangeLinePos() {
      this.$emit("updateLine", this.index);
    },
  },
};
</script>
<style scoped>
.menu_element {
  transition: color 0.2s linear;
  padding-left: 25px;
  padding-right: 25px;
  float: left;
}
.menu_element:first-of-type {
  padding-left: 5px;
}
.menu_element:last-of-type {
  padding-right: 5px;
}
.menu_link {
  text-decoration: none;
  color: #262525;
  font: normal 800 12px/15px Gilroy;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>