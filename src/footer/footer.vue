<template>
  <div class="footer">
    <div class="footer-content">Разработано в MST</div>
    <div class="footer-content">|</div>
    <div class="footer-content">2018</div>
  </div>
</template>
<script>
export default {
};
</script>

<style lang="scss">
.footer {
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 60px;

  padding-left: 35px;
  font: normal 300 13px/15px Gilroy;
  font-weight: 300;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #505050;
}

.footer-content {
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}
</style>