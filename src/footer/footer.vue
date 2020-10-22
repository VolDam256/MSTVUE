<template>
  <div class="footer">
    <FooterContent
      v-for="todo of footer_content"
      :key="todo.id"
      v-bind:todo="todo"
    />
  </div>
</template>
<script>
import FooterContent from "@/footer/footerContent";
export default {
  data() {
    return {
      footer_content: [
        { content: "Разработано в MST" },
        { content: "|" },
        { content: "2018" },
      ],
    };
  },
  components: {
    FooterContent,
  },
};
</script>

<style scoped>
.footer {
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 60px;

  padding-left: 35px;
  font: normal 300 13px/15px Gilroy-lite;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #505050;
}
</style>