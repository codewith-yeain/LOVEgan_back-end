import express from 'express';
import { index } from '../controller/index.js';
import userRouter from './user/userRouter.js';
import authRouter from './auth/authRouter.js';
import customerRouter from './customer/customerRouter.js';
import communityRouter from './community/communityRouter.js';
// import todoRouter from './todo/todoRouter.js';

const rootRouter = express.Router();

// get : url 경로를 입력해서 들어오는 요청, get 데이터도 요청 가능
rootRouter.get("/", index);
// rootRouter.post("/", index);
// rootRouter.delete("/", index);
// rootRouter.put("/", index);
rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);
// rootRouter.use("/todo", todoRouter)
rootRouter.use("/customer",customerRouter);
rootRouter.use("/community", communityRouter);


export default rootRouter;