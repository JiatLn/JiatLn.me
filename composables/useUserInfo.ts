import { api } from '~~/app/api'
import type { IUser } from '~~/types'

export function useUserInfo() {
  const userInfo = ref<IUser | null>(null)
  const loading = ref(false)

  async function refresh() {
    loading.value = true
    const data = await useGithub<IUser>(api.userInfo)
    if (data)
      userInfo.value = data
    loading.value = false
  }

  refresh()

  return {
    userInfo,
    loading,
    refresh,
  }
}
