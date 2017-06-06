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
test[1] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 125 100 0 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 50, 150 )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
test[2] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 20 100 125 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 50, 150 )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
test[3] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 20 110 125 30 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 50, 150 )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
test[4] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 125 100 0 100 100 60' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 50, 150 )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
test[5] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 100 C 50 50 75 100 125 25' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 50, 150 )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}