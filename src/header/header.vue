<template>
  <div class="header">
    <router-link
      class="logo"
      :to="menu_elements[0].href"
      @click.native="Click(0)"
    >
      <div class="logo__icon"></div>
      <div class="logo__text">Первомайская</div>
    </router-link>
    <div class="menu">
      <div class="menu__list">
        <router-link
          v-for="(header_link, index) of menu_elements"
          :key="index"
          @mouseover.native="HoverOnLink(index)"
          @mouseleave.native="WithdrawalFromLink()"
          @click.native="ClickOnLink(index)"
          ref="link"
          :to="header_link.href"
          class="menu_link"
          >{{ header_link.content }}</router-link
        >
      </div>
      <div class="menu_line" :style="`transform:` + line_transform"></div>
    </div>
    <div class="others">
      <a href="tel:+7 888 888 88 88" class="callnumber">8 888 888 88 88</a>
      <button class="burger">
        <svg><use xlink:href="./sprite.svg#line" /></svg>
      </button>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
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
    window.addEventListener("load", this.FistLineState);
  },
  methods: {
    FistLineState() {
      let MountedLocation = location.pathname;
      for (var i = 0; i < this.menu_elements.length; i++) {
        if (MountedLocation === this.menu_elements[i].href) {
          this.line_position = i;
          let width = this.$refs.link[i].$el.getBoundingClientRect().width;
          width = (width + 10) / 100;

          this.SetLinePosition(
            this.$refs.link[i].$el.getBoundingClientRect().left -
              this.$refs.link[0].$el.getBoundingClientRect().left +
              (width * 100 - 100) / 2,
            width
          );
        }
      }
    },

    ClickOnLink(event) {
      let width = this.$refs.link[event].$el.getBoundingClientRect().width;
      width = (width + 10) / 100;

      this.SetLinePosition(
        this.$refs.link[event].$el.getBoundingClientRect().left -
          this.$refs.link[0].$el.getBoundingClientRect().left +
          (width * 100 - 100) / 2,
        width
      );
      this.line_position = event;
    },

    HoverOnLink(event) {
      if (event !== this.line_position) {
        let newtrans;
        let newscale;
        if (event > this.line_position) {
          newscale =
            (this.$refs.link[event].$el.getBoundingClientRect().left -
              this.$refs.link[this.line_position].$el.getBoundingClientRect()
                .left +
              this.$refs.link[event].$el.getBoundingClientRect().width +
              8) /
            100;
        } else {
          newscale =
            (this.$refs.link[this.line_position].$el.getBoundingClientRect()
              .right -
              this.$refs.link[event].$el.getBoundingClientRect().right +
              this.$refs.link[event].$el.getBoundingClientRect().width +
              8) /
            100;
        }

        if (event > this.line_position) {
          newtrans =
            this.$refs.link[this.line_position].$el.getBoundingClientRect()
              .left -
            this.$refs.link[0].$el.getBoundingClientRect().left +
            (newscale * 100 - 100) / 2;
        } else {
          newtrans =
            this.$refs.link[event].$el.getBoundingClientRect().left -
            this.$refs.link[0].$el.getBoundingClientRect().left +
            (newscale * 100 - 100) / 2;
        }
        this.SetLinePosition(newtrans, newscale);
      }
    },
    WithdrawalFromLink() {
      let width = this.$refs.link[
        this.line_position
      ].$el.getBoundingClientRect().width;
      width = (width + 10) / 100;

      this.SetLinePosition(
        this.$refs.link[this.line_position].$el.getBoundingClientRect().left -
          this.$refs.link[0].$el.getBoundingClientRect().left +
          (width * 100 - 100) / 2,
        width
      );
    },

    SetLinePosition(peremen1, peremen2) {
      this.line_transform =
        `translateX(` + peremen1 + `px) scaleX(` + peremen2 + `)`;
    },
  },
};
</script>



<style lang="scss" >
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

  &:after {
    content: "";
    clear: both;
    display: block;
  }
}

.menu_link {
  display: inline-block;
  text-decoration: none;
  margin-left: 25px;
  margin-right: 25px;
  color: #262525;
  font: normal 800 12px/15px Gilroy;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &:first-of-type {
    margin-left: 5px;
  }
  &:last-of-type {
    margin-right: 5px;
  }
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
.others {
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
