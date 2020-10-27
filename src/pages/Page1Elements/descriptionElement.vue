
<template>
  <div
    :class="{
      description__item__active: this.$store.getters.GetActiveById(index),
    }"
    class="description__item"
  >
    <div class="description__main_text">
      {{ this.$store.getters.GetContentById(index) }}
    </div>
    <v-clamp class="description__semitext" :max-lines="3" ellipsis="">
      {{ this.$store.getters.GetSemicontentById(index) }}
      <template #after="{ expanded, clamped }">
        <a href="#" v-if="expanded || clamped" class="description__semi_link">
          ...
        </a>
      </template>
    </v-clamp>
  </div>
</template>

<script>
import VClamp from "vue-clamp";
export default {
  components: {
    VClamp,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.description__item {
  position: relative;
  top: 36vh;
  left: 10.3vw;
  width: 22.6vw;
  transition-duration: 0.4s;
  overflow: hidden;
  opacity: 0;
  height: 0px;
}
.description__item__active {
  opacity: 1;
  height: 200px;
}
.description__main_text {
  position: relative;
  margin: 0;
  top: 1 vh;
  font: normal 800 44px/54px Gilroy;

  letter-spacing: 0.004em;
  text-transform: uppercase;

  color: #262525;
}
.description__semitext {
  position: relative;
  margin: 0;
  top: 2vh;
  font: normal normal 18px/30px Roboto;
  letter-spacing: -0.01em;
  text-transform: none;

  color: #262525;
}

.description__semi_link {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  width: 28px;
  height: 28px;
  color: white;
  background-color: #262525;
  font-size: 90%;
  margin: 5px;
}
</style>