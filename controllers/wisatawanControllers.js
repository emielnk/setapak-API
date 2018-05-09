var wisatawanController = {}
var authController = require("./authControllers")


wisatawanController.getUser = (req, res) => {
    req.getConnection(function(err,connection){
        connection.query('SELECT * FROM wisatawan',function(err,rows){
           if(err)
              console.log("Error Selecting : %s ", err);
           else {
               var objs = []
               for (var i = 0; i < rows.length; i++) {
                   objs.push({
                       username: rows[i].username,
                       email: rows[i].email,
                       phone: rows[i].phone_number
                   }) 
               }
               res.json(objs)
           } 
        });
    });
}

wisatawanController.getUserById = (req, res) => {
    var a = req.params.id
    var query = 'SELECT * FROM wisatawan WHERE id_wisatawan = ?'
    req.getConnection(function (err, conn) {
        conn.query(query, a, function (err, rows) {
            res.json(rows)
        })
    })
}

wisatawanController.getCurrentUserId = () => {
    return authController.getAuthId
}

module.exports = wisatawanController;