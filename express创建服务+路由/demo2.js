//路由的例子

var express = require("express");
app = express();


//创建一个服务
// '/'这是根目录的意思
app.get( '/',function( req,res ){
    res.send( "第一个 express demo" );
} );

app.get( '/a',function( req,res ){
    res.send( "这是aaa页面" );
} );

app.get( '/b',function( req,res ){
    res.send( "这是bbb页面" );
} );


app.listen( 2345,function(){
    console.log( "2345,执行完毕" );
} );

