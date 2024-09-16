import { Router } from "express";
import { addSyllabus } from "../controllers/syllabus.js";


const router = Router()

router.post("/addSyllabus", addSyllabus)



export default router