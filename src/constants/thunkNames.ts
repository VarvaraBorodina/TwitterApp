export const THUNK_NAMES = {
  AUTH: {
    USER_SIGN_UP: 'user/signUp',
    USER_LOGIN_WITH_EMAIL: 'user/logInWithEmail',
    USER_LOGIN_WITH_PHONE_NUMBER: 'user/logInWithPhoneNumber',
    USER_LOGIN_WITH_GOOGLE: 'user/logInWithGoogle',
    USER_LOGOUT: 'user/logOut',
  },
  TWEETS: {
    ADD_TWIT: 'tweets/addTweet',
    GET_ALL_TWEETS: 'tweets/getAllTweets',
    DELETE_TWEET: 'tweets/deleteTweet',
    TOGGLE_LIKE: 'tweets/toggleLike',
  },
  USER: {
    CHANGE_USER: 'user/change',
  },
}
