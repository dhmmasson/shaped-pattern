var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : intersection rdm"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 10 10 C 10 60 100 60 10 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 5, 25, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 0, 0 ] ]
	}