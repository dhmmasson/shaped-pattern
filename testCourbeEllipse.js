var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 40 15 70 25 90 20' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 15 40 C 30 35 75 50 80 10' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}