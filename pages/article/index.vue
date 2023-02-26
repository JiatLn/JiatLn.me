<script setup lang="ts">
const { issueList, loading, refresh } = useIssueList()

useHead({
  title: 'Blog | JiatLn',
})
</script>

<template>
  <div w="80% lt-sm:94%" max-w-800px flex="~ col" mx-auto mb-60px>
    <div my-40px lt-sm="my-20px">
      <div flex="~" gap-20px mb-10px text="2xl">
        Blogs
      </div>
      <div font="italic" op-50>
        List of blogs that I am writing ..
      </div>
    </div>
    <template v-if="loading || issueList.length">
      <ArticleList :article-list="issueList" />
      <TheLoading :loading="loading" />
    </template>
    <div v-else text-center flex="c col" gap-20px h="60%">
      <div i-mdi:access-point-network-off text="6xl gray/80" />
      <div text="gray/80">
        Network Error
      </div>
      <div btn hover:op-80 flex-c gap-8px @click="refresh">
        <div i-ic:round-refresh />
        <span>Retry</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
