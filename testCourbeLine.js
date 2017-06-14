testCourbeLine = 
function (){ 
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
	, output : [ [ 93.32211811462604, 40 ] ]
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
	, output : [ [ 31.677881885373967, 60 ], [ 51.57196689004137, 60 ] ]
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
	, output : [ [ 93.32211811462604, 40 ], [ 73.42803310995862, 40 ] ]
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
	, output : [ [ 100, 50 ], [ 25, 50 ], [ 62.5, 50 ] ]
	}
test[15] = 
	{ name : "Test Intersection Path vertical 1 : no intersection right "
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
	{ name : "Test Intersection Path vertical 2 : no intersection left "
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
	{ name : "Test Intersection Path vertical 3 : no intersection top "
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
	{ name : "Test Intersection Path vertical 4 : no intersection bottom "
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
	{ name : "Test Intersection Path vertical 5 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 25, 25, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[20] = 
	{ name : "Test Intersection Path vertical 6 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 100, 25, 100, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[21] = 
	{ name : "Test Intersection Path vertical 7 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 62.5, 25, 62.5, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 50 ] ]
	}
test[22] = 
	{ name : "Test Intersection Path vertical 8 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 25, 50, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 50, 61.111111111111114 ] ]
	}
test[23] = 
	{ name : "Test Intersection Path diagonal 1 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 75, 20, 10 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[24] = 
	{ name : "Test Intersection Path diagonal 2 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 75, 120, 10 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[25] = 
	{ name : "Test Intersection Path diagonal 3 : no intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 40, 60, 60, 10 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[26] = 
	{ name : "Test Intersection Path diagonal 4 : no intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 70, 80, 85, 40 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[27] = 
	{ name : "Test Intersection Path diagonal 5 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 10, 70, 40, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[28] = 
	{ name : "Test Intersection Path diagonal 6 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 85, 70, 115, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[29] = 
	{ name : "Test Intersection Path diagonal 7 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 42.5, 70, 82.5, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 50 ] ]
	}
test[30] = 
	{ name : "Test Intersection Path diagonal 8 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 35, 80, 62.5, 10 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 41.11660036702074, 64.43047179303812 ] ]
	}
test[31] = 
	{ name : "Test Intersection Path diagonal 9 : 2 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 80, 75, 40 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 41.4243985437011, 64.41861924094466 ], [ 65.93942100358088, 46.58951199739573 ] ]
	}
test[32] = 
	{ name : "Test Intersection Path diagonal 10 : 2 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 55, 110, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 90.96082828250451, 37.93298821562311 ], [ 62.85719841548036, 49.64283399354984 ] ]
	}
test[33] = 
	{ name : "Test Intersection Path diagonal 11 : 3 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line(  22.5, 70, 102.5, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 89.01650429449553, 36.74174785275224 ], [ 35.98349570550447, 63.25825214724777 ], [ 62.5, 50 ] ]
	}
test[34] = 
	{ name : "Test Intersection Path diagonal 12 : 3 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line(  22.5, 70, 102.5, 25 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 83.69893010751673, 35.575601814521875 ], [ 35.22155426028647, 62.844125728588864 ], [ 68.5795156321968, 44.080272456889304 ] ]
	}
test[35] = 
	{ name : "Test Intersection Path diagonal 13 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 10, 20, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[36] = 
	{ name : "Test Intersection Path diagonal 14 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 10, 120, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[37] = 
	{ name : "Test Intersection Path diagonal 15 : no intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 40, 10, 60, 40 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[38] = 
	{ name : "Test Intersection Path diagonal 16 : no intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 70, 60, 85, 80 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[39] = 
	{ name : "Test Intersection Path diagonal 17 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 30, 30, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[40] = 
	{ name : "Test Intersection Path diagonal 18 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 95, 30, 105, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[41] = 
	{ name : "Test Intersection Path diagonal 19 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 42.5, 30, 82.5, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 50 ] ]
	}
test[42] = 
	{ name : "Test Intersection Path diagonal 20 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 35, 10, 62.5, 80 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 53.91139431659997, 58.138094624072664 ] ]
	}
test[43] = 
	{ name : "Test Intersection Path diagonal 21 : 2 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 50, 75, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 26.178274138978924, 52.246645141446876 ], [ 50.195098386989535, 60.98003577708711 ] ]
	}
test[44] = 
	{ name : "Test Intersection Path diagonal 22 : 2 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 30, 110, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 97.76499071340086, 45.92166357113365 ], [ 75.56417095232752, 38.521390317442524 ] ]
	}
test[45] = 
	{ name : "Test Intersection Path horizontal 16 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 75, 20, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[46] = 
	{ name : "Test Intersection Path horizontal 17 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 75, 120, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[47] = 
	{ name : "Test Intersection Path horizontal 18 : no intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 20, 120, 20 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[48] = 
	{ name : "Test Intersection Path horizontal 19 : no intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 100, 120, 100 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[49] = 
	{ name : "Test Intersection Path horizontal 20 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 50, 50, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[50] = 
	{ name : "Test Intersection Path horizontal 21 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 75, 50, 125, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[51] = 
	{ name : "Test Intersection Path horizontal 22 : 1 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 87.5, 75, 87.5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 87.5 ] ]
	}
test[52] = 
	{ name : "Test Intersection Path horizontal 23 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 75, 50, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 40.84936490538904, 75 ] ]
	}
test[53] = 
	{ name : "Test Intersection Path horizontal 24 : 2 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 50, 125, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ], [ 100, 50 ] ]
	}
test[54] = 
	{ name : "Test Intersection Path horizontal 25 : 2 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 75, 125, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 40.84936490538904, 75 ], [ 84.15063509461096, 74.99999999999999 ] ]
	}
test[55] = 
	{ name : "Test Intersection Path vertical 9 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 5, 5, 100 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[56] = 
	{ name : "Test Intersection Path vertical 10 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 125, 5, 125, 100 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[57] = 
	{ name : "Test Intersection Path vertical 11 : no intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 62.5, 5, 62.5, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[58] = 
	{ name : "Test Intersection Path vertical 12 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 5, 25, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[59] = 
	{ name : "Test Intersection Path vertical 13 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 100, 5, 100, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[60] = 
	{ name : "Test Intersection Path vertical 14 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 62.5, 5, 62.5, 125 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 87.5 ] ]
	}
test[61] = 
	{ name : "Test Intersection Path diagonal 23 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 100, 20, 5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[62] = 
	{ name : "Test Intersection Path diagonal 24 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 100, 120, 5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[63] = 
	{ name : "Test Intersection Path diagonal 25 : no intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 40, 70, 80, 5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[64] = 
	{ name : "Test Intersection Path diagonal 26 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 70, 45, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[65] = 
	{ name : "Test Intersection Path diagonal 27 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 80, 70, 120, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[66] = 
	{ name : "Test Intersection Path diagonal 28 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 42.5, 107.5, 82.5, 67.5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 87.5 ] ]
	}
test[67] = 
	{ name : "Test Intersection Path diagonal 29 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 22.5, 100, 62.5, 67.5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 46.396120714851556, 80.58440191918311 ] ]
	}
test[68] = 
	{ name : "Test Intersection Path diagonal 30 : 2 intersections rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 100, 100, 55 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 51.35440891603885,84.18735465037669 ], [ 96.14559108396114,57.312645349623295 ] ]
	}
test[69] = 
	{ name : "Test Intersection Path diagonal 31 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 5, 20, 90 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[70] = 
	{ name : "Test Intersection Path diagonal 32 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 5, 120, 90 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[71] = 
	{ name : "Test Intersection Path diagonal 33 : no intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 42.5, 20, 82.5, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[72] = 
	{ name : "Test Intersection Path diagonal 34 : 1 intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 30, 45, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[73] = 
	{ name : "Test Intersection Path diagonal 35 : 1 intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 80, 30, 120, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 100, 50 ] ]
	}
test[74] = 
	{ name : "Test Intersection Path diagonal 36 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 42.5, 67.5, 82.5, 107.5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 62.5, 87.5 ] ]
	}
test[75] = 
	{ name : "Test Intersection Path diagonal 37 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 55, 5, 85, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 75.36956103491244, 83.0833173004977 ] ]
	}
test[76] = 
	{ name : "Test Intersection Path diagonal 38 : 2 intersections rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 100 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 50, 120, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 27.860106902426867, 55.502074831698806 ], [ 70.88989309757312, 85.62292516830118 ] ]
	}
test[77] = 
	{ name : "Test Intersection Path horizontal 26 : no intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 30, 120, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[78] = 
	{ name : "Test Intersection Path horizontal 27 : no intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 120, 120, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[79] = 
	{ name : "Test Intersection Path horizontal 28 : no intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 75, 70, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[80] = 
	{ name : "Test Intersection Path horizontal 29 : 1 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 50, 70, 50 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[81] = 
	{ name : "Test Intersection Path horizontal 30 : 1 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 100, 70, 100 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 100 ] ]
	}
test[82] = 
	{ name : "Test Intersection Path horizontal 31 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 75, 120, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 81.25, 75 ] ]
	}
test[83] = 
	{ name : "Test Intersection Path horizontal 32 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 65, 120, 65 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 77.04283440785956, 64.99999999999996 ] ]
	}
test[84] = 
	{ name : "Test Intersection Path vertical 15 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 20, 5, 20, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[85] = 
	{ name : "Test Intersection Path vertical 16 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 110, 5, 110, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[86] = 
	{ name : "Test Intersection Path vertical 17 : no intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 45, 65, 45, 85 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[87] = 
	{ name : "Test Intersection Path vertical 18 : 1 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 25, 25, 85 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[88] = 
	{ name : "Test Intersection Path vertical 19 : 1 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 80, 25, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 100 ] ]
	}
test[89] = 
	{ name : "Test Intersection Path vertical 20 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 81.25, 30, 81.25, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 81.25, 75 ] ]
	}
test[90] = 
	{ name : "Test Intersection Path vertical 21 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 75, 30, 75,75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 75, 62.96296296296296 ] ]
	}
test[91] = 
	{ name : "Test Intersection Path vertical 22 : 2 intersections left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 30, 25,120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ], [ 25, 100 ] ]
	}
test[92] = 
	{ name : "Test Intersection Path vertical 23 : 2 intersections rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 45, 30, 45,120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 45, 51.36279582681512 ], [ 44.99999999999997, 98.63720417318488 ] ]
	}
test[93] = 
	{ name : "Test Intersection Path diagonal 39 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 120, 20,20 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[94] = 
	{ name : "Test Intersection Path diagonal 40 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 120, 120,20 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[95] = 
	{ name : "Test Intersection Path diagonal 41 : no intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 40, 90, 60,60 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[96] = 
	{ name : "Test Intersection Path diagonal 42 : 1 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 70, 45, 30 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[97] = 
	{ name : "Test Intersection Path diagonal 43 : 1 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 120, 45, 80 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 100 ] ]
	}
test[98] = 
	{ name : "Test Intersection Path diagonal 44 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 61.25, 85, 101.25, 65 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 81.25, 75 ] ]
	}
test[99] = 
	{ name : "Test Intersection Path diagonal 45 : 2 intersections rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 45, 120, 120, 5 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 61.568628651420624, 94.59476940115502 ], [ 79.08465759488865, 67.73685835450402 ] ]
	}
test[100] = 
	{ name : "Test Intersection Path diagonal 46 : no intersection left "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 5, 20, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[101] = 
	{ name : "Test Intersection Path diagonal 47 : no intersection right "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 105, 5, 120, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[102] = 
	{ name : "Test Intersection Path diagonal 48 : no intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 55, 60, 80 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ ] ]
	}
test[103] = 
	{ name : "Test Intersection Path diagonal 49 : 1 intersection top "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 30, 45, 70 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 50 ] ]
	}
test[104] = 
	{ name : "Test Intersection Path diagonal 50 : 1 intersection bottom "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 5, 80, 45, 120 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 25, 100 ] ]
	}
test[105] = 
	{ name : "Test Intersection Path diagonal 51 : 1 intersection middle "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 51.25, 55, 111.25, 95 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 81.25, 75 ] ]
	}
test[106] = 
	{ name : "Test Intersection Path diagonal 52 : 1 intersection rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 31.25, 55, 101.25, 95 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 79.05238538109622, 82.31564878919772 ] ]
	}
test[107] = 
	{ name : "Test Intersection Path diagonal 53 : 2 intersections rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 100 50 100 100 25 100' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 25, 5, 100, 100 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 66.38444624084626, 57.42029857173852 ], [ 81.1943174014132, 76.17946870845674 ] ]
	}
		return test
}