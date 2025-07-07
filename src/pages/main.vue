<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AuthGoogleButton from '@/shared/ui/authGoogleButton.vue';


</script>

<template>
  <header>
    <div>
      <button>singup</button>
      <button>login</button>
    </div>
  </header>
  <main>
    <h1>Welcome to petcare board</h1>
    <p>the board for managing anything what need your pet.</p>
    <p>Eat time, helthy and more</p>
    <button>lets`go to prices</button>
    <AuthGoogleButton />
  </main>
</template>
