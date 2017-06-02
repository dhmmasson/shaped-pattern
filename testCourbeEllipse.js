var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 50, 150 )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}