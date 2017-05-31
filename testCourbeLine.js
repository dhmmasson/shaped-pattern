var test = [] 
test[0] = 
	{ name : "Test Intersection Path horizontal 1 : no intersection top"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 0, 10, 125, 10 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[1] = 
	{ name : "Test Intersection Path horizontal 2 : no intersection bottom"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 0, 90, 125, 90 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[2] = 
	{ name : "Test Intersection Path horizontal 3 : no intersection right"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 0, 50, 20, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[3] = 
	{ name : "Test Intersection Path horizontal 4 : no intersection left"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 50, 120, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[4] = 
	{ name : "Test Intersection Path horizontal 5 : no intersection middle right"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 30, 50, 45, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[5] = 
	{ name : "Test Intersection Path horizontal 6 : no intersection middle left"
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 80, 50, 95, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[6] = 
	{ name : "Test Intersection Path horizontal 7 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 50, 45, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[7] = 
	{ name : "Test Intersection Path horizontal 8 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 30, 50, 70, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 50 ] ]
	}
test[8] = 
	{ name : "Test Intersection Path horizontal 9 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 75, 50, 120, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[9] = 
	{ name : "Test Intersection Path horizontal 10 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 75, 40, 120, 40 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 93.322, 40 ] ]
	}
test[10] = 
	{ name : "Test Intersection Path horizontal 11 : 2 intersections middle right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 50, 75, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ], [ 62.5, 50 ] ]
	}
test[11] = 
	{ name : "Test Intersection Path horizontal 12 : 2 intersections middle left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 50, 120, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ], [ 62.5, 50 ] ]
	}
test[12] = 
	{ name : "Test Intersection Path horizontal 13 : 2 intersections middle bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 60, 75, 60 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 60 ], [ 62.5, 60 ] ]
	}
test[13] = 
	{ name : "Test Intersection Path horizontal 14 : 2 intersections middle top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 40, 120, 40 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 40 ], [ 62.5, 40 ] ]
	}
test[14] = 
	{ name : "Test Intersection Path horizontal 15 : 3 intersections "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 0, 50, 120, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ], [ 100, 50 ], [ 62.5, 50 ] ]
	}
test[15] = 
	{ name : "Test Intersection Path vertical 1 : no intersections right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 5, 5, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[16] = 
	{ name : "Test Intersection Path vertical 2 : no intersections left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 5, 105, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[17] = 
	{ name : "Test Intersection Path vertical 3 : no intersections top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 5, 50, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[18] = 
	{ name : "Test Intersection Path vertical 4 : no intersections bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 75, 50, 75, 100 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[19] = 
	{ name : "Test Intersection Path vertical 5 : 1 intersections left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 25, 25, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25,50 ] ]
	}
test[20] = 
	{ name : "Test Intersection Path vertical 6 : 1 intersections right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 100, 25, 100, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100,50 ] ]
	}
test[21] = 
	{ name : "Test Intersection Path vertical 7 : 1 intersections middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 62.5, 25, 62.5, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5,50 ] ]
	}