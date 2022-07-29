<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'

const route = useRoute()
const router = useRouter()

const issueId = computed<number>(() => +route.params.id)
const { issueDetail: article } = useIssueDetail(issueId)

const toArticleList = () => {
  router.push({
    name: 'article',
  })
}

const md = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
      }
      catch (__) { }
    }

    return '' // use external default escaping
  },
})

const markRender = (content: string) => {
  const result = md.render(content)
  return result
}
</script>

<template>
  <div w="80%" max-w-900px flex="~ col" mx-auto py-10px>
    <div v-if="article">
      <h2 text="center 4xl " my-20px>
        {{ article.title }}
      </h2>
      <div flex="c" gap-40px mb-10>
        <div flex="c" gap-10px>
          <div text="sm brand-primary" class="i-ant-design:user-outlined" />
          <span>{{ article.user.login }}</span>
        </div>
        <div flex="c" gap-10px>
          <div text="sm brand-primary" class="i-clarity:date-line" />
          <span>{{ article.created_at.slice(0, 10) }}</span>
        </div>
      </div>
      <article class="markdown-body" p-3 mb-6 min-h-60vh v-html="markRender(article.body)" />
    </div>
    <div v-else flex-c h-full>
      <div i-eos-icons:loading />
    </div>
    <button self-start flex-c gap-8px hover:color-brand-primary @click="toArticleList">
      <div i-fluent:arrow-step-back-16-filled />
      <span>Back</span>
    </button>
  </div>
</template>

<style lang="scss">
@import '@/styles/vue.scss';
@import '@/styles/vue-dark.scss';

.markdown-body {

  pre {
    --select-text-bg-color: rgba(223, 197, 223) !important;
    background-color: #1a1b26;
    padding: 14px;
    color: #9aa5ce;
    border-radius: 8px;
    overflow: auto;

    code {
      background-color: transparent;
    }
  }

}
</style>

