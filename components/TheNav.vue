<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const route = useRoute()
const currentLink = computed<string>(() => route.name as string)

interface MenuItem {
  name: string
  label: string
  to: RouteLocationRaw
}
const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    name: 'index',
    to: { name: 'index' },
  },
  {
    label: 'Articles',
    name: 'article',
    to: { name: 'article' },
  },
  {
    label: 'About Me',
    name: 'about',
    to: { name: 'about' },
  },
])
</script>

<template>
  <nav flex="~ c gap-20px" h-60px bg="#1c1e24">
    <nuxt-link v-for="item in menuItems" :key="item.name" :to="item.to" hover="text-brand-primary" transition="all" :class="{ 'text-brand-primary': item.name === currentLink }">
      {{ item.label }}
    </nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
</style>
