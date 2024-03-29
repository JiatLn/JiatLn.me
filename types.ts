export interface IIssue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: Partial<IUser>
  labels: ILabel[]
  state: string
  locked: boolean
  assignee: any
  assignees: any[]
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  active_lock_reason: any
  body: string
  timeline_url: string
  performed_via_github_app: any
  state_reason: any
}

export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: any
  hireable: any
  bio: string
  twitter_username: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface ILabel {
  id: number
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string
}
