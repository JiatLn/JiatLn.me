<script setup lang="ts">
import { toggleDark } from '@/composables/useDarkMode'
</script>

<template>
  <div
    lg="fixed right-30px"
    text="20px"
    i-line-md:moon-filled-to-sunny-filled-loop-transition dark:i-line-md:moon-rising-filled-alt-loop cp ml-4
    @click="() => toggleDark()"
  />
</template>

<style scoped lang="scss"></style>
