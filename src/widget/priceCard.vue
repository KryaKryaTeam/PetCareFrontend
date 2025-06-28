<template>
    <div class="tariff-card">
      <h2>{{ title }}</h2>
      <p>{{ price }}</p>
      <ul>
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: true
    }
  })
  </script>
  