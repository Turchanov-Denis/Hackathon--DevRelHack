<template>
  <div class="community">
    <div class="community__content">
      <div class="community__header">
        <img src="../assets/serviceIcon/github.png" />
        <div class="community__label">GitHub</div>
      </div>
      <input placeholder="Введите название сообщества..." type="text" />

      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название сообщества</th>
              <th scope="col">Количество учатников</th>
              <th scope="col">Теги</th>
            </tr>
          </thead>
          <template v-for="(item, index) in tableRows" :key="index">
            <tbody>
              <tr>
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.teg }}</td>
              </tr>
            </tbody>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableRows: [
        {
          name: "Mark",
          amount: "2",
          teg: "@mdo",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.community {
  padding: 20px 100px;
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  &__content {
    padding: 30px;
    width: 80%;
    height: 100%;
    background: #2b2b2b;
    border-radius: 5px;
  }
  &__header {
    display: flex;
    align-items: center;
  }
  &__label {
    font-family: "Play";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    /* identical to box height */

    color: #ffffff;
    padding-left: 20px;
  }
  input {
    margin: 20px 0;
    padding-left: 10px;
    width: 245px;
    height: 45px;
    background: #ffffff;
    border: 2px solid #fe7865;
    box-shadow: 0px 16px 48px rgba(183, 184, 190, 0.459862);
    border-radius: 3px;
  }
}
</style>