import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import authMeRoute from "./routes/auth.me.route.js";
import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", authRoute);
app.use("/api", categoryRoute);
app.use("/api", productRoute);
app.use("/api", authMeRoute);

app.get("/", (req, res) => {
  res.send("<h1>This is the Heading for test</h1>");
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
