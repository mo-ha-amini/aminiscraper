const express = require('express');
const router = express.Router();

const { getJobs , newJob,getsingleJob ,updateJob ,deleteJob,deleteAllJob,scrapData,downloadJobExcel,downloadProExcel} = require("../Controllers/dataController");


router.route('/scrapdata/:page').get(scrapData);
router.route('/data').get(getJobs);
router.route('/data/new').post(newJob);
router.route('/data/:id').get(getsingleJob);
router.route('/data/:id').put(updateJob);
router.route('/data/:id').delete(deleteJob);
router.route('/data').delete(deleteAllJob);
router.route('/download/jobexcel').get(downloadJobExcel);
router.route('/download/proexcel').get(downloadProExcel);




module.exports = router;
