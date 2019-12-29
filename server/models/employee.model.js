const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});


module.exports = mongoose.model('Employee', EmployeeSchema);
