<template>
    <div class="community">
      <div class="community__content">
        <div class="community__header">
          <img src="../assets/serviceIcon/calendar.png" />
          <div class="community__label">Calendar</div>
        </div>
        <!-- <input placeholder="Введите название сообщества..." type="text" /> -->
  
        <div style="margin:30px 0;display: block;overflow:auto;height: 500px;">
          <table class="table table-dark" >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Дата</th>
                <th scope="col">Название события</th>
                <th scope="col">Формат мероприятия</th>
                <th scope="col">Тип мероприятия</th>
                <th scope="col">Ссылка</th>
              </tr>
            </thead>
            <template v-for="(item, index) in tableRows" :key="index">
              <tbody>
                <tr>
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{item.data}}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ (item.format)}}</td>
                  <td>{{ (item.type)}}</td>
                  <td>{{ (item.link)}}</td>
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
            data: '11 декабря 2022',
            name: "Программа акселератора ГУУ. Еженедельные трекшн-митинги",
            format: "онлайн",
            type: 'конференция',
            link: "https://leader-id.ru/events?actual=1&registrationActual=1&sort=date",
          },
        ],
        fieldsa: ["Название сообщества", "Количество учатников", "тег"],
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
          "https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=20"
        );
        console.log(res.data.items);
      },
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