const Schema = require('mongoose').Schema;

const Devices = new Schema({
    devicType: {
        type: String,
        trim: true,
        required: [true, 'Please provide device type']
    },
    cost: {
        type: Number,
        trim: true,
        required: [true, 'Please provide device cost']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please provide some descriptions']
    },
    imgURL: {
        type: String
    },
    model: {
        type: String,
        trim: true,
        required: [true, 'Please provide device model']
    },
    serialNo: {
        type: String,
        trim: true,
        required: [true, 'Please provide device serial number']
    }
})

const RepairRequest = new Schema({
    refNo: {
        type: String,
        required: true,
        unique: true,
    },
    customer: {
        ID: {
            type: String,
            trim: true,
            required: [true, 'Customer ID/Passport Number required']
        },
        firstName: {
            type: String,
            trim: true,
            required: [true, 'Customer names required']
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, 'Customer names required']
        },
        street: {
            type: String,
            trim: true,
            required: [true, 'Street number required']
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true
        },
        zip: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true,
            required: [true, 'Phone number is required']
        }
    },
    device: {
        serialNo: {
            type: String,
            trim: true,
            required: true
        },
        devicType: {
            type: String,
            trim: true,
            required: true
        },
        model: {
            type: String,
            trim: true,
            required: true
        }
    },
    possibleIssue: {
        type: String,
        trim: true,
        required: true
    },
    issueReportedAt: {
        type: Date,
        default: Date.now
    }
})

const CompletedRepairs = new Schema({
    refNo: {
        type: String,
        required: true,
        unique: true,
    },
    
})