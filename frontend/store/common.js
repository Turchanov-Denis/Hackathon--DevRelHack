import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'filter-store',
    state: () => {
        return {
            isLogin: false,
            inputCom: '',
            cardList: [{
                title: "Github",
                descr: "крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Веб-сервис основан на системе контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, Inc.",
                link: "github",
                icon: "http://localhost:3000/_nuxt/assets/serviceIcon/github.png"
            },
            {
                title: "Stackoverflow",
                descr: "система вопросов и ответов о программировании, разработанная Джоэлем Спольски и Джеффом Этвудом в 2008 году. Является частью Stack Exchange Network.",
                link: "stackoverflow",
                icon: "http://localhost:3000/_nuxt/assets/serviceIcon/stack.png"
            }, {
                title: "Календарь",
                descr: "Афиша главных мероприятий ",
                link: "calendar",
                icon: "http://localhost:3000/_nuxt/assets/serviceIcon/calendar.png"
            },
            {
                title: "Habr",
                descr: "русскоязычный веб-сайт в формате системы тематических коллективных блогов с элементами новостного сайта, созданный для публикации новостей, аналитических статей.",
                link: "habr",
                icon: "http://localhost:3000/_nuxt/assets/serviceIcon/habr.png"
            }, {
                title: "Linkedin",
                descr: "русскоязычный веб-сайт в формате системы тематических коллективных блогов с элементами новостного сайта, созданный для публикации новостей, аналитических статей.",
                link: "habr",
                icon: "http://localhost:3000/_nuxt/assets/serviceIcon/linkedin.png"
            }]
        }
    },
    actions: {
        changeCartFilter(value) {
            this.inputCom = value;
            console.log(this.inputCom);
        },
        changeLogin() {
            this.isLogin = !this.isLogin
            console.log(this.isLogin);
        }

    },
    getters: {
        getInputCom: (state) => state.inputCom

    }
})