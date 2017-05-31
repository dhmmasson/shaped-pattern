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
	, output : [ [31.677881885373967,60],[51.57196689004137,60] ]
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
	, output : [ [93.32211811462604,40],[73.42803310995862,40] ]
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
test[22] = 
	{ name : "Test Intersection Path vertical 8 : 1 intersections rdm "
	, target : "intersectionBezierLine"
	, input : function( svg ) { 
			var path = svg.path( 'M 25 50 C 50 100 75 0 100 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			var line = svg.line( 50, 25, 50, 75 )
				 .stroke( { width : 1 } );
			return [ path, line ];
		}
	, output : [ [ 50,61.111111111111114 ] ]
	}
test[23] = 
	{ name : "Test Intersection Path diagonal 1 : no intersections left "
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
	, output : [ [41.11660036702074,64.43047179303812] ]
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
	, output : [ [41.4243985437011,64.41861924094466],[65.93942100358088,46.58951199739573] ]
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
	, output : [ [90.96082828250451,37.93298821562311],[62.85719841548036,49.64283399354984] ]
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
	, output : [ [89.01650429449553,36.74174785275224],[35.98349570550447,63.25825214724777],[62.5,50] ]
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
	, output : [ [83.69893010751673,35.575601814521875],[35.22155426028647,62.844125728588864],[68.5795156321968,44.080272456889304] ]
	}
test[35] = 
	{ name : "Test Intersection Path diagonal 13 : no intersections left "
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
	, output : [ [53.91139431659997,58.138094624072664] ]
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
	, output : [ [26.178274138978924,52.246645141446876],[50.195098386989535,60.98003577708711] ]
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
	, output : [ [97.76499071340086,45.92166357113365],[75.56417095232752,38.521390317442524] ]
	}
test[45] = 
	{ name : "Test Intersection Path horitzontal 16 : no intersection left "
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
	{ name : "Test Intersection Path horitzontal 17 : no intersection right "
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
	{ name : "Test Intersection Path horitzontal 18 : no intersection top "
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