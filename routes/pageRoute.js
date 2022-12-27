const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/dashboard').get(pageController.getDashboard);
router.route('/login').get(pageController.getLogin);
router.route('/register').get(pageController.getRegister);

module.exports = router;
