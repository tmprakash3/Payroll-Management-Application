const Employee = require('../models/employee.model');


exports.saveEmployee = function (req, res) {
    console.log('saveEmployee called in node');
    console.log(req.body);
    var empObj = req.body;
    var empData = new Employee();
    empData.firstName = empObj.firstName;
    empData.lastName = empObj.lastName;
    empData.userName = empObj.userName;
    empData.emailId = empObj.emailId;
    empData.password = empObj.password;
    empData.confirmPassword = empObj.confirmPassword;
    empData.employeeId = empObj.employeeId;
    empData.joiningDate = empObj.joiningDate;
    empData.companyName = empObj.companyName;
    empData.designation = empObj.designation;
    empData.phoneNumber = empObj.phoneNumber;
    Employee.find({ 'emailId': empData.emailId }, function (err, response) {
        console.log('find response');
        console.log(response);
        if (response.length == 0) {
            console.log('same email not exists');
            empData.save(function (err, savedObj) {
                if (err) throw err;
                else if (!savedObj) throw new Error("no object found")

                else {
                    console.log('savedObj is');
                    console.log(savedObj);
                    return res.json({ savedObj: savedObj })
                }
            })

        } else {
            console.log('email already exists');
            return res.json({ savedObj: "EMAILID_ALREADY_EXISTS" })
        }

    })


}

exports.getAllEmployees = function(req, res){
    console.log("I received a GET request")
    Employee.find({},function(err, users){
        console.log("Getting data from db");
        console.log(users);
        res.json(users);
    });
    console.log("Returned data");
};