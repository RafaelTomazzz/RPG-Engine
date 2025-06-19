import express from "express";
import createArmaController from "../Controller/Arma/createArmaController.js";
import listArmaController from "../Controller/Arma/listArmaController.js";
import getArmaController from "../Controller/Arma/getArmaController.js";
import deleteArmaController from "../Controller/Arma/deleteArmaController.js";
import updateArmaController from "../Controller/Arma/updateArmaController.js";
import editArmaController from "../Controller/Arma/editArmaController.js"

const router = express.Router()

router.post("/", createArmaController)
router.get("/list", listArmaController)
router.get("/byid/:id", getArmaController)
router.delete("/:id", deleteArmaController)
router.put("/:id", updateArmaController)
router.patch("/:id", editArmaController)

export default router
