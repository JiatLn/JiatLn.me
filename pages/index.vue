<script setup lang="ts">
</script>

<template>
  <main flex="~ col c" w-full>
    <div mx-auto py-10 flex="~ col gap-10px" px-8 text="16px" w-full max-w-800px relative>
      <h1 text="4xl" font="bold sans">
        JiatLn
      </h1>
      <div text="#555" my-2>
        Hi, I'm JiatLn. 👋<br>
        A front-end developer. I’m currently learning <span text="orange">Rust</span>.
      </div>
      <ContactMe />
      <TechStack />
      <div text="gray/90" mt-1>
        Here are some of my
        <NuxtLink to="/article" text="brand-primary" hover="op60">
          posts
        </NuxtLink>.
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
</style>
