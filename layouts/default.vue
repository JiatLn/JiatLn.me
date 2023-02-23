<script setup lang="ts">
import { isDark } from '@/composables/useDarkMode'
</script>

<template>
  <main dark="bg-#050505">
    <div pb-60px>
      <TheNav />
    </div>
    <!-- 100vh - nav - footer -->
    <div min-h="[calc(100vh-60px-50px)]" flex>
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
