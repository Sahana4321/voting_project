const usersService = require("../services/users.service");

//registration
exports.register = (req, res, next) => {
  
  // Validation 
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
    
  };
  usersService.register(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Email Already Exist" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

//login
exports.login = (req, res, next) => {
    // Validation area
    const data = {
      emailId: req.body.emailId,
      password: req.body.password,
    };
    usersService.login(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Invalid Credentials" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };

  



  // Adding Query
  exports.addquery = (req, res, next) => {

    // Validation
  
    const data = {
  
      queryName: req.body.queryName,
      queryStartDate: req.body.queryStartDate,
      queryEndDate: req.body.  queryEndDate,
    };
  
    usersService.addquery(data, (error, results) => {
  
      if (error) {
  
        console.log(error);
  
        return res.status(400).send({ success: 0, data: "Bad request" });
  
      }
  
      return res.status(200).send({
  
        success: 1,
  
        data: results,
  
      });
  
    });
  
  }

// Adding Options
  exports.addoptions = (req, res, next) => {

    // Validation
    const data = {
  
      optionId: req.body.optionId,
      queryId: req.body.queryId,
      options: req.body.options,
      
    };
  
    usersService.addoptions(data, (error, results) => {
  
      if (error) {
  
        console.log(error);
  
        return res.status(400).send({ success: 0, data: "Bad request" });
  
      }
  
      return res.status(200).send({
  
        success: 1,
  
        data: results,
  
      });
  
    });
  
  }

  //voting
exports.castvote = (req, res, next) => {

  // Validation

  const data = {

   
    queryId: req.body.queryId,
    optionId: req.body.optionId,
    userId: req.body.userId,
    
};
  usersService.castvote(data, (error, results) => {

    if (error) {

      console.log(error);

      return res.status(400).send({ success: 0, data: "Bad request" });

    }

    return res.status(200).send({

      success: 1,

      data: results,

    });

  });

}

//get All Users
exports.getAllUsers = (req, res, next) => {

  const data = {};

usersService.getAllUsers(data, (error, results) => {

  if (error) {

    console.log(error);

    return res.status(400).send({ success: 0, data: "Bad request" });

  }

  return res.status(200).send({

    success: 1,

    data: results,

  });

});

};



//get All Options
exports.getAlloptions = (req, res, next) => {

  const data = {};

usersService.getAlloptions(data, (error, results) => {

  if (error) {

    console.log(error);

    return res.status(400).send({ success: 0, data: "Bad request" });

  }

  return res.status(200).send({

    success: 1,

    data: results,

  });

});

};



//get All Query
exports.getAllquery = (req, res, next) => {

  const data = {};

usersService.getAllquery(data, (error, results) => {

  if (error) {

    console.log(error);

    return res.status(400).send({ success: 0, data: "Bad request" });

  }

  return res.status(200).send({

    success: 1,

    data: results,

  });

});

};

exports.updatepassword = (req, res, next) => {

  // Validation

  const data = {

    emailId: req.body.emailId,

    password: req.body.password,

  };



  usersService.updatepassword(data, (error, results) => {

    if (error) {

      console.log(error);

      return res.status(400).send({ success: 0, data: "Bad request" });

    }

    return res.status(200).send({

      success: 1,

      data: "password updated succesfully",

    });

  });

}


//get Id list
exports.getIdlist = (req, res, next) => {

  const data = {};

usersService.getIdlist(data, (error, results) => {

  if (error) {

    console.log(error);

    return res.status(400).send({ success: 0, data: "Bad request" });

  }

  return res.status(200).send({

    success: 1,

    data: results,

  });

});

};


//get  total vote
exports.gettotalvotes = (req, res, next) => {

  const data = {};

usersService.gettotalvotes(data, (error, results) => {

  if (error) {

    console.log(error);

    return res.status(400).send({ success: 0, data: "Bad request" });

  }

  return res.status(200).send({

    success: 1,

    data: results,

  });

});

};

exports.deleteoption = (req, res, next) => {
// Validation
  const data = {
    optionId: req.body.optionId,

  };
  usersService.deleteoption(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: "option deleted succesfully",
    });
  });
}
exports.gettotalvote = (req, res, next) => {

  const data = {};

usersService.gettotalvote(data, (error, results) => {

  if (error) {

    console.log(error);

    return res.status(400).send({ success: 0, data: "Bad request" });

  }

  return res.status(200).send({

    success: 1,

    data: results,

  });

});

};
exports.totalVote = (req, res, next) => {

  // Validation

  const data = {



    queryId: req.body.queryId,






  };



  usersService.totalVote(data, (error, results) => {

    if (error) {

      console.log(error);

      return res.status(400).send({ success: 0, data: "Bad request" });

    }

    return res.status(200).send({

      success: 1,

      data: results,

    });

  });

}

