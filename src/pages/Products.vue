<template>
  <q-page class="category-page grid grid-cols-12 grid-rows-1 gap-4">
    <!-- Left Sidebar with Filters -->
    <div class="filters col-span-3">
      <!-- Filters go here -->
      <q-list>
        <!-- Text Search Filter -->
        <q-item>
          <q-input v-model="searchText" placeholder="Search Product Name" dense />
        </q-item>

        <!-- Price Range Filter -->
        <q-item class="flex !flex-col">
          <div class="text-bold">Choose Price Range</div>
          <q-range
            v-model="priceRange"
            :min="priceRange.min"
            :max="priceRange.max"
            :step="4"
            :left-label-value="priceRange.min + '$'"
            :right-label-value="priceRange.max + '$'"
            label-always
            switch-label-side
            color="primary"
          />
        </q-item>

        <!-- Choose Color Filter -->
        <q-item class="flex !flex-col">
          <div class="text-bold">Choose Color</div>
          <q-checkbox
            v-for="color in colors"
            :key="color.id"
            :label="color.name"
            v-model="color.enabled"
          />
        </q-item>

      </q-list>
    </div>

    <!-- Product List -->
    <div class="m-20 col-start-4 col-span-9">
      <div class="grid grid-cols-12 gap-4">
        <ProductCard
          v-for="product in displayedProducts"
          :key="product.id"
          :product="product"
          class="col-span-3"
        />
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination mx-20 my-5 col-start-4 col-span-9">
      <q-pagination v-model="currentPage" :max="totalPages" @input="updatePage" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue';

const colors = ref([]);
const pageSize = 20;
const totalPages = ref(1);
const products = ref([]);
const currentPage = ref(1);
const searchText = ref('');
const priceRange = ref({
  min: 0,
  max: 240
});

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    products.value = response.data;

    // Extract unique colors from products
    const uniqueColors = Array.from(new Set(products.value.map(product => product.color)));

    // Update colors array
    colors.value = uniqueColors.map((color, index) => ({
      id: index + 1,
      name: color,
      enabled: false
    }));

    // Find the minimum and maximum prices from the API data
    const minPrice = Math.min(...products.value.map(product => parseFloat(product.price.replace('$', ''))));
    const maxPrice = Math.max(...products.value.map(product => parseFloat(product.price.replace('$', ''))));

    // Update the priceRange values
    priceRange.value.min = minPrice;
    priceRange.value.max = maxPrice;

    totalPages.value = Math.ceil(products.value.length / pageSize);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const displayedProducts = computed(() => {
  if (!Array.isArray(products.value)) {
    return [];
  }

  const startIndex = Math.max((currentPage.value - 1) * pageSize, 0);
  const endIndex = startIndex + pageSize;

  if (searchText.value) {
    return products.value.filter((item) => item.name.toLowerCase().includes(searchText.value));
  }

  const selectedColors = colors.value.filter((color) => color.enabled).map((color) => color.name);

  if (selectedColors.length > 0) {
    return products.value.filter((item) => selectedColors.includes(item.color)).slice(startIndex, endIndex);
  }

  if (priceRange.value && priceRange.value.min !== undefined && priceRange.value.max !== undefined) {
    const minPrice = parseFloat(priceRange.value.min);
    const maxPrice = parseFloat(priceRange.value.max);

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      const filteredProducts = products.value.filter((item) => {
        const itemPrice = parseFloat(item.price.replace('$', ''));
        return itemPrice >= minPrice && itemPrice <= maxPrice;
      });

      return filteredProducts.slice(startIndex, endIndex);
    }
  }

  return products.value.slice(startIndex, endIndex);
});

const updatePage = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  fetchProducts();
});
</script>
