export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path == '/') {
        window.scrollTo(0,0)
    }
})