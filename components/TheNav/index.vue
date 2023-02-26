<script setup lang="ts">

</script>

<template>
  <nav
    class="nav"
    flex="~" items-center justify-between w-full h-60px fixed z-9999 px-20px
    bg="white/75" dark:bg="#050505"
  >
    <TheNavLogo />
    <TheNavMenuItems />
    <TheNavDarkModeBtn />
  </nav>
</template>

<style scoped lang="scss">
.nav {
  backdrop-filter: blur(3px);
}
</style>
