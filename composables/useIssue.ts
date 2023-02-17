import type { Ref } from 'vue'
import { api } from '~~/app/api'
import type { IIssue } from '~~/types'

export function useIssueList() {
  const issueList = ref<IIssue[]>([])
  const loading = ref(false)
  const refresh = async () => {
    loading.value = true
    const data = await useGithub<IIssue[]>(api.issueList)
    if (data)
      issueList.value = data
    loading.value = false
  }
  refresh()
  return {
    issueList,
    loading,
    refresh,
  }
}

export function useIssueDetail(issueId: Ref<number>) {
  const issueDetail = ref<IIssue | null>(null)
  const loading = ref(false)
  const refresh = async () => {
    loading.value = true
    const data = await useGithub<IIssue>(api.issueDetail(issueId.value))
    if (data)
      issueDetail.value = data
    loading.value = false
  }
  refresh()
  return {
    issueDetail,
    loading,
    refresh,
  }
}
