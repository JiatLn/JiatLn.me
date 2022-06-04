<script setup lang="ts">
const { issueList } = useIssueList()

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
      Article list
    </div>
    <template v-if="issueList.length">
      <div v-for="item, idx in issueList" :key="item.id" flex="~" justify="between" items-center w="80%" mx-auto hover="bg-brand-primary" cursor="pointer" transition="all" py-4px px-8px rounded @click="toDetail(idx + 1)">
        <div>{{ item.title }}</div>
        <div>{{ item.created_at.slice(0, 10) }}</div>
      </div>
    </template>
    <div v-else>
      Empty Data
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
