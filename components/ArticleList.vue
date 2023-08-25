<script setup lang="ts">
import type { IIssue, ILabel } from '~~/types'

const props = defineProps<{
  articleList: IIssue[]
}>()

const router = useRouter()
function toDetail(id: number) {
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

function showYear(index: number) {
  if (index === 0)
    return true
  const prev = props.articleList[index - 1]
  const current = props.articleList[index]
  return getYear(prev.created_at) !== getYear(current.created_at)
}
</script>

<template>
  <div v-for="(article, index) in props.articleList" :key="article.id" w-full flex="~ col" mx-auto mb-30px py-4px px-8px>
    <div relative flex="~" justify="between" items-start>
      <div text="lg lt-sm:16px" flex-1>
        <span alink @click="toDetail(article.number)">{{ article.title }}</span>
      </div>
      <div text="16px lt-sm:12px gray/90" ml-8px>
        <span>{{ formatDate(article.created_at) }}</span>
        <div v-if="showYear(index)" class="year">
          {{ getYear(article.created_at) }}
        </div>
      </div>
    </div>
    <div flex="~ gap-4px" mt-1>
      <span v-for="label in article.labels" :key="label.id" :title="label.name" :style="{ color: `#${label.color}` }" flex-c max-w-100px px-2 text="center 12px" rounded line-clamp-1 cp hover="op-80" border="~ gray/30" @click="onLabelClick(label)">
        {{ label.name }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.year {
  @apply font-sans absolute bottom-0 right-0 leading-0 text-stroke-1 text-stroke-gray/40 text-7em font-bold text-transparent select-none;
}
</style>
