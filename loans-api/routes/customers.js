var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const customerModel = require('../models/customers.model');

/* GET ALL customers */
router.get('/list', function(req, res, next) {
   customerModel.find(function(err, customerListResponse){
    if(err){
      res.send({status: 500, message: 'Unable to find customer'})
    }else{ 
      const recordCount = customerListResponse.length
      res.send({status: 200, recordCount: recordCount, results: customerListResponse})
    }
   })
});

/* GET CUSTOMER Details */
router.get('/view', function(req, res, next) {
  // capture user Id
  const userId = req.query.userId;
  customerModel.findById(userId,function(err, customerResponse){
   if(err){
     res.send({status: 500, message: 'Unable to find customer'})
   }else{ 
     res.send({status: 200, results: customerResponse})
   }
  })
});

/* Update Existing customers */
router.put('/update', function(req, res, next) {

  const userId = req.body.userId;

   // MAKE DYNAMIC
   let firstName = req.body.firstName;
   let lastName = req.body.lastName;
   let emailAddress = req.body.emailAddress;
   let phoneNumber = req.body.phoneNumber;
   let dob = req.body.dob;
   let department = req.body.department;
 
   let customerObj = {
     firstName: firstName,
     lastName: lastName,
     emailAddress: emailAddress,
     phoneNumber: phoneNumber,
     dob: dob,
     department:department
   };

  customerModel.findByIdAndUpdate(userId, customerObj, function(err){
   if(err){
     res.send({status: 500, message: 'Unable to update the customer'})
   }
   else{ 
    res.send({status: 200, message: 'User updated successfully', results: customerObj})
   }
  })
});

/* Create New customers */
router.post('/add', function(req, res, next) {

    // MAKE DYNAMIC
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;
    let phoneNumber = req.body.phoneNumber;
    let dob = req.body.dob;
    let department = req.body.department;
  
    let customerObj = new customerModel({
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      dob: dob,
      department:department
    });

  customerObj.save(function(err, customerObj){
    if(err){
      res.send({
        staus: 500,
        message: 'Unable to add customer'
      })
    } else {
      res.send({
        satus: 200,
        message: 'User created successfully! ' , customerDetails: customerObj
      })
    }
  });

});

/* Delete Existing customers */
router.delete('/delete', function(req, res, next) {
  const userId = req.query.userId;

  // MAKE DYNAMIC
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;

  let customerObj = new customerModel({
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department:department
  });

  customerModel.findByIdAndDelete(userId, customerObj, function(err){
   if(err){
     res.send({status: 500, message: 'Unable to delete the customer'})
   }
   else{ 
     res.send({status: 200, message: 'User deleted successfully'})
   }
  })
});

/* Delete Multiple customers */
router.delete('/delete-multiple', function(req, res, next) {

 // MAKE DYNAMIC
 let firstName = req.body.firstName;
 let lastName = req.body.lastName;
 let emailAddress = req.body.emailAddress;
 let phoneNumber = req.body.phoneNumber;
 let dob = req.body.dob;
 let department = req.body.department;

 let customerObj = new customerModel({
   firstName: firstName,
   lastName: lastName,
   emailAddress: emailAddress,
   phoneNumber: phoneNumber,
   dob: dob,
   department:department
 });

  customerModel.deleteMany({
    firstName: firstName,

  }, function(err){
   if(err){
     res.send({status: 500, message: 'Unable to delete multiple customers'})
   }
   else{ 
     res.send({status: 200, message: 'All Users deleted successfully', results: customerObj})
   }
  })
});

/* Search Existing customers */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
