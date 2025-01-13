const express = require('express');
const router = express.Router();
const VideoController = require('../Controllers/video');
const auth = require('../middleware/authentication');

router.post('/video',auth,VideoController.uploadVideo);
router.get('/allVideo',VideoController.getAllVideo);
router.get('/getVideoById/:id',VideoController.getVideoById);
router.get('/:userId/channel',VideoController.getAllVideoByUserID);
module.exports = router;