<script setup lang="ts">
import ThePlum from '~~/components/Home/ThePlum.vue'
// const fn = useServerFn()

// const data = await fn.sayHi('haha')
</script>

<template>
  <div flex-c w-full relative>
    <div text="2xl">
      Hi, I'm JiatLn. 👋
    </div>
    <ClientOnly>
      <ThePlum />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
</style>
