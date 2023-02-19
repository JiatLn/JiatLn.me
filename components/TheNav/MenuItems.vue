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
  <div flex="c gap-20px" justify-self-center>
    <nuxt-link
      v-for="item in menuItems" :key="item.name" :to="item.to"
      px-2 py-1 rounded sm:min-w-80px flex-c
      hover="bg-brand-primary/20" transition="all"
      :class="{ 'text-brand-primary': item.name === currentLink }"
    >
      {{ item.label }}
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss"></style>
