const { Router } = require("express");
const router = Router();
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    });

    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username });

    if(!user) {
        res.status(403).json({
            message: "User does'nt exist"
        })
    }
 
    const token = jwt.sign({ username: username, password: password, "sub": user._id }, jwtPassword);
    res.json({
        token: token
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {   
        if(jwt.verify(req.headers.authorization, jwtPassword)) {
            const courseList = await Course.find();
            res.json({
                courses: courseList
            })
        }
    } catch(err) {
        res.status(403).json({
            message: "Invalid Token"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;

    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, jwtPassword);
        const userId = decoded.sub;

        await User.updateOne({
            _id: userId
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        });

        res.json({
            message: 'Course purchased successfully'
        });
    } catch(err) {
        res.status(403).json({
            message: "Invalid token"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, jwtPassword);
        const userId = decoded.sub;

        const user = await User.findOne({
            _id: userId
        });

        const course = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        });

        res.json({
            purchasedCourses: course
        })

    } catch(err) {
        res.status(403).json({
            message: "Invalid token"
        })
    }
});

module.exports = router