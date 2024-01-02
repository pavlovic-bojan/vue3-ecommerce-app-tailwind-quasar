<template>
    <div class="product-card">
        <div class="group relative" @click="goToSingleProduct(product.id)">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                      {{ product.name }}
                </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
        <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useSingleProduct } from '../stores/singleProduct.js'
  import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'
  
  const props = defineProps(['product']);

  const singleProduct = useSingleProduct()
  const route = useRoute()
  const router = useRouter()

  const goToSingleProduct = (productId) => {
    router.push({path: `products/${productId}`})
    singleProduct.product = props.product
    console.log('clicked here--->', singleProduct.product)
  }
  </script>
  