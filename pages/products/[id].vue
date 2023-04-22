<template>
    <div>
        <!-- BAC -->
        <NuxtLink to="/products"><p>Back</p></NuxtLink>
        <p>Product Details for {{ id }}</p>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const {  id } = useRoute().params
const url = 'https://fakestoreapi.com/products/' + id 
// fetch the product
const { data: product } = await useFetch(url, {  key: id })

</script>