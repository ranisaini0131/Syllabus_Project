import { Router } from "express";
import { addSyllabus, deleteSyllabus, getAllSyllabus, getSyllabusById, updateSyllabus } from "../controllers/syllabus.js";


const router = Router()

router.post("/addSyllabus", addSyllabus)

router.get("/getSyllabusById", getSyllabusById)

router.get("/getAllSyllabus", getAllSyllabus)

router.patch("/updateSyllbus/:id", updateSyllabus)

router.delete("/deleteSyllabus", deleteSyllabus)

export default router