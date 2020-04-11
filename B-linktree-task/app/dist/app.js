var createError=require('http-errors'),express=require('express'),path=require('path'),cookieParser=require('cookie-parser'),logger=require('morgan'),indexRouter=require('./routes/index'),usersRouter=require('./routes/users'),app=express();// view engine setup
// catch 404 and forward to error handler
// error handler
app.set('views',path.join(__dirname,'views')),app.set('view engine','jade'),app.use(logger('dev')),app.use(express.json()),app.use(express.urlencoded({extended:!1})),app.use(cookieParser()),app.use(express.static(path.join(__dirname,'public'))),app.use('/',indexRouter),app.use('/users',usersRouter),app.use(function(a,b,c){c(createError(404))}),app.use(function(a,b,c){// set locals, only providing error in development
// render the error page
c.locals.message=a.message,c.locals.error='development'===b.app.get('env')?a:{},c.status(a.status||500),c.render('error')}),module.exports=app;
//# sourceMappingURL=app.js.map