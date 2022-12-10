import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'filter-store',
    state: () => {
        return {
            isLogin: true
        }
    },
    actions: {},
    getters: {
        filtersList: state => state.filtersLists,
    },
})