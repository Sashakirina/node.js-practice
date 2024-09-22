import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { userValidationShema } from "../validation/user.js";
import { registerUserController } from "../controllers/auth.js";
import {ctrlWrapper} from '../utils/ctrlWrapper.js'

const router = Router();


router.post('/users/register', validateBody(userValidationShema), ctrlWrapper(registerUserController))

export default router;
