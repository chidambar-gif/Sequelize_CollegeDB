import { ApolloServer } from "@apollo/server";
import * as Student from "./resolvers/Student.js";
import * as Query from "./resolvers/Query.js";
import * as Takes from "./resolvers/Takes.js";
import * as Instructor from "./resolvers/Instructor.js";
import * as Course from "./resolvers/Course.js";
import * as Mutation from "./resolvers/Mutation.js";
import fs from "fs";

const resolvers = { Query, Student, Course, Takes, Instructor, Mutation };
// console.log(process.cwd()); //
const server = new ApolloServer({
  typeDefs: fs.readFileSync("./apolloServer/schema.graphql", "utf-8"),
  resolvers,
});

export default server;
