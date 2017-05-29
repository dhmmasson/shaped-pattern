var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : intersection rdm"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( M 5 5 C 100 100 150 200 200 200)
				 .stroke( { width : 1 } );
			var line = svg.line( 0, 0, 0, 0 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [  ] ]
	}