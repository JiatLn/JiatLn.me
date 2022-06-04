<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const issueId = computed<number>(() => +route.params.id)
const { issueDetail: article } = useIssueDetail(issueId)

const toArticleList = () => {
  router.push({
    name: 'article',
  })
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
      <div flex="c" gap-40px>
        <div flex="c" gap-10px>
          <div text="xl brand-primary" class="i-ant-design:user-outlined" />
          <span>{{ article.user.login }}</span>
        </div>
        <div flex="c" gap-10px>
          <div text="xl brand-primary" class="i-clarity:date-line" />
          <span>{{ article.created_at.slice(0, 10) }}</span>
        </div>
      </div>
      <div flex="c" gap-20px my-20px>
        <div v-for="label in article.labels" :key="label.id" text="gray hover:brand-primary" py-4px px-12px border rounded-10px flex-c cursor-pointer>
          {{ label.name }}
        </div>
      </div>
      <div border="~ gray-700" min-h-60vh>
        <div v-html="article.body" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>

