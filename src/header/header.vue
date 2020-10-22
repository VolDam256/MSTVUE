<template>
  <div class="header">
    <a class="logo">
      <div class="logo__icon"></div>
      <div class="logo__text">Первомайская</div>
    </a>
    <div class="menu">
      <div class="menu__list">
        <HeaderLinks
          v-for="(todo, index) of menu_elements"
          :key="todo.id"
          v-bind:todo="todo"
          v-bind:index="index"
          @updateLine="ChangeLinePos"
        />
      </div>
      <div class="menu_line" v-bind:style="{ transform: line_transform }"></div>
    </div>
    <div class="nelogo">
      <a href="tel:+7 888 888 88 88" class="callnumber">8 888 888 88 88</a>
      <div class="burger">
        <svg><use xlink:href="./sprite.svg#line" /></svg>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderLinks from "@/header/headerLinks";
export default {
  data() {
    return {
      links: [],
      line_position: 0,
      line_transform: "translateX(0px) scaleX(1)",
      menu_elements: [
        { content: "О комплексе", href: "/" },
        { content: "Особенности", href: "/main_osob" },
        { content: "Пентхаусы", href: "/main_pent" },
        { content: "Выбрать квартиру", href: "/main_vubkv" },
      ],
    };
  },
  mounted() {
    let location = document.location.pathname;
    switch (location) {
      case "/main_osob":
        this.line_position = 1;
        break;
      case "/main_pent":
        this.line_position = 2;
        break;
      case "/main_vubkv":
        this.line_position = 3;
        break;
      default:
        this.line_position = 0;
        break;
    }
    this.FirstState();
  },
  methods: {
    ChangeLinePos(number) {
      console.log(this.links[number]);
      console.log(number);
    },
    FirstState() {
      console.log("ok");
    },
  },
  components: {
    HeaderLinks,
  },
};
</script>



<style scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 95px;
  z-index: 2;
}
.logo {
  height: 70px;
  text-decoration: none;
  vertical-align: top;
}
.logo__icon {
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: black;
}
.logo__text {
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;

  font: normal 800 17px/21px Gilroy;
  text-decoration: none;
  color: #262525;
  border: 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.menu {
  align-self: flex-start;
  margin-top: 23px;
}
.menu_list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu_list:after {
  content: "";
  clear: both;
  display: block;
}

.menu_line {
  position: absolute;
  top: 44px;
  width: 100px;
  height: 4px;
  background-color: #d88f5e;
  z-index: 1;
  transition-duration: 0.8s;
}
.nelogo {
  height: 70px;
}
.callnumber {
  vertical-align: top;
  margin-right: 20px;
  color: #262525;
  text-decoration: none;
  font: normal 800 17px/21px Gilroy;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.burger {
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: black;
  border: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
}

Svg {
  width: 100%;
  height: 100%;
}
</style>
