import NextAuth from 'next-auth'
import OktaProvider from 'next-auth/providers/okta'

// env values have no guaranteed types, so we need to cast them to strings
declare var process : {
  env: {
    OKTA_CLIENTID: string,
    OKTA_CLIENTSECRET: string,
    OKTA_DOMAIN: string,
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_DOMAIN
    }),
    // ...add more providers here
  ],
})
