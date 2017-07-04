var tester2 = 
(function() {

	var Tester2 = {};

	var color = [ "chartreuse", "red", "blue", "green", "yellow", "indigo"  ]
	
	Tester2.loadLibrary = function( library ) {
		this.library = library;
	}

	Tester2.run = function( path, form )  {
		var splittedData = Splitting.phase1( path, form, 0 );
		console.log( "splittedData", splittedData );
		for( var i in splittedData ){
			if( splittedData[i].type == "l" ){
				for( var j in splittedData[i].value[0] ){
					var part = splittedData[i].value[0][j];
					svg.path( 'M ' + part[0] + ' ' + part[1] + ' L ' + part[2] + ' ' + part[3] )
					 	 .stroke( { width : 1 , color: color[j] } ).fill("none");
				}
			} else if( splittedData[i].type == "b" ){
				for( var j in splittedData[i].value[0] ){
					var part = splittedData[i].value[0][j];
					svg.path( 'M ' + part[0] + ' ' + part[1] + ' C ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5] + ' ' + part[6] + ' ' + part[7])
						 .stroke( { width : 1 , color: color[j] } ).fill("none");
				}
			}
		}
	}
	return Tester2;
})()