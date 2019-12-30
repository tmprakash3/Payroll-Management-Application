const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const empCtrl = require('../controllers/employee.controller');

const router = express.Router();


router.use(passport.authenticate('jwt', { session: false }))

router.route('/save')
  .post(empCtrl.saveEmployee);


router.route('/getAll')
.get(empCtrl.getAllEmployee);  

router.route('/delete/:id')
.delete(empCtrl.deleteEmployee);

  module.exports = router;



