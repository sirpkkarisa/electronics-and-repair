const { Devices, Services, RepairRequests, CompletedRepairs, Parts,Reviews } = require("../models/devices")


// HANDLING Reviews
/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/reviews
 * @param res review & success
 */

exports.addReview = async (req, res) => {
    try{
        const review = await Reviews.create(req.body);

        res.status(201)
            .json({
                review,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}



/**
 * 
 * @param {*} req GET /api/electronics-and-repairs/reviews
 * @param res reviews & success
 */

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find();

        res.status(200)
            .json({
                reviews,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}


// HANDLING SERVICES
/**
 * 
 * @param {*} req GET /api/electronics-and-repairs/services
 * @param res services & success
 */

 exports.getServices = async (req, res) => {
    try {
        const services = await Services.find();

        res.status(200)
            .json({
                services,
                success: true,
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}

/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/services
 * @param {*} res success
 */

exports.addServices = async (req, res) => {
    try{
        const service = await Services.create(req.body);

        res.status(201)
            .json({
                service,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}


// HANDLING DEVICES
/**
 * 
 * @param {*} req GET /api/electronics-and-repairs/devices
 * @param {*} res devices & success
 */

exports.getDevices = async (req, res)=> {
    try {
        const devices = await Devices.find();
        res.status(200)
            .json({
                devices,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}

/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/devices
 * @param {*} res success
 */

 exports.addDevices = async (req, res) => {
    try{
        const device = await Devices.create(req.body);

        res.status(201)
            .json({
                device,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}



// HANDLING RepairRequest
/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/repairs
 * @param {*} res success
 */

 exports.addRepairs = async (req, res) => {
    try{
        const repair = await RepairRequests.create(req.body);

        res.status(201)
            .json({
                repair,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}

/**
 * 
 * @param {*} req GET /api/electronics-and-repairs/repairs
 * @param {*} res repairReq & success
*/

exports.getRepairRequests = async (req, res) => {
    try {
        const repairReq = await RepairRequests.find();

        res.status(200)
            .json({
                repairReq,
                success: true,
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}


// HANDLING CompletedRepairs
/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/completed-repairs
 * @param {*} res success
 */

 exports.addToCompleted = async (req, res) => {
    try{
        const completed = await CompletedRepairs.create(req.body);

        res.status(201)
            .json({
                completed,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}

/**
 * 
 * @param {*} req GET /api/electronics-and-repairs/completed-repairs
 * @param {*} res repairReq & success
*/

exports.getCompletedRepairs = async (req, res) => {
    try{
        const completedRepairs = await CompletedRepairs.find();

        res.status(200)
            .json({
                completedRepairs,
                success: true,
            })
    }catch(error) {
        console.log(error)
        res.end()
    }
}



// HANDLING Parts
/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/parts
 * @param {*} res success
 */

 exports.addParts = async (req, res) => {
    try{
        const parts = await Parts.create(req.body);

        res.status(201)
            .json({
                parts,
                success: true
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}

/**
 * 
 * @param {*} req GET /api/electronics-and-repairs/parts
 * @param {*} res parts & success
*/
exports.getParts = async (req, res) => {
    try {
        const parts = await Parts.find();

        res.status(200)
            .json({
                parts,
                success: true,
            })
    } catch (error) {
        console.log(error)
        res.end()
    }
}