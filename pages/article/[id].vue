<script setup lang="ts">
import MarkdownIt from 'markdown-it'

const route = useRoute()
const router = useRouter()

const issueId = computed<number>(() => +route.params.id)
const { issueDetail: article } = useIssueDetail(issueId)

const toArticleList = () => {
  router.push({
    name: 'article',
  })
}

const markRender = (content: string) => {
  const md = new MarkdownIt('commonmark');
  const result = md.render(content);
  return result
}
</script>

<template>
  <div w="80%" max-w-900px flex="~ col" mx-auto py-10px>
    <button self-start flex-c gap-8px @click="toArticleList">
      <div i-fluent:arrow-step-back-16-filled />
      <span>Back</span>
    </button>
    <div v-if="article">
      <h2 text="center 4xl teal-300" my-20px>
        {{ article.title }}
      </h2>
      <div flex="c" gap-40px mb-10>
        <div flex="c" gap-10px>
          <div text="xl brand-primary" class="i-ant-design:user-outlined" />
          <span>{{ article.user.login }}</span>
        </div>
        <div flex="c" gap-10px>
          <div text="xl brand-primary" class="i-clarity:date-line" />
          <span>{{ article.created_at.slice(0, 10) }}</span>
        </div>
      </div>
      <article class="markdown-body" p-3 border="~ gray/50" rounded-6px min-h-60vh v-html="markRender(article.body)" />
    </div>
  </div>
</template>

<style  lang="scss">
@import "@/styles/markdown.scss"

</style>

