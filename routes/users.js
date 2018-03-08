var express = require('express')
var app = express()

/* GET users listing. */
// router.get('/user', function(req, res, next) {
//   res.send('respond with a resource');
// });

app.get('/users', function(req, res, next) {
  req.getConnection(function(error, conn) {
      conn.query('SELECT * FROM wisatawan',function(err, rows, fields) {
          //if(err) throw err
          if (err) {
              //req.flash('error', err)
              res.render('user/list', {
                  title: 'User List', 
                  data: ''
              })
          } else {
              // render to views/user/list.ejs template file
              res.render('user/list', {
                  title: 'User List', 
                  data: rows
              })
          }
      })
  })
})

module.exports = app;