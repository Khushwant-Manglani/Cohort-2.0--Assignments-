const { Admin } = require('../db');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username; // abcd@gmail.com
    const password = req.headers.password; // 123af

    Admin.findOne({ 
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
                msg: "Admin does'nt exit with this username and password"
            });
        }
    });
}

module.exports = adminMiddleware;