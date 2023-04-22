<template>
    <div class="">
        <header class="sticky z-30 top-0 shadow-sm bg-white fixed h-16 top-0 left-0 right-0">
            <nav class="container mx-auto flex justify-between align-middle" style="line-height: 4rem;">
                <NuxtLink to="/" class="font-bold no-underline">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4" >
                    <li @click="scrollToTop"> <NuxtLink key="1" to="/" class="no-underline">Home</NuxtLink> </li>
                    <li> <NuxtLink key="2" to="/about" class="no-underline">About</NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="no-underline">Products</NuxtLink> </li>
                </ul>
            </nav>
        </header>
        <div class="bg-blend-hard-light mx-auto mt-16 p-3">
            <slot />
        </div>
    </div>
</template>

<script setup>
const scrollToTop = () => {
    window.scrollTo(0,0)
    navigateTo({ path: '/' , required: true})
}
</script>

<style>
.router-link-exact-active {
    color: #12b488;
}
</style>