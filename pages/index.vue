<script setup lang="ts">
useHead({
  title: 'Home | JiatLn',
})
</script>

<template>
  <main flex="~ col c" w-full>
    <div mx-auto py-10 flex="~ col gap-10px" px-8 text="16px" w-full max-w-800px relative>
      <h1 text="4xl" font="bold sans">
        JiatLn
      </h1>
      <div text="gray/70" font="mono" my-2>
        <h1 class="say-hi">
          Hi, I'm JiatLn.
        </h1>
        <p>A front-end developer. I'm currently learning <span text="orange">Rust</span>.</p>
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
.say-hi {
  overflow: hidden;
  width: 16ch;
  margin: 1em 0;
  font: thin 100% Consolas, Monaco, monospace;
  white-space: nowrap;
  border-right: .1em solid;
  animation: typing 3s steps(16, end),
  cursor-blink .4s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes cursor-blink {
  50% {
    border-color: transparent;
  }
}
</style>
