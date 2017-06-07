var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 40 50 90 50 90 20' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 30 5 C 30 60 60 100 100 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}