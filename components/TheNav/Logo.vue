<script setup lang="ts">
const router = useRouter()

function toHome() {
  router.push({
    name: 'index',
  })
}
</script>

<template>
  <img src="/logo.png" h-36px lt-sm:hidden cp @click="toHome">
</template>

<style scoped lang="scss">
html.dark img {
  filter: invert(1);
}
</style>
