<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const route = useRoute()
const currentLink = computed<string>(() => route.name as string)

const isDark = useDark()
const toggleDark = useToggle(isDark)

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
  <nav flex-c w-full h-60px mb-10px shadow dark:bg="#1c1e24">
    <div flex="c gap-40px" justify-self-center>
      <nuxt-link v-for="item in menuItems" :key="item.name" :to="item.to" hover="text-brand-primary" transition="all" :class="{ 'text-brand-primary': item.name === currentLink }">
        {{ item.label }}
      </nuxt-link>
    </div>
    <div i-carbon-sun dark:i-carbon-moon text="xl" cursor-pointer ml-100px @click="toggleDark()" />
  </nav>
</template>

<style scoped lang="scss">
</style>
