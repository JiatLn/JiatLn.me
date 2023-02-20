<script setup>
useHead({
  title: 'JiatLn\'s Page',
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon.png' },
  ],
  meta: [
    { property: 'og:title', content: 'JiatLn' },
    { name: 'description', content: 'JiatLn\'s Page' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

</style>
