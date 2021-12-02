const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Devices = new Schema({
    deviceType: {
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
        unique: true,
        required: [true, 'Please provide device serial number']
    }
})

const RepairRequests = new Schema({
    refNo: {
        type: String,
        required: true,
        unique: true,
    },
    customer: {
        customerID: {
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
        deviceType: {
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
    services: {
        type: Array,
        required: true
    },
    customer: {
        customerID: {
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
        deviceType: {
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
})

const Parts = new Schema({
    partNo: {
        type: String,
        trim: true
    },
    cost: {
        type: Number,
        required: [true, 'Provide part cost']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please provide some descriptions']
    },
    issueSolvedAt: {
        type: Date,
        default: Date.now
    }
})

const Services = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Provide title']
    },
    charge: {
        type: Number,
        trim: true,
        required: [true, 'Provide description']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Provide description']
    },
    reviews: []
})


const Reviews = new Schema({
    postedBy: {
        type: String,
        trim: true,
        required: [true, 'Provide a name']
    },
    comment: {
        type: String,
        trim: true,
        required: [true,'Comment on our services']
    },
    rating: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = { 
    CompletedRepairs: mongoose.model('CompletedRepairs', CompletedRepairs),
    Devices: mongoose.model('Devices', Devices),
    Parts: mongoose.model('Parts', Parts),
    RepairRequests: mongoose.model('RepairRequest', RepairRequests),
    Reviews: mongoose.model('Reviews', Reviews),
    Services: mongoose.model('Services', Services),
};
