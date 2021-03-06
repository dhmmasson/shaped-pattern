testLineLine = 
function() { 
var test = [] 
test[0] = 
	{ name : "Test Intersection horizontal vertical 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 0, 0' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 0, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 0, 0 ] ]
	}
test[1] = 
	{ name : "Test Intersection horizontal vertical 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[2] = 
	{ name : "Test Intersection horizontal vertical 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[3] = 
	{ name : "Test Intersection horizontal vertical 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[4] = 
	{ name : "Test Intersection horizontal vertical 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[5] = 
	{ name : "Test Intersection horizontal vertical 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[6] = 
	{ name : "Test Intersection horizontal vertical 6 : no intersection left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 40, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[7] = 
	{ name : "Test Intersection horizontal vertical 7 : no intersection up"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 40' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[8] = 
	{ name : "Test Intersection horizontal vertical 8 : no intersection right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[9] = 
	{ name : "Test Intersection horizontal vertical 9 : no intersection down"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[10] = 
	{ name : "Test Intersection horizontal vertical 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[11] = 
	{ name : "Test Intersection vertical horizontal 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[12] = 
	{ name : "Test Intersection vertical horizontal 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[13] = 
	{ name : "Test Intersection vertical horizontal 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[14] = 
	{ name : "Test Intersection vertical horizontal 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[15] = 
	{ name : "Test Intersection vertical horizontal 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[16] = 
	{ name : "Test Intersection vertical horizontal 6 : no intersection up"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 40' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[17] = 
	{ name : "Test Intersection vertical horizontal 7 : no intersection left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 40, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[18] = 
	{ name : "Test Intersection vertical horizontal 8 : no intersection down"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[19] = 
	{ name : "Test Intersection vertical horizontal 9 : no intersection right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[20] = 
	{ name : "Test Intersection vertical horizontal 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[21] = 
	{ name : "Test Intersection vertical diagonal 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[22] = 
	{ name : "Test Intersection vertical diagonal 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[23] = 
	{ name : "Test Intersection vertical diagonal 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[24] = 
	{ name : "Test Intersection vertical diagonal 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[25] = 
	{ name : "Test Intersection vertical diagonal 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[26] = 
	{ name : "Test Intersection vertical diagonal 6 : no intersection up"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 50, 40' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[27] = 
	{ name : "Test Intersection vertical diagonal 7 : no intersection left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 40, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[28] = 
	{ name : "Test Intersection vertical diagonal 8 : no intersection down"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 60, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[29] = 
	{ name : "Test Intersection vertical diagonal 9 : no intersection right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[30] = 
	{ name : "Test Intersection vertical diagonal 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 60, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[31] = 
	{ name : "Test Intersection horizontal diagonal 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[32] = 
	{ name : "Test Intersection horizontal diagonal 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[33] = 
	{ name : "Test Intersection horizontal diagonal 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[34] = 
	{ name : "Test Intersection horizontal diagonal 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[35] = 
	{ name : "Test Intersection horizontal diagonal 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[36] = 
	{ name : "Test Intersection horizontal diagonal 6 : no intersection left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 40, 40' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[37] = 
	{ name : "Test Intersection horizontal diagonal 7 : no intersection up"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 40' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[38] = 
	{ name : "Test Intersection horizontal diagonal 8 : no intersection right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 60, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[39] = 
	{ name : "Test Intersection horizontal diagonal 9 : no intersection down"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[40] = 
	{ name : "Test Intersection horizontal diagonal 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 60, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[41] = 
	{ name : "Test Intersection diagonal horizontal 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[42] = 
	{ name : "Test Intersection diagonal horizontal 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[43] = 
	{ name : "Test Intersection diagonal horizontal 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[44] = 
	{ name : "Test Intersection diagonal horizontal 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[45] = 
	{ name : "Test Intersection diagonal horizontal 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[46] = 
	{ name : "Test Intersection diagonal horizontal 6 : no intersection left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 40, 40' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[47] = 
	{ name : "Test Intersection diagonal horizontal 7 : no intersection up"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 40' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[48] = 
	{ name : "Test Intersection diagonal horizontal 8 : no intersection right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 60, 60, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[49] = 
	{ name : "Test Intersection diagonal horizontal 9 : no intersection down"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[50] = 
	{ name : "Test Intersection diagonal horizontal 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 60, 60, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 60, 50, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[51] = 
	{ name : "Test Intersection diagonal vertical 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[52] = 
	{ name : "Test Intersection diagonal vertical 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[53] = 
	{ name : "Test Intersection diagonal vertical 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[54] = 
	{ name : "Test Intersection diagonal vertical 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[55] = 
	{ name : "Test Intersection diagonal vertical 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[56] = 
	{ name : "Test Intersection diagonal vertical 6 : no intersection up"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 50, 40' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[57] = 
	{ name : "Test Intersection diagonal vertical 7 : no intersection left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 40, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[58] = 
	{ name : "Test Intersection diagonal vertical 8 : no intersection down"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[59] = 
	{ name : "Test Intersection diagonal vertical 9 : no intersection right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[60] = 
	{ name : "Test Intersection diagonal vertical 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 50, 100, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[61] = 
	{ name : "Test Intersection diagonal diagonal 1 : intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[62] = 
	{ name : "Test Intersection diagonal diagonal 2 : intersection x1 y1"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 50, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[63] = 
	{ name : "Test Intersection diagonal diagonal 3 : intersection x2 y2"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 50, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[64] = 
	{ name : "Test Intersection diagonal diagonal 4 : intersection x3 y3"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 50, 50, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[65] = 
	{ name : "Test Intersection diagonal diagonal 5 : intersection x4 y4"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 50, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [ 50, 50 ] ]
	}
test[66] = 
	{ name : "Test Intersection diagonal diagonal 6 : no intersection up left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 50, 40' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[67] = 
	{ name : "Test Intersection diagonal diagonal 7 : no intersection down left"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 40, 50' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[68] = 
	{ name : "Test Intersection diagonal diagonal 8 : no intersection down right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 100, 00' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[69] = 
	{ name : "Test Intersection diagonal diagonal 9 : no intersection up right"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 0, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 50, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[70] = 
	{ name : "Test Intersection diagonal diagonal 10 : no intersection rdm"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 60, 100, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 60, 50, 100, 0' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[71] = 
	{ name : "Test Intersection vertical vertical 1 : no intersection"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 50, 0, 50, 100' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 100, 0, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
test[72] = 
	{ name : "Test Intersection horizontal horizontal 1 : no intersection"
	, target : "intersectionLineLine"
	, input : function( svg ) { 
			var line1 = svg.path('M 0, 50, 100, 50' )
				 .stroke( { width : 1 } );
			var line2 = svg.path('M 0, 100, 100, 100' )
				 .stroke( { width : 1 } );
			return [ line1, line2 ];
		}
	, output : [ [] ]
	}
	return test 
}
