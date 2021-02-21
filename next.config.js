require('dotenv').config();

const {
   AUTH0_CLIENTID,
   AUTH0_DOMAIN,
   AUTH0_CLIENT_SECRET,
   AUTH0_SCOPE,
   AUTH0_COOKIE,
   BACKEND_ADDRESS
} = process.env;

module.exports = {
   publicRuntimeConfig : {
      BACKEND_URL: `${BACKEND_ADDRESS}/api/graphql`
   },
   serverRuntimeConfig : {
      auth: {
         clientId:AUTH0_CLIENTID,
         domain:AUTH0_DOMAIN,
         scope:AUTH0_SCOPE,
         clientSecret: AUTH0_CLIENT_SECRET,
         redirectUri:`${BACKEND_ADDRESS}/api/graphql`,
         postLogoutRedirectUri:`${BACKEND_ADDRESS}/`
      },
      cookieSecret:AUTH0_COOKIE
   }
}

