<template>
  <div class="select-section">
    <h1>Выберите сервис</h1>
    <div class="select-section__container">
      <template 
        v-for="(item, index) in cardList.filter(item => item.title.toUpperCase().includes(MainStore.getInputCom.toUpperCase()))" class="select-section__container" :key="index" >
        <LazyCard
          :title="item.title"
          :descr="item.descr"
          :link="item.link"
          :icon="item.icon"
        ></LazyCard>
      </template>
    </div>
  </div>
</template>

<script>
import LazyCard from "~~/components/LazyCard.vue";
import { useMainStore } from "~/store/common";

export default {
  components: { LazyCard },
  setup() {
    const MainStore = useMainStore();
    const cardList = MainStore.cardList;

    return { MainStore,cardList };
  },
};
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
  &__container {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
  h1 {
    font-family: "Play";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 74px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;

    color: #ffffff;
  }
}
</style>