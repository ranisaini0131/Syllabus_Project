import { SubjectMaster } from "../models/subjectMasterSchema.js"
import { Syllabus } from "../models/syllabusSchema.js"

const addSyllabus = async (req, res) => {
    try {

        //get user details from frontend
        const { subjectMasterId, status } = req.body
        console.log(req.body, "llll")

        //validation
        if (!status) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all fields",
            })
        }

        //check if user already exists or not

        let existedSyllabus = await Syllabus.findOne({ subjectMasterId }).populate('syllabusReference').exec()
        console.log(existedSyllabus, "ff")

        if (existedSyllabus) {
            return res.status(409).json({
                status: "failed",
                message: "Syllabus already exists"
            })
        } else {
            const newSyllabus = new Syllabus({
                existedSyllabus
            })
            await newSyllabus.save()

            existedSyllabus = await Syllabus.findOne({ subjectMasterId }).populate('syllabusReference').exec()



            if (!newSyllabus) {
                return res.status(500).json({
                    status: 'error',
                    message: "something went wrong while adding the Syllabus"
                })
            } else {
                //return response
                return res.status(200).json({
                    status: "success",
                    message: "Syllabus addeds successfully",
                    existedSyllabus
                })
            }
        }

    } catch (error) {
        console.log(error)
    }
}


const getSyllabusById = async (req, res) => {
    try {
        const { id } = req.body

        const syllabus = await Syllabus.findById(id)
        return res
            .status(200)
            .json({
                status: "success",
                data: syllabus
            })

    } catch (error) {
        console.log("Error:", error.message)
    }
}

const getAllSyllabus = async (req, res) => {
    try {
        const syllabus = await syllabus.findOne()

        return res
            .status(200)
            .json({
                status: "success",
                data: syllabus
            })


    } catch (error) {
        console.log("Error:", error.message)
    }
}

const updateSyllabus = async (req, res) => {
    try {
        const { id } = req.params

        const updatedSyllabus = await Hostel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )


        return res
            .status(200)
            .json({
                status: "success",
                data: updatedSyllabus
            })

    } catch (error) {
        console.log("Error:", error.message)
    }
}


const deleteSyllabus = async (req, res) => {
    try {

        const { id } = req.body

        const deletedSyllabus = await Syllabus.findByIdAndDelete(id)

        return res
            .status(200)
            .json({
                status: "success",
                deletedSyllabus,

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

//master api


export {
    addSyllabus,
    getSyllabusById,
    getAllSyllabus,
    updateSyllabus,
    deleteSyllabus
}