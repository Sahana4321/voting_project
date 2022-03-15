const db = require("../config/db.config");

//registration
exports.register = (data, callback) => {
  db.query(
      `INSERT INTO users(firstName , lastName, emailId, password) VALUES (?,?,?,?)`,
      [data.firstName, data.lastName, data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};


exports.login = (data, callback) => {
  db.query(
    `SELECT userId FROM users WHERE emailId = ? AND password = ?`,
    [data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.length > 0) {
        return callback(null, "Login success");
        
     
      } else {
        return callback("Invalid credentials");
      } 
    }
  );
};


// Adding Query
exports.addquery = (data, callback) => {

  db.query(

      `INSERT INTO query(queryName , queryStartDate, queryEndDate) VALUES (?,?,?)`,

      [data.queryName, data.queryStartDate, data.queryEndDate],

    (error, results, fields) => {

      if (error) {

        return callback(error);

      }

      return callback(null, `Query Added successfully`);

    }

  );

};


// Adding Options
exports.addoptions = (data, callback) => {

  db.query(

      `INSERT INTO options(optionId, queryId, options) VALUES (?,?,?)`,

      [data.optionId, data.queryId, data.options],

    (error, results, fields) => {

      if (error) {

        return callback(error);

      }

      return callback(null, `Options added successfully`);

    }

  );

};

//voting
exports.castvote = (data, callback) => {

  db.query(

      `INSERT INTO vote(voteId, queryId, optionId, userId) VALUES (?,?,?,?)`,

      [data.voteId, data.queryId, data.optionId, data.userId],

    (error, results, fields) => {

      if (error) {

        return callback(error);

      }

      return callback(null, `vote casted successfully`);

    }

  );

};

//get All votes
exports.getAllvote = (data, callback) => {
  db.query(

 

    'select firstName,lastName, optionId, options, queryName from users u INNER JOIN query q ON u.userId != q.userId INNER JOIN options o ON o.queryId=q.queryId',
    [],



       (error, results, fields) => {

      if (error) {

        return callback(error);

      }

      return callback( null,results);

    }

   );

};