//路由的例子


var express = require("express");
app = express();


//  '/'，这是根路径的意思，
app.get( '/',function( req,res ){
    res.send( '首页<br/><a href="/a">去a页面</a><br/><a href="/b">去b页面</a>' );
} );

app.get( '/',function( req,res ){
    res.send( '首页<br/><a href="/a">去a页面</a><br/><a href="/b">去b页面</a>' );
} );


app.get( '/a',function( req,res ){
    res.send( '这是aaa页面<br/><a href="/a/a1">去a1页面</a><br/><a href="/a/a2">去a2页面</a>' );
} );


app.get( '/a/a1',function( req,res ){
    res.send( '这是a111页面<br/><a href="/">回首页</a><br/>' );
} );


app.get( '/a/a2',function( req,res ){
    res.send( '这是a222页面<br/><a href="/">回首页</a><br/>' );
} );


app.get( '/b',function( req,res ){
    res.send( '这是bbb页面<br/><a href="/b/b1">去b1页面</a><br/><a href="/b/b2">去b2页面</a>' );
} );


app.get( '/b/b1',function( req,res ){
    res.send( '这是b111页面<br/><a href="/">回首页</a>' );
} );


app.get( '/b/b2',function( req,res ){
    res.send( '这是b222页面<br/><a href="/">回首页</a>' );
} );


app.listen( 2345,function(){
    console.log( "2345,执行完毕" );
} );


