<template>
  <div class="login">
    <div class="login__column">
      <div class="login__interface">
        <h2>Создать аккаунт</h2>
        <div class="login__input login__input_reg">
          <label> Email </label>
          <input type="text" />
        </div>

        <div class="login__input login__input_reg">
          <label> Придумайте пароль </label>
          <input type="text" />
        </div>

        <div class="login__input login__input_reg">
          <label> Повторите пароль </label>
          <input type="text" />
        </div>

        <div>
          <button>Зарегестрироваться</button>
          <NuxtLink to="/login"> Вернуться </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import HeaderLogin from "~~/components/HeaderLogin.vue";
export default {
 
};
</script>
  