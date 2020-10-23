<template>
  <div class="main">
    <div class="aside">
      <div class="aside__list">
        <AsideElement
          v-for="(todo, index) of main_elements"
          :key="index"
          v-bind:description__item_position="description__item_position"
          v-bind:todo="todo"
          v-bind:index="index"
          @updateParent="ActiveEl"
        />
      </div>
    </div>
    <div class="description">
      <DescriptionElement
        v-for="(todo, index) of main_elements"
        :key="index"
        v-bind:description__item_position="description__item_position"
        v-bind:todo="todo"
        v-bind:index="index"
      />
      <div class="description__navigacia">
        <span class="navigacion__active">{{
          description__item_position + 1
        }}</span>
        <span class="navigation__dash">/6</span>
      </div>
    </div>
    <div class="picture">
      <PictureSlaider
        v-for="(src, index) of srcslaider"
        :key="src.id"
        v-bind:src="src"
        v-bind:description__item_position="description__item_position"
        v-bind:index="index"
      />
    </div>
  </div>
</template>
<script>
import AsideElement from "@/main/mainsElements/asideElement";
import DescriptionElement from "@/main/mainsElements/descriptionElement";
import PictureSlaider from "@/main/mainsElements/pictureSlaider";
export default {
  data() {
    return {
      description__item_position: 0,
      srcslaider: require
        .context("../components/images/", false, /\.(png|jpe?g|svg)$/)
        .keys()
        .map(
          require.context("../components/images/", false, /\.(png|jpe?g|svg)$/)
        ),
      main_elements: [
        {
          content: "Архитектура",
          href: "#architecture",
          semicontent:
            "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом текст тексттексттексттексттексттексттексттекст",
        },
        {
          content: "Благоустройство",
          href: "#accomplishment",
          semicontent:
            "Оригинальная архитктура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни qw wq 1 wd wd 2 3 4 666666666666 666666666666 666666666666 666666666666",
        },
        {
          content: "Безопастность",
          href: "#security",
          semicontent:
            "Современный двор европейского уровня - територия для детей, игр на свежем воздуху и вечерних текст тексттексттексттексттексттексттексттекст",
        },
        {
          content: "Инженерия",
          href: "#engineering",
          semicontent:
            "Оригинальная архитктура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни qw wq w wd wd w w dwd",
        },
        {
          content: "Инфраструктура",
          href: "#infrastructure",
          semicontent:
            "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса текст тексттексттексттексттексттексттексттекст",
        },
        {
          content: "Транспортная доступность",
          href: "#transport",
          semicontent:
            "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("load", this.first_state);
  },
  components: { AsideElement, DescriptionElement, PictureSlaider },
  methods: {
    first_state() {
      let MountedLocation = location.hash;
      for (var i = 0; i < this.main_elements.length; i++) {
        if (MountedLocation === this.main_elements[i].href) {
          this.description__item_position = i;
        }
      }
    },

    ActiveEl(index) {
      this.description__item_position = index;
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