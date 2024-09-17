import { Syllabus } from "../models/syllabusSchema.js"


const addSyllabus = async (req, res) => {
    try {
        const { subjectMasterId, status } = req.body;

        // validation
        if (!status) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all fields",
            });
        }

        // check if user already exists or not
        let existedSyllabus = await Syllabus.findOne({ subjectMasterId }).populate('subjectMasterId').exec();

        if (existedSyllabus) {
            return res.status(409).json({
                status: "failed",
                message: "Syllabus already exists",
            });
        } else {
            const newSyllabus = new Syllabus({
                subjectMasterId,
                status,
            });
            await newSyllabus.save();

            const populatedSyllabus = await Syllabus.findById(newSyllabus._id).populate('subjectMasterId').exec();

            if (!populatedSyllabus) {
                return res.status(500).json({
                    status: 'error',
                    message: "something went wrong while adding the Syllabus",
                });
            } else {
                // return response
                return res.status(200).json({
                    status: "success",
                    message: "Syllabus added successfully",
                    syllabus: populatedSyllabus,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
};


const getSyllabusById = async (req, res) => {
    try {
        const { id } = req.body

        const syllabus = await Syllabus.findById(id).populate('subjectMasterId').exec();
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
        const syllabus = await Syllabus.findOne().populate('subjectMasterId').exec();

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

        const updatedSyllabus = await Syllabus.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        ).populate('subjectMasterId').exec();


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

        const deletedSyllabus = await Syllabus.findByIdAndDelete(id).populate('subjectMasterId').exec();

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