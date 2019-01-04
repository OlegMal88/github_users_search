const USER_LIST_USER_FAILURE_ERROR_MESSAGE: string = '[UserListEffects] Error has been occured while fetching user.';

interface UserListUserInfoExtended {
  avatar_url: string,
  bio: string,
  blog: string,
  company: string,
  created_at: string,
  email: string,
  events_url: string,
  followers: number,
  followers_url: string,
  following: number,
  following_url: string,
  gists_url: string,
  gravatar_id: string,
  hireable: boolean,
  html_url: string,
  id: number,
  location: string,
  login: string,
  name: string,
  node_id: string,
  organizations_url: string,
  public_gists: number,
  public_repos: number,
  received_events_url: string,
  repos_url: string,
  site_admin: boolean,
  starred_url: string,
  subscriptions_url: string,
  type: string,
  updated_at: string,
  url: string
}

interface UserListUsersInfo {
  total_count: number;
  incomplete_results: boolean;
  items: UserListUserBasic[];
}

interface UserListUserBasic {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
}

export {
  UserListUserInfoExtended,
  UserListUsersInfo,
  UserListUserBasic,
  USER_LIST_USER_FAILURE_ERROR_MESSAGE
};
