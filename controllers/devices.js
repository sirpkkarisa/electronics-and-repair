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
        const db_review = await Reviews.create(req.body);
        const review = {
            id: db_review._id,
            postedBy: db_review.postedBy,
            comment: db_review.comment,
            rating: db_review.rating,
            date: new Date(db_review.createdOn).toLocaleDateString()
        }

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
        const db_reviews = await Reviews.find();
        const reviews = db_reviews.map(item => {
            const {_id, postedBy, comment, rating, createdOn} = item;
            return {
                id: _id,
                postedBy,
                comment,
                rating,
                date: new Date(createdOn).toLocaleDateString()
            }
        })
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
        const db_services = await Services.find();
        
        const services = db_services.map(item => {
            const {_id, title, description, charge, reviews} = item;
            return {
                id: _id,
                title,
                description,
                charge,
                reviews: reviews.length
            }
        })
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
                service: {
                    id: service._id,
                    title: service.title,
                    description: service.title,
                    charge: service.charge,
                    reviews: service.reviews.length 
                },
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
        const db_devices = await Devices.find();
        const devices = db_devices.map(item => {
            const {_id, cost, description, imgURL, deviceType} = item;
            
            return {
                id: _id,
                cost,
                description,
                imgURL,
                QOH: Math.round(Math.random() *10)+1,
                title: deviceType
            }
        })
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
        const db_device = await Devices.create(req.body);

        res.status(201)
            .json({
                device:{
                    id: db_device._id,
                    cost: db_device.cost,
                    description: db_device.description,
                    deviceType: db_device.deviceType,
                    imgURL: db_device.imgURL,
                    QOH: Math.round(Math.random() *10)+1,
                },  
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

        const db_part= await Parts.create(req.body);
        const part = {id:db_part._id, cost: db_part.cost,description: db_part.description, num: db_part.partNo,QOH: Math.round(Math.random() *10)}; 
        res.status(201)
            .json({
                part,
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
        const db_parts = await Parts.find();
        const parts = db_parts.map(item =>{
            const { _id, partNo, description, cost } = item;
            return {
                id: _id,
                num:partNo,
                description,
                cost,
                QOH: Math.round(Math.random() *10)
            }
        })
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