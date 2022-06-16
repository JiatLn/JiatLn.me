<script setup lang="ts">
</script>

<template>
  <main>
    <TheNav />
    <div min-h="[calc(100vh-120px)]" flex>
      <slot />
    </div>
    <TheFooter />
    <ClientOnly>
      <ThePlum />
    </ClientOnly>
  </main>
</template>

<style scoped lang="scss">
</style>
