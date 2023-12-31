import { defineConfig } from 'cypress'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: process.env.HOST,
    screenshotOnRunFailure: false,
  },
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
})
