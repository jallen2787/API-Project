import mongoose from "mongoose";
import chalk from "chalk";

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/API_Project'
mongoose.set("returnOriginal", false);
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(url, mongooseConfig)
  .catch((err) => {
  console.log(`error connecting to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB"))
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`))
});

export default mongoose.connection