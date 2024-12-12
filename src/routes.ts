import { Router } from "express";
import { categoriesController } from "./controllers/categoriesController";

const router = Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

export {router}