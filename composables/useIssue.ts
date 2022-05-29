import { api } from '~~/app/api'
import type { IIssue } from '~~/types'

export function useIssueList() {
  const issueList = ref<IIssue[]>([])
  const loading = ref(false)
  const refresh = async () => {
    loading.value = true
    const data = await useGithub<IIssue[]>(api.issueList)
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
