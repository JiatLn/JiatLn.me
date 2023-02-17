<script setup lang="ts">
</script>

<template>
  <main>
    <div pb-60px>
      <TheNav />
    </div>
    <div min-h="[calc(100vh-120px)]" flex>
      <slot />
    </div>
    <TheFooter />
    <ClientOnly>
      <TheWave />
    </ClientOnly>
  </main>
</template>

<style scoped lang="scss">
</style>
