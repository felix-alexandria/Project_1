import cors from "cors";
import express, { Application } from "express";
import { IncomingMessage, Server, ServerResponse } from "node:http";
import { dbConfig } from "./utils/dbConfig";
import { PORT } from "./utils/constant";

const app: Application = express();

app.use(express.json());
app.use(cors());

const server: Server<typeof IncomingMessage, typeof ServerResponse> =
  app.listen(PORT, () => {
    dbConfig();
  });

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException:", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection:", reason);

  server.close(() => {
    process.exit(1);
  });
});
