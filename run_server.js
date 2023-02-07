import server from "./apolloServer/index.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ models }),
});

console.log(`🚀  Server ready at: ${url}`);
