var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 40 15 70 25 90 20' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 15 40 C 30 40 80 30 80 10' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}
/*test[1] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 15 75 80 100 55' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 30 50 C 45 5 70 100 95 40' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}*/