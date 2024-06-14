import { connect } from "mongoose";
import { MONGODB_LOCAL } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(MONGODB_LOCAL)
      .then(() => {
        console.log("Database Connection Established 🚀🚀");
      })
      .catch((error: any) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};
