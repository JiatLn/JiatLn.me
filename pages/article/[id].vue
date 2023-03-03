<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'

const route = useRoute()
const router = useRouter()

const issueId = computed<number>(() => +route.params.id)
const { issueDetail: blog, loading } = useIssueDetail(issueId)

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

function linkClick() {
  window.open(blog.value?.html_url, '_blank')
}

useHead({
  title: () => `${blog.value?.title || 'Blog'} - JiatLn`,
})
</script>

<template>
  <div w="80%" lt-sm="w-90%" max-w-900px flex="~ col" mx-auto py-10px>
    <div v-if="blog" mb-60px>
      <h2 text="center 3xl" my-20px lt-sm="text-xl my-10px" flex="c">
        <span>{{ blog.title }}</span>
        <div text="20px" alink ml-10px cp i-carbon-link @click="linkClick" title="to github issue" />
      </h2>
      <div flex="c" gap-40px mb-10px>
        <div flex="c" gap-10px>
          <div text="sm brand-primary" class="i-ant-design:user-outlined" />
          <span>{{ blog.user.login }}</span>
        </div>
        <div flex="c" gap-10px>
          <div text="sm brand-primary" class="i-clarity:date-line" />
          <span>{{ blog.created_at.slice(0, 10) }}</span>
        </div>
      </div>
      <article class="markdown-body" p-3 mb-6 min-h-60vh v-html="markRender(blog.body)" />
      <div flex-c>
        <button self-center flex-c gap-8px alink @click="toArticleList">
          <div i-fluent:arrow-step-back-16-filled />
          <span>back</span>
        </button>
      </div>
    </div>
    <TheLoading :loading="loading" />
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
