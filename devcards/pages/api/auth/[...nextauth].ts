import NextAuth from 'next-auth'
import OktaProvider from 'next-auth/providers/okta'

/*
const options = {
  // Configure one or more authentication providers
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_DOMAIN
    }),
    // ...add more providers here
  ]
}

const exp = (req, res) => NextAuth(req, res, options);

export default exp
*/
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
