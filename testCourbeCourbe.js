testCourbeCourbe = 
function() { 
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
test[1] = 
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
	}
test[2] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 15 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 20 30 C 45 25 110 60 110 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}
test[3] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 5 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 20 30 C 45 35 110 60 110 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}
test[4] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 5 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 20 40 C 45 35 110 60 110 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}
test[5] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 5 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 25 35 C 200 40 -150 45 110 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}
test[6] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 60 C 50 -15 75 100 120 35' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 25 40 C 400 40 -200 45 110 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ ] ]
	}
	return test
}