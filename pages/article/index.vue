<script setup lang="ts">
import type { ILabel } from '~~/types'

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

function onLabelClick(label: ILabel) {
  const link = `https://github.com/JiatLn/JiatLn.me/labels/${label.name}`
  window.open(link, '_blank')
}
</script>

<template>
  <div w="80% lt-sm:94%" max-w-800px flex="~ col" mx-auto mb-60px>
    <div flex="~" gap-20px my-40px lt-sm="my-20px text-2xl" px-2 text="3xl">
      Post list
    </div>
    <template v-if="loading || issueList.length">
      <div v-for="item in issueList" :key="item.id" w-full flex="~ col" mx-auto mb-30px py-4px px-8px>
        <div flex="~" justify="between" items-baseline>
          <div
            cp text="lg lt-sm:16px gray" flex-1
            hover="color-brand-primary op-80" transition="all"
            @click="toDetail(item.number)"
          >
            {{ item.title }}
          </div>
          <div text="16px lt-sm:12px gray/90" ml-8px>
            {{ new Date(item.created_at).toLocaleDateString() }}
          </div>
        </div>
        <div flex="~ gap-4px" mt-1>
          <span
            v-for="label in item.labels" :key="label.id" :title="label.name"
            :style="{ color: `#${label.color}` }"
            flex-c max-w-100px px-2 text="center 12px" rounded-full line-clamp-1 cp
            hover="op-80" border="~ gray/30"
            @click="onLabelClick(label)"
          >
            {{ label.name }}
          </span>
        </div>
      </div>
      <TheLoading :loading="loading" />
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
