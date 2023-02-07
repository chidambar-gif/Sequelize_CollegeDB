import initialize_sequelize from "./sequelize_init.js";
import associate from "./associateModels.js";
import server from "./apolloServer/index.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const sequelize = await initialize_sequelize();

const models = associate(sequelize);

await sequelize.sync({ alter: true });
console.log("Models are now Synchronized");

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ models }),
});

console.log(`🚀  Server ready at: ${url}`);
