import { Sequelize } from "sequelize";
import { details } from "./details.js";

const initialize_sequelize = async () => {
  const sequelize = new Sequelize(
    details.db_name,
    details.user,
    details.password,
    {
      dialect: details.dialect,
      define: {
        freezeTableName: true,
        timestamps: false,
      },
      logging: false,
    }
  );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return Promise.resolve(sequelize);
  } catch (err) {
    console.log("Error: " + err);
  }
};

export default initialize_sequelize;
