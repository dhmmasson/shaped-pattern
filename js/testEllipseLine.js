testEllipseLine = 
function (){ 
var test = [] 
test[0] = 
	{ name : "Test Intersection ellipse horizontal 1 : no intersection top left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 10, 10, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[1] = 
	{ name : "Test Intersection ellipse horizontal 2 : no intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 10, 190, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[2] = 
	{ name : "Test Intersection ellipse horizontal 3 : no intersection top right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 10, 220, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[3] = 
	{ name : "Test Intersection ellipse horizontal 4 : no intersection middle left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 60, 10, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[4] = 
	{ name : "Test Intersection ellipse horizontal 5 : no intersection middle"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 60, 190, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[5] = 
	{ name : "Test Intersection ellipse horizontal 6 : no intersection middle right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 60, 220, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[6] = 
	{ name : "Test Intersection ellipse horizontal 7 : no intersection bottom left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 110, 10, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[7] = 
	{ name : "Test Intersection ellipse horizontal 8 : no intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 110, 190, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[8] = 
	{ name : "Test Intersection ellipse horizontal 9 : no intersection bottom right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 110, 220, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[9] = 
	{ name : "Test Intersection ellipse horizontal 10 : one intersection left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 60, 30, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 20, 60 ] ]
	}
test[10] = 
	{ name : "Test Intersection ellipse horizontal 11 : one intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 20, 210, 20' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 20 ] ]
	}
test[11] = 
	{ name : "Test Intersection ellipse horizontal 12 : one intersection right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 190, 60, 210, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 200, 60 ] ]
	}
test[12] = 
	{ name : "Test Intersection ellipse horizontal 13 : one intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 100, 190, 100' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 100 ] ]
	}
test[13] = 
	{ name : "Test Intersection ellipse horizontal 14 : two intersections rdm"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 60, 210, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 20, 60 ], [ 200, 60 ] ]
	}
test[14] = 
	{ name : "Test Intersection ellipse vertical 1 : no intersection top left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 0, 10, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[15] = 
	{ name : "Test Intersection ellipse vertical 2 : no intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 0, 110, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[16] = 
	{ name : "Test Intersection ellipse vertical 3 : no intersection top right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 0, 210, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[17] = 
	{ name : "Test Intersection ellipse vertical 4 : no intersection middle left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 30, 10, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[18] = 
	{ name : "Test Intersection ellipse vertical 5 : no intersection middle"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 30, 110, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[19] = 
	{ name : "Test Intersection ellipse vertical 6 : no intersection middle right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 30, 210, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[20] = 
	{ name : "Test Intersection ellipse vertical 7 : no intersection bottom left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 110, 10, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[21] = 
	{ name : "Test Intersection ellipse vertical 8 : no intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 110, 110, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[22] = 
	{ name : "Test Intersection ellipse vertical 9 : no intersection bottom right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 110, 210, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[23] = 
	{ name : "Test Intersection ellipse vertical 10 : one intersection left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 20, 30, 20, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 20, 60 ] ]
	}
test[24] = 
	{ name : "Test Intersection ellipse vertical 11 : one intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 10, 110, 30' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 20 ] ]
	}
test[25] = 
	{ name : "Test Intersection ellipse vertical 12 : one intersection right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 200, 30, 200, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 200, 60 ] ]
	}
test[26] = 
	{ name : "Test Intersection ellipse vertical 13 : one intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 90, 110, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 100 ] ]
	}
test[27] = 
	{ name : "Test Intersection ellipse vertical 14 : two intersections rdm"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 10, 110, 210' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 20 ], [ 110, 100 ] ]
	}
test[28] = 
	{ name : "Test Intersection ellipse diagonal 1 : no intersection top left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 0, 10, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[29] = 
	{ name : "Test Intersection ellipse diagonal 2 : no intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 0, 190, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[30] = 
	{ name : "Test Intersection ellipse diagonal 3 : no intersection top right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 0, 220, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[31] = 
	{ name : "Test Intersection ellipse diagonal 4 : no intersection middle left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 30, 10, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[32] = 
	{ name : "Test Intersection ellipse diagonal 5 : no intersection middle"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 100, 50, 120, 70' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[33] = 
	{ name : "Test Intersection ellipse diagonal 6 : no intersection middle right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 50, 220, 70' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[34] = 
	{ name : "Test Intersection ellipse diagonal 7 : no intersection bottom left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 110, 10, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[35] = 
	{ name : "Test Intersection ellipse diagonal 8 : no intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 110, 190, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[36] = 
	{ name : "Test Intersection ellipse diagonal 9 : no intersection bottom right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 110, 220, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[37] = 
	{ name : "Test Intersection ellipse diagonal 10 : one intersection left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 50, 30, 70' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 20, 60 ] ]
	}
test[38] = 
	{ name : "Test Intersection ellipse diagonal 11 : one intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 100, 10, 120, 30' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 20 ] ]
	}
test[39] = 
	{ name : "Test Intersection ellipse diagonal 12 : one intersection right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 190, 50, 210, 70' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 200, 60 ] ]
	}
test[40] = 
	{ name : "Test Intersection ellipse diagonal 13 : one intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 100, 90, 120, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 100 ] ]
	}
test[41] = 
	{ name : "Test Intersection ellipse diagonal 14 : two intersections rdm"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M -25, 40, 155, 120' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 20, 60 ], [ 110, 100 ] ]
	}
test[42] = 
	{ name : "Test Intersection ellipse diagonal 15 : no intersection top left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 10, 10, 0' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[43] = 
	{ name : "Test Intersection ellipse diagonal 16 : no intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 10, 190, 0' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[44] = 
	{ name : "Test Intersection ellipse diagonal 17 : no intersection top right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 10, 220, 0' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[45] = 
	{ name : "Test Intersection ellipse diagonal 18 : no intersection middle left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 90, 10, 30' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[46] = 
	{ name : "Test Intersection ellipse diagonal 19 : no intersection middle"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 100, 70, 120, 50' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[47] = 
	{ name : "Test Intersection ellipse diagonal 20 : no intersection middle right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 70, 220, 50' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[48] = 
	{ name : "Test Intersection ellipse diagonal 21 : no intersection bottom left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 0, 120, 10, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[49] = 
	{ name : "Test Intersection ellipse diagonal 22 : no intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 30, 120, 190, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[50] = 
	{ name : "Test Intersection ellipse diagonal 23 : no intersection bottom right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 210, 120, 220, 110' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : []
	}
test[51] = 
	{ name : "Test Intersection ellipse diagonal 24 : one intersection left"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 10, 70, 30, 50' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 20, 60 ] ]
	}
test[52] = 
	{ name : "Test Intersection ellipse diagonal 25 : one intersection top"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 100, 30, 120, 10' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 20 ] ]
	}
test[53] = 
	{ name : "Test Intersection ellipse diagonal 26 : one intersection right"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 190, 70, 210, 50' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 200, 60 ] ]
	}
test[54] = 
	{ name : "Test Intersection ellipse diagonal 27 : one intersection bottom"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 100, 110, 120, 90' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 100 ] ]
	}
test[55] = 
	{ name : "Test Intersection ellipse diagonal 28 : two intersections rdm"
	, target : "intersectionEllipseLine"
	, input : function( svg ) { 
			var ellipse = svg.ellipse( 180, 80 )
				 .move( 20, 20 )
				 .fill('none')
				 .stroke( { width : 1 } );
			var line = svg.path('M 110, 100, 200, 60' )
				 .stroke( { width : 1 } );
			return [ ellipse, line ];
		}
	, output : [ [ 110, 100 ], [ 200, 60 ] ]
	}
		return test
}
