var pug = require("pug") ;
var fs = require( "fs") ;

fs.writeFile("dist/index.html", pug.renderFile( "views/testPug.pug", { pretty: true })) ;