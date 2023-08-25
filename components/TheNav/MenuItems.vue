<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const route = useRoute()
const currentLink = computed<string>(() => route.name as string)

interface MenuItem {
  name: string
  label: string
  icon: string
  to: RouteLocationRaw
}
const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    name: 'index',
    to: { name: 'index' },
    icon: 'i-line-md:home-md-twotone-alt',
  },
  {
    label: 'Blog',
    name: 'article',
    to: { name: 'article' },
    icon: 'i-mdi:post-outline',
  },
  {
    label: 'Projects',
    name: 'project',
    to: { name: 'project' },
    icon: 'i-ant-design:project-twotone',
  },
  {
    label: 'About',
    name: 'about',
    to: { name: 'about' },
    icon: 'i-mdi:about',
  },
])
</script>

<template>
  <div flex="c gap-20px" justify-self-center>
    <nuxt-link v-for="item in menuItems" :key="item.name" :to="item.to" :title="item.label" px-3 py-2 rounded sm:min-w-80px flex-c hover="bg-brand-primary/20" transition="all" :class="{ 'text-brand-primary': item.name === currentLink }">
      <div :class="item.icon" text="xl" />
      <span lt-sm:hidden ml-6px font="mono" text="md">{{ item.label }}</span>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
</style>
