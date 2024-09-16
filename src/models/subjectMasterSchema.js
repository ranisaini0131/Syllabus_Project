import mongoose from "mongoose";
import { Schema } from "mongoose";

//naming convention

const subjectMasterSchema = new Schema(

    {

        subjectMasterId: {
            type: String,
            // required: true
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
        }

    },
    {
        timestamps: true
    }
)



export const SubjectMaster = mongoose.model("SubjectMaster", subjectMasterSchema)

