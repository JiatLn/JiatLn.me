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
    label: 'Posts',
    name: 'article',
    to: { name: 'article' },
  },
  {
    label: 'Projects',
    name: 'project',
    to: { name: 'project' },
  },
  {
    label: 'About',
    name: 'about',
    to: { name: 'about' },
  },
])
</script>

<template>
  <nav flex-c w-full h-60px mb-10px shadow dark:bg="#1c1e24">
    <div flex="c gap-40px" justify-self-center>
      <nuxt-link v-for="item in menuItems" :key="item.name" :to="item.to" hover="text-brand-primary" transition="all" :class="{ 'text-brand-primary': item.name === currentLink }">
        {{ item.label }}
      </nuxt-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
</style>
