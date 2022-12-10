<template>
  <div class="login">
    <div class="login__column">
      <h1>
        Веб-сервис, который позволяет просматривать и анализировать информацию о
        сообществе, делать выборки по разным параметрам.
      </h1>
      <img src="../public/img/loginImg.png" alt="" />
    </div>
    <div class="login__column">
      <div class="login__interface"></div>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  &__column {
    flex: 0 0 500px;
    img {
      width: 700px;
    }
    h1 {
      display: block;
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
}
</style>