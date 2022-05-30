<script setup lang="ts">
const route = useRoute()
const router = useRouter();

const toArticleList = () => {
  router.push({
    name: 'article'
  })
}
</script>

<template>
  <div w="80%" max-w-900px flex="~ col c" mx-auto>
    <button btn @click="toArticleList">back</button>
    <div mt-10>我是子页面 {{ route.params }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
