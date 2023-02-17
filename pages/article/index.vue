<script setup lang="ts">
const { issueList, loading, refresh } = useIssueList()

const router = useRouter()
const toDetail = (id: number) => {
  router.push({
    name: 'article-id',
    params: {
      id,
    },
  })
}
</script>

<template>
  <div w="80%" max-w-900px flex="~ col" mx-auto>
    <div flex="~ c" gap-20px my-80px text="center 3xl" font-bold>
      Post list
    </div>
    <template v-if="loading || issueList.length">
      <div v-for="item in issueList" :key="item.id" flex="~" justify="between" items-center w="80%" mx-auto hover="border-brand-primary" border-b="~ gray/50 dashed" cursor="pointer" transition="all" py-4px px-8px rounded @click="toDetail(item.number)">
        <div>{{ item.title }}</div>
        <div>{{ item.created_at.slice(0, 10) }}</div>
      </div>
      <div v-if="loading" flex-c h-full>
        <div i-eos-icons:loading />
      </div>
    </template>
    <div v-else text-center flex-c gap-20px>
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
