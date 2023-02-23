<script setup lang="ts">

</script>

<template>
  <nav
    class="nav"
    flex-c w-full h-60px fixed z-9999
    bg="white/75" dark:bg="#050505"
  >
    <TheNavMenuItems />
    <TheNavDarkModeBtn />
  </nav>
</template>

<style scoped lang="scss">
.nav {
  backdrop-filter: blur(3px);
}
</style>
