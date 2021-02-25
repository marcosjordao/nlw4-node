import { Router } from "express";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const userController = new UsersController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();

router.post("/users", userController.create);
router.get("/surveys", surveyController.show);
router.post("/surveys", surveyController.create);

router.post("/sendMail", sendMailController.execute);

export { router };
