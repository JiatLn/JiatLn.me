<script setup lang="ts">
import type { IIssue, ILabel } from '~~/types'

const props = defineProps<{
  articleList: IIssue[]
}>()

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
  <div v-for="article in props.articleList" :key="article.id" w-full flex="~ col" mx-auto mb-30px py-4px px-8px>
    <div flex="~" justify="between" items-baseline>
      <div text="lg lt-sm:16px" flex-1>
        <span alink @click="toDetail(article.number)">{{ article.title }}</span>
      </div>
      <div text="16px lt-sm:12px gray/90" ml-8px>
        {{ new Date(article.created_at).toLocaleDateString() }}
      </div>
    </div>
    <div flex="~ gap-4px" mt-1>
      <span
        v-for="label in article.labels" :key="label.id" :title="label.name"
        :style="{ color: `#${label.color}` }"
        flex-c max-w-100px px-2 text="center 12px" rounded-full line-clamp-1 cp
        hover="op-80" border="~ gray/30"
        @click="onLabelClick(label)"
      >
        {{ label.name }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
