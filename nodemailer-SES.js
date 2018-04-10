var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'SES',
    auth: {
        user: '<smtp key | smtp username>',
        pass: '<smpt password>'
    }
}));


// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"'+constants.smtp_from_name+'" <'+constants.smtp_from_eamil+'>', // sender address
    to: email, // list of receivers
    subject: constants.project_name+' Clinic Registration', // Subject line
    html: email_data
};


// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }

});