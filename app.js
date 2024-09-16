import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json({ limit: "160kb" }))

app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))

app.use(cookieParser())


//import routes
import SubjectMaster from "./src/routes/subjectMasterRoutes.js"
import SyllabusRoute from "./src/routes/syllabusRoutes.js"

app.use("/subjectMaster", SubjectMaster)
app.use("/syllabus", SyllabusRoute)



export { app }