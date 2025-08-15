<script setup>
import Header from "@/components/reusable/header/Header.vue";
import Footer from "@/components/reusable/footer/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
