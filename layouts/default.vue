<script setup lang="ts">
import { isDark } from '@/composables/useDarkMode'
</script>

<template>
  <main dark="bg-#1c1e24">
    <div pb-60px>
      <TheNav />
    </div>
    <div min-h="[calc(100vh-120px)]" flex>
      <slot />
    </div>
    <TheFooter />
    <ClientOnly>
      <TheWave v-show="!isDark" />
    </ClientOnly>
  </main>
</template>

<style scoped lang="scss">
</style>
