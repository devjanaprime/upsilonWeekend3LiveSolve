// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// uses
app.use( express.static( 'public' ) ); 

// spin up server
app.listen( 3042, function(){
  console.log( 'server up on 3042' );
}); // end server spin up

// home base`
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); //end home base
