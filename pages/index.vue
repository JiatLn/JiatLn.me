<script setup lang="ts">
const { userInfo } = useUserInfo()

function onAvatarClick() {
  if (!userInfo.value)
    return
  window.open(userInfo.value.html_url, '_blank')
}

useHead({
  title: 'Home | JiatLn',
})
</script>

<template>
  <main flex="~ col c" w-full>
    <div mx-auto py-10 flex="~ col gap-10px" px-8 text="16px" w-full max-w-800px relative>
      <div flex="~" items-center gap-20px>
        <div v-if="userInfo" w-72px h-72px>
          <img async :src="userInfo.avatar_url" alt="avatar" border="dashed 2px transparent" hover="border-red animate-running" rounded-full w-full h-full cp transition-all shadow title="click to github homepage" @click="onAvatarClick">
        </div>
        <h1 text="4xl" font="bold sans">
          JiatLn
        </h1>
      </div>
      <div my-2>
        <h1 font="mono" class="say-hi">
          Hi, I'm JiatLn.
        </h1>
        <p>A front-end developer. I'm currently learning <span text="orange">Rust</span>.</p>
      </div>
      <ContactMe />
      <TechStack />
      <p mt-1>
        <NuxtLink to="/article" class="text-brand-primary" alink>
          Here
        </NuxtLink>
        are some of my blogs.
      </p>
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
