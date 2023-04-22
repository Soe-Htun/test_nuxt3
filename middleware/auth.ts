export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = false;
    console.log(to);
    if(isLoggedIn) {
        // redirect to page we want to go
        return navigateTo(to.fullPath);
    }
    // redirect to login page
    return navigateTo('/products')
    
})