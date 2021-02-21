import { initAuth0 } from '@auth0/nextjs-auth0'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig();
const { auth, cookieSecret } = serverRuntimeConfig
export default initAuth0({
   ...auth,
   session: {
      cookieSecret: cookieSecret,
      cookieLifetime: 60 * 60 * 8, //8 hours
      storeIdToken: false,
      storeAccessToken: false,
      storeRefereshToken: false
   },
   oidcClient: {
      httpTimeout: 2500,
      clockTolerance: 10000
   }
})