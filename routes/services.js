const express = require('express');
const passport = require('passport');
const { getDevices, addDevices, getServices, 
    addServices, getParts, addParts, 
    getRepairRequests, addRepairs, getCompletedRepairs, 
    addToCompleted, getReviews } = require('../controllers/devices');


const router = express.Router();

router.route('/devices')
    .get(getDevices)
    .post(addDevices);

router.route('/services')
    .get(getServices)
    .post(addServices);

router.route('/parts')
    .get(getParts)
    .post(addParts)

router.route('/repairs')
    .get(getRepairRequests)
    .post(addRepairs)

router.route('/completed-repairs')
    .get(getCompletedRepairs)
    .post(addToCompleted)

router.route('/reviews')
    .get(getReviews)
    .post(addServices)





//     router.route('/devices')
//     .get(getDevices)
//     .post(passport.authenticate('jwt',{session: false}), addDevices);

// router.route('/services')
//     .get(getServices)
//     .post(passport.authenticate('jwt',{session: false}), addServices);

// router.route('/parts')
//     .get(passport.authenticate('jwt',{session: false}), getParts)
//     .post(passport.authenticate('jwt',{session: false}), addParts)

// router.route('/repairs')
//     .get(passport.authenticate('jwt',{session: false}), getRepairRequests)
//     .post(passport.authenticate('jwt',{session: false}), addRepairs)

// router.route('/completed-repairs')
//     .get(passport.authenticate('jwt',{session: false}), getCompletedRepairs)
//     .post(passport.authenticate('jwt',{session: false}), addToCompleted)

module.exports = router;
