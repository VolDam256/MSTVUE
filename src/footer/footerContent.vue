<template>
  <div class="footer-content">{{ todo.content }}</div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.footer-content {
  margin-right: 20px;
}
.footer-content:last-child {
  margin-right: 0;
}
</style>