import mongoose from "mongoose";
import { Schema } from "mongoose";


const SyllabusSchema = new Schema(

    {
        subjectMasterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubjectMaster",
            // required: true,
        },
        status: {
            type: String,
            // required: true
        }
    },
    {
        timestamps: true
    }
)



export const Syllabus = mongoose.model("Syllabus", SyllabusSchema)

