const { User } = require('../db');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username; // abcd@gmail.com
    const password = req.headers.password; // 123af

    User.findOne({ 
        username: username, 
        password: password
    })
    .then((data) => {
        if(data) {
            // username with this password is exist in database
            next(); 
        } else {
            // username with this password is doesn't exist in database
            res.status(403).json({
                msg: "User does'nt exit with this username and password"
            });
        }
    });
}

module.exports = userMiddleware;