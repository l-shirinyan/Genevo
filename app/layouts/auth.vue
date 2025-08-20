<script setup>
import Header from "@/components/reusable/header/Header.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 bg-[url('/images/login-mobile.png')] md:bg-[url('/images/login-tablet-bg.png')] xl:bg-white bg-cover bg-center" >
      <slot />
    </main>
  </div>
</template>
