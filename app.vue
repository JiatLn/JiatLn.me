<script setup>
useHead({
  title: 'JiatLn\'s Page',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/icon.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html.dark {
  color: white;
  background-color: #1a1a1a;

  color-scheme: dark;
}
</style>
