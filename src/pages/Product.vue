<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-between p-4 m-20">
      <!-- Product Image Section -->
      <div class="lg:w-1/2">
        <!-- Product Image -->
        <img :src="currentImage" alt="Product Image" class="w-[371px] h-[498px] border border-gray-300">

        <!-- Image Gallery -->
        <div class="flex mt-2">
          <img
            v-for="(image, index) in singleProduct.product.imageGallery"
            :key="index"
            :src="image"
            alt="Gallery Image"
            class="w-1/4 cursor-pointer border border-gray-300 mr-1"
            @click="changeImage(index)"
          >
        </div>
      </div>

      <!-- Product Details Section -->
      <div class="lg:w-1/2 p-4">
        <!-- Product Details -->
        <h1 class="text-2xl font-semibold">{{ singleProduct.product.name }}</h1>
        <p class="text-gray-600">{{ singleProduct.product.description }}</p>
        <p class="text-lg font-bold mt-4">{{ singleProduct.product.price }}</p>

        <!-- Quantity Section -->
        <div class="flex items-center mt-4">
          <label for="quantity" class="mr-2">Quantity:</label>
          <input v-model="quantity" type="number" id="quantity" class="p-2 border rounded">
        </div>
        <!-- Attributes -->
        <div class="mt-4">
          <p class="text-gray-700"><strong>Size: {{ singleProduct.product.size }}</strong></p>
          <!-- Add more attributes as needed -->
        </div>

        <!-- Add to Cart Button -->
        <button @click="addToCart" class="mt-4 !bg-gray-700 !text-white p-2 rounded">Add to Cart</button>
      </div>
    </div>

    <!-- Tabs for Additional Sections -->
    <div class="m-20">
      <div class="border-b-2">
        <nav class="flex">
          <a @click="activeTab = 'description'" :class="{ 'border-b-2': activeTab === 'description' }" class="mr-4 cursor-pointer">Description</a>
          <a @click="activeTab = 'moreInfo'" :class="{ 'border-b-2': activeTab === 'moreInfo' }" class="mr-4 cursor-pointer">More Info</a>
          <a @click="activeTab = 'reviews'" :class="{ 'border-b-2': activeTab === 'reviews' }" class="mr-4 cursor-pointer">Reviews</a>
          <a @click="activeTab = 'shipping'" :class="{ 'border-b-2': activeTab === 'shipping' }" class="mr-4 cursor-pointer">Shipping</a>
        </nav>
      </div>

      <!-- Content based on the selected tab -->
      <div v-show="activeTab === 'description'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Product Description</h2>
        <p>{{ singleProduct.product.description }}</p>
      </div>

      <div v-show="activeTab === 'moreInfo'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">More Info</h2>
        <ul>
          <li>Material: {{ singleProduct.product.material }}</li>
          <li>Color: {{ singleProduct.product.color }}</li>
          <!-- Add more info as needed -->
        </ul>
      </div>

      <div v-show="activeTab === 'reviews'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Reviews</h2>
        <!-- Add your review components or content here -->
      </div>

      <div v-show="activeTab === 'shipping'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Shipping</h2>
        <p>{{ singleProduct.product.shippingInfo }}</p>
      </div>
    </div>

    <!-- Similar Products Section -->
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 flex justify-center">SIMILAR PRODUCTS</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="prod in randomSimilarProducts" :key="prod.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="prod.imageSrc" :alt="prod.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="prod.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ prod.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ prod.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ prod.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useSingleProduct } from '../stores/singleProduct.js';
import axios from 'axios';

const singleProduct = useSingleProduct();
const quantity = ref(1);
const currentImage = ref(singleProduct.product.imageSrc);
const activeTab = ref('description');
const similarProducts = ref([]);
const randomSimilarProducts = ref([]);

const fetchSimilarProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/products', {
      params: {
        productId: singleProduct.product.id,
        // Add any other parameters needed for your API request
      },
    });

    similarProducts.value = response.data;
  } catch (error) {
    console.error('Error fetching similar products:', error);
  }
};

onMounted(() => {
  fetchSimilarProducts();
});

watchEffect(() => {
  // Shuffle the array to get a random order
  const shuffledProducts = [...similarProducts.value].sort(() => Math.random() - 0.5);
  // Take the first 4 elements
  randomSimilarProducts.value = shuffledProducts.slice(0, 4);
});
</script>
