
const connection = require('../models/database.utils');
exports.profileUpdate = function(req, res, next) {
    const params = [
      req.body.firstname,
      req.body.lastname ,
      req.body.user
    ];
  
    connection.execute(
      'UPDATE `tbl_users` SET `firstname`= ?, `lastname`= ? WHERE user = ?',
      params,
      function (err, results, fields) {
        if (err) {
          res.json({status: 'error', message: err})
          return
        } else {
        
            res.json({ status : 'ok',message : 'Update Successfuly' });
   
        }
      }
    );
  };
  