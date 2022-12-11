<template>
  <div class="card-l">
    <div class="card-l__container">
      <!-- <img :src="`\assets\serviceIcon\${icon}.png`" /> -->
      <img :src="icon" />
      <div class="card-l__title">{{ title }}</div>
    </div>
    <div class="card-l__descr">
      {{ descr }}
    </div>
   <div style="display:flex;justify-content: center;align-items: end;margin-top: auto;">
    <NuxtLink :to="link"><button>Выбрать</button></NuxtLink>
   </div>
  </div>
</template>


<script>
export default {
  props: {
    items: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  props: {
    title: String,
    descr: String,
    link: String,
    icon: String
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
.card-l {
  margin: 10px 10px;
  width: 315px;
  height: 393px;
  padding: 41px 25px;
  background: #2b2b2b;
  border-radius: 5px;
  &__container {
    display: flex;
    align-items: center;
  }
  &__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;

    color: #ffffff;
    padding-left: 16px;
  }
  img {
    width: 70px;
    height: 70px;
  }
  &__descr {
    height: 200px;
    padding: 33px 0 0 0;
    font-family: "Play";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;

    color: #ffffff;
  }
  button {
    
    display: block;
    position: relative;
    margin: 0 auto;
    width: 177px;
    height: 35px;

    background: #232323;
    border: 2px solid #ffe27a;
    border-radius: 15px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.07em;

    color: #ffad7e;
  }
}
</style>