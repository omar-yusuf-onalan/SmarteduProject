exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: 'index',
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

exports.getCourseSingle = (req, res) => {
    res.status(200).render('course-single');
};

exports.getCourses = (req, res) => {
    res.status(200).render('courses', {
        page_name: 'courses',
    });
};

exports.getDashboard = (req, res) => {
    res.status(200).render('dashboard', {
        page_name: 'dashboard',
    });
};

exports.getLogin = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login',
    });
};

exports.getRegister = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
};
