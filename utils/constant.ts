import env from "dotenv";
env.config();

export const PORT = parseInt(process.env.PORT!);
export const MONGODB_URL = process.env.MONGODB_URL!;
export const MONGODB_LOCAL = process.env.MONGODB_LOCAL!;
