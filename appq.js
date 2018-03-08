var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var index = require('./routes/index');
var http = require('http');
var mysql = require('mysql')
var myConnection  = require('express-myconnection')
var config = require('./config')
var dbOptions = {
    host:      config.database.host,
    user:       config.database.user,
    password: config.database.password,
    port:       config.database.port, 
    database: config.database.db
}
var app = express();

app.use(myConnection(mysql, dbOptions, 'pool'))

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.set('port', process.env.PORT || 3000);
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// app.get('/users', users);
// app.use(app.router);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.listen(3000, function(){
  console.log('Server running at port 3000: http://127.0.0.1:3000')
})


// var express = require('express');
// var routes = require('./routes');
// var http = require('http');
// var path = require('path');
// //load customers route
// var users = require('./routes/users'); 
// var app = express();
// var connection  = require('express-myconnection'); 
// var mysql = require('mysql');
// // all environments
// app.set('port', process.env.PORT || 4300);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// //app.use(express.favicon());
// // app.use(express.logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded());
// // app.use(express.methodOverride());
// // app.use(express.static(path.join(__dirname, 'public')));
// // development only
// if ('development' == app.get('env')) {
//   // app.use(express.errorHandler());
// }
// /*------------------------------------------
//     connection peer, register as middleware
//     type koneksi : single,pool and request 
// -------------------------------------------*/
// app.use(
    
//     connection(mysql,{
        
//         host: 'localhost',
//         user: 'root',
//         password : '',
//         port : 3306, //port mysql
//         database:'setapak'
//     },'request')
// );//route index, hello world
// // app.get('/', routes.index);//route customer list
// app.get('/customers', customers.list);//route add customer, get n post
// // app.get('/customers/add', customers.add);
// // app.post('/customers/add', customers.save);//route delete customer
// // app.get('/customers/delete/:id', customers.delete_customer);//edit customer route , get n post
// // app.get('/customers/edit/:id', customers.edit); 
// // app.post('/customers/edit/:id',customers.save_edit);
// app.use(app.router);
// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });
