<template>
  <div class="main">
    <div class="aside">
      <div class="aside__list">
        <AsideElement
          v-for="index in this.$store.getters.GetLength"
          :key="index - 1"
          :index="index - 1"
        />
      </div>
    </div>
    <div class="description">
      <DescriptionElement
        v-for="index in this.$store.getters.GetLength"
        :key="index - 1"
        :index="index - 1"
      />
      <div class="description__navigacia">
        <span class="navigacion__active">{{
          this.$store.getters.GetIdByActive + 1
        }}</span>
        <span class="navigation__dash"
          >/{{ this.$store.getters.GetLength }}</span
        >
      </div>
    </div>
    <div class="picture">
      <PictureSlaider
        v-for="(src, index) of srcslaider"
        :key="index"
        :index="index"
      />
    </div>
  </div>
</template>
<script>
import AsideElement from "@/pages/Page1Elements/asideElement";
import DescriptionElement from "@/pages/Page1Elements/descriptionElement";
import PictureSlaider from "@/pages/Page1Elements/pictureSlaider";
export default {
  data() {
    return {
      srcslaider: require
        .context("../assets/images/", false, /\.(png|jpe?g|svg)$/)
        .keys()
        .map(require.context("../assets/images/", false, /\.(png|jpe?g|svg)$/)),
    };
  },
  mounted() {
    window.addEventListener("load", this.FirstAsidePosition);
  },
  components: { AsideElement, DescriptionElement, PictureSlaider },
  methods: {
    FirstAsidePosition() {
      let MountedLocation = location.hash;
      for (var i = 0; i < this.main_elements.length; i++) {
        if (MountedLocation === this.main_elements[i].href) {
          this.$store.commit("SET_NEW_ACTIV", i);
        }
      }
    },
  },
};
</script>
<style scoped>
.main {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: normal;
  top: 55px;
  margin-left: 35px;
  width: calc(100% - 115px);
  height: 87.5vh;
  z-index: 1;
  opacity: 1;
  transition-duration: 0.8s;
}

.aside {
  grid-column: span 2;
  display: flex;
  align-items: center;
}

.aside__list {
  padding: 0;
}

.description {
  grid-column: span 5;
  position: relative;
  background-color: #f0f0f0;
}

.description__navigacia {
  position: absolute;
  z-index: 1;
  top: 70vh;
  left: 10.3vw;
}

.navigacion__active {
  font: normal normal 18px/30px Gilroy;
  font-weight: 300;
}

.navigation__dash {
  font: normal normal 18px/30px Gilroy;
  font-weight: 300;
}

.picture {
  grid-column: span 758px;
  flex-grow: 5;
  width: 35.6vw;
}
</style>