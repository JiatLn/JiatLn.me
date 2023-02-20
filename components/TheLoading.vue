<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading" flex="c col gap-30px" h="60%" select-none>
    <div i-eos-icons:bubble-loading text="5xl" />
    <span>loading...</span>
  </div>
</template>

<style scoped lang="scss"></style>
