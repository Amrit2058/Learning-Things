// Send An Email------------------------------------------------

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'ilovegrapes100@gmail.com',
//         pass: 'symbol54321'
//     }
// });

// var mailOptions = {
//     from: 'ilovegrapes100@gmail.com',
//     to: 'amritadhikari2058@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });



// Multiple Receivers--------------------------------------------

// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@gmail.com, myotherfriend@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// }


// Send HTML-----------------------------------------------------

// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@gmail.com',
//     subject: 'Sending Email Using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
// }