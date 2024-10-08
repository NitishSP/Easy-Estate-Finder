import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import testRoute from './routes/test.route.js';
import userRoute from './routes/user.route.js';


const app = express();
dotenv.config();

app.use(cors({origin: process.env.CLIENT_URL, methods:[ "GET","POST","PUT","DELETE"], credentials: true}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);

const port = 8800;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
