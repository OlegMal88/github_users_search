interface UserBasic {
  login: string;
  url: string;
  avatar_url: string;
  repos_url: string;
  followers_url: string;
}

interface User extends UserBasic {
  name: string;
  email: string;
  location: string;
  followers: string;
}

export {UserBasic, User};
