<template>
  <div class="wraper">
    <div class="content">
      <Header />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/header/header";
import Footer from "@/footer/footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: Gilroy;
  src: url("./components/fonts/Gilroy-ExtraBold.woff2");
}

@font-face {
  font-family: Gilroy;
  src: url("./components/fonts/Gilroy-Light.woff2");
  font-weight: 300;
}

@font-face {
  font-family: Roboto;
  src: url("./components/fonts/Roboto-Regular.woff2");
}

* {
  margin: 0;
  padding: 0;
}
.wraper {
  background: #ffffff;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0 25px;
}
.content {
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>
