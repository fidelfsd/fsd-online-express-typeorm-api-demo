import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUser1701807025522 } from "./migrations/1701807025522-CreateUser";

// -----------------------------------------------------------------------------

export const AppDataSource = new DataSource({
   type: "mysql",
   host: "localhost",
   port: 3307,
   username: "root",
   password: "root",
   database: "typeorm",
   entities: [],
   migrations: [CreateUser1701807025522],
   synchronize: false,
   logging: false,
});
