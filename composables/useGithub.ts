import type { UseFetchOptions } from '#app'

async function useGithub<T>(url: string, opts?: UseFetchOptions<unknown>): Promise<T> {
  const config = useRuntimeConfig().public
  const { data, error } = await useFetch(url, {
    baseURL: config.apiBase,
    ...opts,
  })
  if (!error.value)
    return data.value as T
  else
    return [] as unknown as T
}

export default useGithub
