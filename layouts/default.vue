<script setup lang="ts"></script>

<template>
  <main bg="#282c34" text-white>
    <TheNav />
    <div min-h="[calc(100vh-120px)]" flex-c>
      <slot />
    </div>
    <TheFooter />
  </main>
</template>

<style scoped lang="scss">
</style>
