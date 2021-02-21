import { ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from '../../utils/api/typeDefs'
import { resolvers } from '../../utils/api/resolvers'
import Cors from 'micro-cors'
import { applyMiddleware } from 'graphql-middleware'
import { log } from '../../utils/api/log'
import { permissions } from '../../utils/api/permissions'
const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), log, permissions)
// cors config
const cors = Cors()
export const config = {
   api: {
      bodyParser: false
   }
}
const handler = new ApolloServer({
   schema
}).createHandler({
   path: '/api/graphql'
})

export default cors((req, res) => {
   if (req.meathod === 'OPTIONS') {
      return res.status(200).send()
   }
   return handler(req, res)
})