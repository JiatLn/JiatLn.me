<script setup lang="ts">
const { issueList } = useIssueList()
</script>

<template>
  <div w="80%" max-w-900px flex="~ col" mx-auto>
    <div flex="~ c" gap-20px my-80px text="center 3xl" font-bold>
      Article list
    </div>
    <template v-if="issueList.length">
      <div v-for="item in issueList" :key="item.id" flex="~" justify="between" items-center w="80%">
        <div>{{ item.title }}</div>
        <div>{{ item.created_at }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
</style>
