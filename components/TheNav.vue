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
    label: 'Article',
    name: 'article',
    to: { name: 'article' },
  },
  {
    label: 'About',
    name: 'about',
    to: { name: 'about' },
  },
])
</script>

<template>
  <nav flex="~ c gap-20px" h-40px text="gray-600">
    <nuxt-link v-for="item in menuItems" :key="item.name" :to="item.to" hover="text-brand-primary" transition="all" :class="{ active: item.name === currentLink }">
      {{ item.label }}
    </nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
.active {
  @apply text-brand-primary
}
</style>
