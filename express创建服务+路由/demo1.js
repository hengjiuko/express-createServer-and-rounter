var express = require("express");
app = express();
//console.log( app );

//创建一个服务

//   '/'是根目录
app.get( '/',function( req,res ){
    res.send( "第一个 express demo" );
} ).listen( 2345,function(){
    console.log( "2345,已经执行完毕" );
} );
