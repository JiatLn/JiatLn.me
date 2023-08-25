export function formatDate(date: string): string {
  const theDate = new Date(date)
  const monthStr = theDate.toLocaleString('en', { month: 'short' })
  const day = theDate.getDate()
  return `${monthStr} ${day}`
}

export function getYear(date: string): number {
  return new Date(date).getFullYear()
}
