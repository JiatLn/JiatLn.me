<script setup lang="ts">
import { toggleDark } from '@/composables/useDarkMode'
</script>

<template>
  <div
    text="20px"
    i-line-md:moon-filled-to-sunny-filled-loop-transition dark:i-line-md:moon-rising-filled-alt-loop cp ml-8
    @click="() => toggleDark()"
  />
</template>

<style scoped lang="scss"></style>
