<template>
  <div class="card">
    <div class="card__container">
      <img src="../assets/serviceIcon/github.png" />
      <div class="card__title">{{ title }}</div>
    </div>
    <div class="card__descr">
      {{ descr }}
    </div>
    <NuxtLink :to="link"><button>Выбрать</button></NuxtLink>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    descr: String,
    link: String,
    icon: { type: String, default: "github" },
  },
  data() {
    return {};
  },
  computed: {
    imagePath() {
      if (this.icon !== "") {
        return require(`@/assets/serviceIcon/${this.icon}.png`);
      }
    },
  },
};
</script>

<style lang="scss">
.card {
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
    padding: 33px 0 90px 0;
    font-family: "Play";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;

    color: #ffffff;
  }
  button {
    display: block;
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