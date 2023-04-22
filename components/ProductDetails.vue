<template>
    <!-- <h2>Details</h2> -->
    <div class="card" style="position: unset !important;">
        <div class="">
            <div class="p-7">
                <img :src="product.image" alt="product img" class="">
            </div>
            <div class="px-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-7">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style>
img {
    max-width: 400px;
}
</style>