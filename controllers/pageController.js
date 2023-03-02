const nodemailer = require("nodemailer");
const Course = require('../models/Course');
const User = require('../models/User');

exports.getIndexPage = async (req, res) => {

    const courses = await Course.find().sort('-createdAt').limit(2);
    const totalCourses = await Course.find().countDocuments();
    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalTeachers = await User.countDocuments({ role: 'teacher' });

    res.status(200).render('index', {
        page_name: 'index',
        courses,
        totalCourses,
        totalStudents,
        totalTeachers
    });
};

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact',
    });
};

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login',
    });
};

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
};

exports.sendEmail = async (req, res) => {

    try {
        const outputMessage = `

    <h1>Mail Details </h1>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
    `

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "xyz@gmail.com", // gmail account
                pass: "pass123", // gmail password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Smart EDU Contact Form" <arinyazilim@gmail.com>', // sender address
            to: "gcekic@gmail.com", // list of receivers
            subject: "Smart EDU Contact Form New Message ✔", // Subject line
            html: outputMessage, // html body
        });

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        req.flash('success', 'We received your message successfully')

        res.status(200).redirect('contact');

    } catch (err) {
        req.flash("error", `Something happened!`);
        res.status(200).redirect('contact');
    }
};