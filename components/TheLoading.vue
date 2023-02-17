<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading" flex="c gap-8px" h="60%">
    <div i-eos-icons:loading />
    <span>Loading...</span>
  </div>
</template>

<style scoped lang="scss"></style>
