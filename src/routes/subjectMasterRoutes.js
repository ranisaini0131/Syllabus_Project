import { Router } from "express";
import { addSubjectMaster, deleteSubjectMaster, getAllSubjectMaster, getSubjectMasterById, updatSubjectMaster } from "../controllers/subjectMaster.js";


const router = Router()

router.post("/addSubjectMaster", addSubjectMaster)


router.get("/getSubjectMasterById", getSubjectMasterById)

router.get("/getAllSubjectMaster", getAllSubjectMaster)

router.patch("/updateSubjectMaster/:id", updatSubjectMaster)

router.delete("/deleteSubjectMaster", deleteSubjectMaster)


export default router