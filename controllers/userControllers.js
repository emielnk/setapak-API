var userController = {}

userController.getUser = (req, res) => {
    req.getConnection(function(err,connection){
        connection.query('SELECT * FROM user',function(err,rows){
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

userController.getUserById = (req, res) => {
    var a = req.params.id
    var query = 'SELECT * FROM user WHERE id_wisatawan = ?'
    req.getConnection(function (err, conn) {
        conn.query(query, a, function (err, rows) {
            res.json(rows)
        })
    })
}

module.exports = userController;