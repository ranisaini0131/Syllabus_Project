import mongoose from "mongoose";
import { Schema } from "mongoose";

//naming convention

const subjectMasterSchema = new Schema(

    {

        syllabusReference: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Syllabus",
            // required: true,
        },
        classes: {
            type: String,
            required: true
        },

        section: {
            type: String,
            required: true

        },

        subjectGroup: {
            type: String,
            required: true
        },

        status: {
            type: Boolean,
            // required: true
        }

    },
    {
        timestamps: true
    }
)



export const SubjectMaster = mongoose.model("SubjectMaster", subjectMasterSchema)

