testCourbeEllipse = 
function (){ 
	var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 40 15 70 25 90 20' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 100, 50 )
				 .move(10,10)
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
test[1] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 15 75 80 100 55' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 90, 60 )
				 .move(10,10)
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [[87.31097656721039,60.880621336109876]]	
	}
test[2] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 15 25 C 400 50 -250 55 135 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 100, 50 )
				 .move(20,20)
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
test[3] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 30 65 C 50 -150 75 200 115 25' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 100, 50 )
				 .move(20,20)
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ ] ]
	}
		return test
}