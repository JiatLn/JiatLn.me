<script setup lang="ts"></script>

<template>
  <div text-center flex="c col" h-full>
    <div text="2xl" border-b pb-10px mb-10px>
      About me
    </div>
    <NuxtLink :to="{ name: 'resume' }" text-brand-primary>
      Resume
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
</style>
