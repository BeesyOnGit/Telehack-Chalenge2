import bodyParser from "body-parser";
import express, { Express, Request, Response, NextFunction } from "express";
import { DbConnection } from "./DBConnection";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoutes from "./Routes/AuthRoutes";
import compression from "compression";

dotenv.config();

//Constants definition
const app: Express = express();
const PORT = process.env.PORT;
http.createServer(app);

//Variable deffinition

//Db connection//

DbConnection("telecomApp", "mongodb://127.0.0.1:27017");
//Midelware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(
    compression({
        level: 6,
    })
);

//App upload limite upgrade
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//Comment me Befor deployment
import cors from "cors";
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
// app.use(cors({ origin: ["https://arabatii.com/"] }));

// uncomment ME  befor deployment
// import helmet from'helmet'
// app.use(helmet())

// os.networkInterfaces()

//************************************ # API CODE # ****************************************//

//************************************ # API ROUTES # ****************************************//
app.use("/api/auth", AuthRoutes);

//************************************ # SERVER PORT SET # ****************************************//

app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}`);
});
