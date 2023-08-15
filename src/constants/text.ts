const TEXT = {
  HOME_TITLE: 'Happening now',
  HOME_SUBTITLE: 'Join Twitter today',
  SIGN_UP_GOOGLE: 'Sign up with Google',
  SIGN_UP_EMAIL: 'Sign up with phone or email',
  POLICY_TEXT: ['By singing up you agree to the ', ` and `, `, including `],
  TERM: 'Terms of Service',
  POLICY: 'Privacy Policy',
  COOKIE: 'Cookie Use',
  LOGIN_TEXT: `Already have an account? `,
  LOGIN: 'Log in',
  LOGOUT: 'Log out',
  SIGN_UP: 'Sign Up To Twitter',
  SAVE: 'Save',
  CHANGE_PASSWORD: 'Change password',

  PASSWORD_ERROR: 'Wrong password',
  LOGIN_ERROR: 'User not found',
  GOOGLE_ERROR: 'Google account error',
  EMAIL_EXIST_ERROR: 'Email already exist',
  PHONE_EXIST_ERROR: 'Phone number already exist',
  LOGIN_REQUIRED: 'Email / Phone is required',
  LOGIN_INVALID: 'Email / Phone is invalid',
  PASSWORD_LENGTH: 'Required length is 8',
  DATE_ERROR: 'Invalid date',

  EMAIL_PLACEHOLDER: 'Email',
  PHONE_PLACEHOLDER: 'Phone number',
  NAME_PLACEHOLDER: 'Name',
  LOGIN_PLACEHOLDER: 'Phone, email',
  PASSWORD_PLACEHOLDER: 'Password',
  LASTNAME_PLACEHOLDER: 'Last name',
  TELEGRAM_PLACEHOLDER: 'Telegram',
  DATE_PLACEHOLDER: ['Day', 'Month', 'Year'],

  LOGIN_HEADER: 'Log in to Twitter',
  CREATE_ACCOUNT: 'Create an account',
  GENDER_PLACEHOLDER: 'Gender',
  USE_EMAIL: 'Use email',
  BIRTH: 'Date of birth',
  TWEET_BUTTON: 'Tweet',
  TWEETS: 'Tweets',
  EDIT: 'Edit profile',
  SEARCH_TWEET: 'Search Twitter',
  AGE: 'year old',
  BIRTH_TEXT: `Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.`,
}

const ALT = {
  LOGO: 'twitter logo',
  GOOGLE: 'google logo',
  BACK_TWITTER: 'back twitter',
  ARROW: 'Dropdown arrow',
  USER: 'User',
  COVER: 'Cover',
}

const ERRORS: { [identifier: string]: string } = {
  'Firebase: Error (auth/wrong-password).': TEXT.PASSWORD_ERROR,
  'Firebase: Error (auth/user-not-found).': TEXT.LOGIN_ERROR,
  EMAIL_EXISTS: TEXT.EMAIL_EXIST_ERROR,
  'Firebase: Error (auth/email-already-in-use).': TEXT.EMAIL_EXIST_ERROR,
}

export { ALT, ERRORS, TEXT }