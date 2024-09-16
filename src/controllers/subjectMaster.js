import { SubjectMaster } from "../models/subjectMasterSchema.js"

const addSubjectMaster = async (req, res) => {
    try {

        //get user details from frontend
        const { classes, section, subjectGroup } = req.body

        //validation
        if (!(classes, section, subjectGroup)) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all fields",
            })
        }

        //check if user already exists or not
        const existedSubjectMaster = await SubjectMaster.findOne({ classes })

        if (existedSubjectMaster) {
            return res.status(409).json({
                status: "failed",
                message: "SubjectMaster already exists"
            })
        } else {
            const newSubjectMaster = new SubjectMaster({
                classes,
                section,
                subjectGroup
            })
            await newSubjectMaster.save()


            if (!newSubjectMaster) {
                return res.status(500).json({
                    status: 'error',
                    message: "something went wrong while adding the SubjectMaster"
                })
            } else {
                //return response
                return res.status(200).json({
                    status: "success",
                    message: "SubjectMaster added successfully",
                    newSubjectMaster
                })
            }
        }

    } catch (error) {
        console.log("addSubjectMaster", error)
    }
}


const getSubjectMasterById = async (req, res) => {
    try {
        const { id } = req.body

        const subjectMaster = await SubjectMaster.findById(id)
        return res
            .status(200)
            .json({
                status: "success",
                data: subjectMaster
            })

    } catch (error) {
        console.log("Error:", error.message)
    }
}

const getAllSubjectMaster = async (req, res) => {
    try {
        const subjectMaster = await SubjectMaster.findOne()

        return res
            .status(200)
            .json({
                status: "success",
                data: subjectMaster
            })


    } catch (error) {
        console.log("Error:", error.message)
    }
}

const updatSubjectMaster = async (req, res) => {
    try {
        const { id } = req.params

        const updatSubjectMaster = await SubjectMaster.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )


        return res
            .status(200)
            .json({
                status: "success",
                data: updatSubjectMaster
            })

    } catch (error) {
        console.log("Error:", error.message)
    }
}


const deleteSubjectMaster = async (req, res) => {
    try {

        const { id } = req.body

        const deleteSubjectMaster = await SubjectMaster.findByIdAndDelete(id)

        return res
            .status(200)
            .json({
                status: "success",
                deleteSubjectMaster,

            })

    } catch (error) {
        return res
            .status(400)
            .json({
                status: "failed",
                message: error.message,

            })
    }
}



export {
    addSubjectMaster,
    getSubjectMasterById,
    getAllSubjectMaster,
    updatSubjectMaster,
    deleteSubjectMaster
}