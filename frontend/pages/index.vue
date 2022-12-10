<template>
  <div class="select-section">
    <h1>Выберите сервис</h1>
    <Card title="Github" descr="крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Веб-сервис основан на системе контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, Inc." icon="github" link="github"></Card>
  </div>
</template>

<script>
import Card from '~~/components/Card.vue';
export default {
  components: {Card}
}
definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

<style lang="scss">
.select-section {
  
  padding: 20px 100px;
  width: 100%;
  height: 100%;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  h1 {
    font-family: "Play";
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 74px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;

    color: #ffffff;
  }
}
</style>