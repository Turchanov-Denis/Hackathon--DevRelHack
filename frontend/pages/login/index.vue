<template>
  <div class="login">
    <div class="login__column">
      <h1>
        Веб-сервис, который позволяет просматривать и анализировать информацию о
        сообществе, делать выборки по разным параметрам.
      </h1>
      <img src="../../public/img/loginImg.png" alt="" />
    </div>
    <div class="login__column">
      <div class="login__interface">
        <h2>Войти</h2>
        <div class="login__input">
          <label> Логин </label>
          <input type="text" />
        </div>

        <div class="login__input">
          <label> Пароль </label>
          <input type="text" />
        </div>

        <div>
          <NuxtLink  to="/">Войти</NuxtLink>
          
          <NuxtLink @click="changeLogin" to="/login/registration">Зарегестрироваться</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "~/store/common";
import HeaderLogin from "~~/components/HeaderLogin.vue";
export default {
  components: { HeaderLogin },
  setup() {
    const MainStore = useMainStore();
    const isLogin = MainStore.isLogin;
    const changeLogin = MainStore.changeLogin;

    return { isLogin,changeLogin };
  },
};
</script>
<style lang="scss">
.login {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 70px;
  width: 100%;
  height: 100%;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  a {
    display: block;
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */

    text-align: center;

    color: #48bdff;
  }
  button {
    margin-top: 70px;
    width: 168px;
    height: 41px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 9px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    /* identical to box height, or 160% */

    text-align: center;

    color: #000000;
  }
  &__column {
    flex: 0 0 500px;
    img {
      width: 700px;
    }
    h1 {
      display: block;
      margin: 0 auto;
      width: 484px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      text-align: center;

      color: #ffffff;
    }
  }
  &__interface {
    padding: 73px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 426px;
    height: 566px;
    background: #2a2a2a;
    border-radius: 5px;
    input {
      padding-left: 10px;
      width: 320px;
      height: 40px;
      /* Base/White */
      background: #ffffff;
      /* Gray/400 */
      border: 1px solid #98a2b3;
      /* Shadow/xs */
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }
    label {
      display: block;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      color: #8db9ff;
    }
    h2 {
      padding-bottom: 72px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 24px;
      /* identical to box height, or 50% */

      text-align: center;

      color: #ffd37c;
    }
  }
  &__input {
    padding: 10px 0;
    &_reg {
      padding: 5px 0;
    }
  }
}
</style>