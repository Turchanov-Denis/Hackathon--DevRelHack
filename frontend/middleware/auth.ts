import { createPinia } from "pinia"
import { useMainStore } from "~~/store/common"
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if an user is authenticated
    const pinia = createPinia()


    // ✅ This will work make sure the correct store is used for the
    // current running app
    const main = useMainStore(pinia)

    return ''

    
})