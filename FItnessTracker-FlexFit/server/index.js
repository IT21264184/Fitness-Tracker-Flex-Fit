import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data

app.use("/api/user/", UserRoutes);
// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});
//vaXi7CisiFndkk8b
//gihanq1
// const connectDB = () => {
//   mongoose.set("strictQuery", true);
//   mongoose
//     .connect('mongodb+srv://gihanq1:vaXi7CisiFndkk8b@cluster0.r2skrtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     .then(() => console.log("Connected to Mongo DB"))
//     .catch((err) => {
//       console.error("failed to connect with mongo");
//       console.error(err);
//     });           mongodb+srv://kasunkarunarathne34:GZ7FBjcOaUR1oApv@cluster0.1qmnjpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// };

mongoose
  .connect('mongodb+srv://gihanq1:vaXi7CisiFndkk8b@cluster0.r2skrtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


  app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });
