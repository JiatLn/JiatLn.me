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
  background-color: #282c34;

  color-scheme: dark;
}
</style>