const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(roleMiddleware(['teacher', 'admin']), courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);
router.route('/:slug').delete(courseController.deleteCourse);
router.route('/:slug').post(courseController.updateCourse);
router.route('/enroll').post(courseController.enrollCourse);
router.route('/drop').post(courseController.dropCourse);

module.exports = router;
