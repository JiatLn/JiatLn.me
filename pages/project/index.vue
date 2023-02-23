<script setup lang="ts">
interface Project {
  name: string
  description: string
  github: string
  demoLink?: string
  icon?: string
  class?: string
}

const projectList = ref<Project[]>([
  {
    name: 'vvtt',
    description: 'VVTT is means Vite-Vue-Ts-Template :)',
    github: 'https://github.com/JiatLn/vvtt',
    icon: 'i-ph:package-duotone',
  },
  {
    name: 'color-art',
    description: 'A rust crate for working with colors and color spaces.',
    github: 'https://github.com/JiatLn/color-art',
    icon: 'i-ic:baseline-color-lens',
  },
  {
    name: 'vue-fliplay',
    description: 'A Vue 3 component, to make your list with animation if binded data update.',
    github: 'https://github.com/JiatLn/vue-fliplay',
    icon: 'i-material-symbols:movie-filter',
  },
  {
    name: 'yys-yuhun-simulator',
    description: '一个在线的阴阳师赌魂强魂模拟器',
    github: 'https://github.com/JiatLn/yys-yuhun-simulator',
    icon: 'i-fluent-emoji-high-contrast:cat-with-wry-smile',
  },
  {
    name: 'ri',
    description: 'A rust version ni.',
    github: 'https://github.com/JiatLn/ri',
    icon: 'i-teenyicons:npm-outline',
  },
  {
    name: 'unocss-reverse',
    description: '[WIP] According to css attribute generated unocss value.',
    github: 'https://github.com/JiatLn/unocss-reverse',
    icon: 'i-logos:unocss',
    class: 'rotate-45',
  },
])

useHead({
  title: 'Projects | JiatLn',
})
</script>

<template>
  <div w="80% lt-sm:94%" max-w-800px flex="~ col" mx-auto mb-60px>
    <div my-40px lt-sm="my-20px">
      <div flex="~" gap-20px mb-10px text="2xl">
        Projects
      </div>
      <div font="italic" op-50>
        List of projects that I am proud of ..
      </div>
    </div>
    <div class="project-grid">
      <a
        v-for="proj in projectList" :key="proj.name"
        flex="~ gap-20px" items-center
        :href="proj.github" target="_blank"
        rounded py2 px4 hover="bg-gray/10" transition="~ duration-300 ease-in"
      >
        <div text-4xl :class="[proj?.icon || 'i-carbon-unknown', proj.class]" />
        <div flex="~ col 1">
          <div text="18px" mb-2>
            {{ proj.name }}
          </div>
          <div text="14px op-50" font-italic>
            {{ proj.description }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-grid {
  display: grid;

  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
