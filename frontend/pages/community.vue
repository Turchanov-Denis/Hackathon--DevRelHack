<template>
  <div class="community">
    <div class="community__content">
      <div class="community__header">
        <img src="../assets/serviceIcon/github.png" />
        <div class="community__label">GitHub</div>
        
      </div>
      <div style="margin:30px 0;display: block;overflow:auto;height: 500px;">
        <table class="table table-dark" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя участников</th>
              <th scope="col">Количество звезд</th>
              <th scope="col">Количество фолловеров</th>
              <th scope="col">Теги</th>
              <th scope="col">Дата регистрации</th>
            </tr>
          </thead>
          <template v-for="(item, index) in tableRows" :key="index">
            <tbody>
              <tr>
                <th scope="row">{{ index + 1 }}</th>
                <td><a href="/community">{{ item.login }}</a></td>
                <td>{{ item.id }}</td>
                <td>{{ item.id*2}}</td>
                <td>{{ '-'}}</td>
                <td>{{ `0${item.id%10}.1${item.id%2}.199${item.id%10}`}}</td>
              </tr>
            </tbody>
          </template>
        </table>
      </div>
      <button  class="btn" @click="exportFile">Export XLSX</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { read, utils, writeFileXLSX } from "xlsx";
import axios from "axios";
export default {
    data() {
    return {
      tableRows: [
        {
          name: "",
          amount: "",
          teg: "",
        },
      ],
      fieldsa: ["Имя участников", "Количество звезд",'Количество фолловеров', "теги"],
    };
  },
  methods: {
    exportFile() {
      const ws = utils.json_to_sheet(this.tableRows);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Data");
      writeFileXLSX(wb, "SheetJSVueAoO.xlsx");
    },
    async getRepos() {
      const res = await axios.get(
        "https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000"
      );
      console.log(res.data.items);
    },
  },
  mounted() {
    axios.get("https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000"
      )
      .then((response) => (this.tableRows = response.data.items));
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