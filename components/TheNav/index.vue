<script setup lang="ts">

</script>

<template>
  <nav
    class="nav"
    flex-c w-full h-60px border-b="~ gray/30" bg="white/75"
    fixed z-9999
    dark:bg="#1c1e24"
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
