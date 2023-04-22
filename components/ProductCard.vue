<template>
    <div class="drop-shadow-xl hover:shadow-xl card text-center" 
        style="height: 250px;position: unset !important;">
        <NuxtLink :to="`/products/${product.id}`">
            <div class="flex flex-col items-center">
                <img :src="product.image" alt="" class="thumb pt-3">
                <p class="font-bold text-gray-500 px-1 py-1 pt-3 text-clip text-ellipsis overflow-hidden">{{ product.title }}</p>
            </div>
        
            <!-- <p class="btn my-1">View Details >>></p> -->
        </NuxtLink>
    </div>
</template>

<script setup>
    // const { product } = defineProps(['product'])
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
</script>

<style>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
    padding: 5px 0px;
}
a{
    text-decoration: none ;
}
</style>