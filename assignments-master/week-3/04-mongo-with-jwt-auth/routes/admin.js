const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db');
const jwt = require('jsonwebtoken');
const jwtPassword = 'private';
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    });

    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    const adminExist = Admin.find({
        username,
        password
    });

    if(adminExist) {
        // create a token, and send it to admin
        const token = jwt.sign({ username: username, password: password }, jwtPassword);
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Admin does'nt exist"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        if(jwt.verify(req.headers.authorization, jwtPassword)) {
            const newCourse = await Course.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                imageLink: req.body.imageLink
            });

            res.json({
                message: 'Course created successfully', courseId: newCourse._id
            });
        }
    } catch(err) {
        console.log(err);
        res.status(403).json({
            message: "Invalid token"
        });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        if(jwt.verify(req.headers.authorization, jwtPassword)) {
            // token is valid
            const allCourses = await Course.find();
            res.json({
                courses: allCourses
            });
        }
    } catch(err) {
        res.status(403).json({
            message: "Invalid token"
        });
    }
});

module.exports = router;