<script setup lang="ts">
const { issueList, loading, refresh } = useIssueList()
</script>

<template>
  <div w="80% lt-sm:94%" max-w-800px flex="~ col" mx-auto mb-60px>
    <div flex="~" gap-20px my-40px lt-sm="my-20px" px-2 text="2xl">
      Post list
    </div>
    <template v-if="loading || issueList.length">
      <ArticleList :article-list="issueList" />
      <TheLoading :loading="loading" />
    </template>
    <div v-else text-center flex="c col" gap-20px h="60%" text="gray/80">
      <div i-mdi:access-point-network-off text="6xl" />
      <div>Network Error</div>
      <div btn hover:op-80 flex-c gap-8px @click="refresh">
        <div i-ic:round-refresh />
        <span>Retry</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
