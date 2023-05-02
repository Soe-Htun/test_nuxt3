<template>
    <div class="bg-blend-lighten mb-3">
        <h2>Products</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <div v-if="pending"> Loading.....</div>
            <div v-for="product in products" v-else>
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: products, pending } = await useFetch('https://fakestoreapi.com/products')

definePageMeta({
    layout: 'products'
})
// onMounted(() => {
//     nextTick(() => {
        
//         setTimeout(() => {
//             pending
//         }, 500)
//     })
// })

useHead({
    title: 'Nuxt Dojo',
    meta: [
        { name: 'description', content: 'Nuxt3 Dojo' }
    ]
})
</script>