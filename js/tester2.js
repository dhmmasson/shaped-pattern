var tester2 = 
(function() {

	var Tester2 = {};
	
	Tester2.loadLibrary = function( library ) {
		this.library = library;
	}

	Tester2.run = function( path, form )  {
		var splittedData = Splitting.phase1( path, form, 0 );
		console.log( "splittedData", splittedData );
		for( var i in splittedData ){
			if( splittedData[i].type == "l" ){
				var part1 = splittedData[i].value[0];
				var part2 = splittedData[i].value[1];
				svg.path( 'M ' + part1[0] + ' ' + part1[1] + ' L ' + part1[2] + ' ' + part1[3] )
				 	 .stroke( { width : 1 , color: "red" } ).fill("none");
				 svg.path( 'M ' + part2[0] + ' ' + part2[1] + ' L ' + part2[2] + ' ' + part2[3] )
				 	 .stroke( { width : 1 , color: "green" } ).fill("none");
			} else if( splittedData[i].type == "b" ){
				var part1 = splittedData[i].value[0];
				var part2 = splittedData[i].value[1];
				svg.path( 'M ' + part1[0] + ' ' + part1[1] + ' C ' + part1[2] + ' ' + part1[3] + ' ' + part1[4] + ' ' + part1[5] + ' ' + part1[6] + ' ' + part1[7])
					 .stroke( { width : 1 , color: "red" } ).fill("none");
				svg.path( 'M ' + part2[0] + ' ' + part2[1] + ' C ' + part2[2] + ' ' + part2[3] + ' ' + part2[4] + ' ' + part2[5] + ' ' + part2[6] + ' ' + part2[7])
				 	 .stroke( { width : 1 , color: "green" } ).fill("none");
			}
		}
	}
	return Tester2;
})()