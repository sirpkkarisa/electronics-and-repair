const { Devices, Services, RepairRequests, CompletedRepairs, Parts,Reviews } = require("../models/devices")


// HANDLING Reviews
/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/reviews
 * @param res review & success
 */

exports.addReview = async (req, res) => {
    try{
        const { postedBy, comment } = req.body;

        if(!postedBy || !comment) {
            return res.status(400)
                        .json({
                            success: false,
                            message: 'Both name and a comment are required'
                        })
        }
        const review = await Reviews.create(req.body);

        res.status(201)
            .json({
                review,
                success: true
            })
    } catch (error) {
        res.status(500)
            .json({
                succcess: false,
                message: `${error}`
            })
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
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
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
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
    }
}

/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/services
 * @param {*} res success
 */

exports.addServices = async (req, res) => {
    try{
        const { title, charge, description } = req.body;

        if(!title || !charge || !description ) {
            return res.status(400)
                        .json({
                            success: false,
                            message: 'All fields are required'
                        })
        }
        const service = await Services.create(req.body);

        res.status(201)
            .json({
                service,
                success: true
            })
    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
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
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
    }
}

/**
 * 
 * @param {*} req POST /api/electronics-and-repairs/devices
 * @param {*} res success
 */

 exports.addDevices = async (req, res) => {
    try{
        const { deviceType, cost, description, imgURL, model, serialNo } = req.body;

        if(!deviceType || !cost || !description || !imgURL || !model || !serialNo) {
            return res.status(400)
                        .json({
                            success: false,
                            message: 'All fields are required'
                        })
        }

        const isRegistered = await Devices.findOne({serialNo});

        if(isRegistered){
            return res.status(403)
                        .json({
                            success: false,
                            message: 'Device Number provided is already registered'
                        })
        }
        const device = await Devices.create(req.body);

        res.status(201)
            .json({
                device,
                success: true
            })
    } catch (error) {
        res.status(500)
            .json({
                success: true,
                message: `${error}`
            })
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
        const { refNo, possibleIssue} = req.body;
        const { customerID, firstName, lastName, street, phone } = req.body.customer;
        const { serialNo, deviceType, model } = req.body.device;

        if(!refNo || !customerID || !firstName || !lastName || !street || !phone || !serialNo || !deviceType || !model || !possibleIssue){
            return res.status(400)
                        .json({
                            success: false,
                            message: 'All fields are required'
                        })
        }

        const isReq = await RepairRequests.findOne({refNo});

        if(isReq) {
            return res.status(403)
                        .json({
                            success: false,
                            message: 'The provide refNo already exists'
                        })
        }
        const repair = await RepairRequests.create(req.body);

        res.status(201)
            .json({
                repair,
                success: true
            })
    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
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
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
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
        const { refNo, services } = req.body;

        if(!refNo || !services) {
            return res.status(400)
                        .json({
                            success: false,
                            message: 'All fields are required'
                        })
        }

        // Check if the provided refNo is on the RepairRequest and continue
        // Otherwise abandon insertion
        const isReq = await RepairRequests.findOne({refNo});

        if(!isReq) {
            return res.status(403)
                        .json({
                            success: false,
                            message: 'You cannot complete a Repair Request if it was not inexistence'
                        })
        }

        // Extract the details from the RepairRequest
        const { customer, device } = isReq;

        // Combine the completed details submitted with the customer and device details
        const completed = await CompletedRepairs.create({customer, device,...req.body});

        // Drop the completed request from RepairRequest
        await RepairRequests.deleteOne({refNo});
        
        res.status(201)
            .json({
                completed,
                success: true
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${error}`
        })
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
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
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
        const { partNo, cost, description } = req.body;

        if(!partNo || !cost || !description) {
            return res.status(400)
                        .json({
                            success: false,
                            message: 'All fields are required'
                        })
        }

        const parts = await Parts.create(req.body);

        res.status(201)
            .json({
                parts,
                success: true
            })
    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
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
        res.status(500)
            .json({
                success: false,
                message: `${error}`
            })
    }
}