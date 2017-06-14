testCourbeCourbe = 
function() { 
var test = [] 
test[0] = 
	{ name : "Test Intersection Path Path 1 : 2 intersections "
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 40 15 70 25 90 20' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 15 40 C 30 40 80 30 80 10' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ 31.90412080958264, 38.047212784536434 ], [ 73.49739360474263, 21.875972301813725 ] ]
	}
test[1] = 
	{ name : "Test Intersection Path Path 2 : 3 intersections S"
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 15 75 80 100 55' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 30 50 C 45 5 70 100 95 40' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ 34.042812721332794, 41.368232410850275 ], [ 47.435182934926125, 40.34961427878909 ], [ 80.49493764977524, 59.5856259087955 ] ]
	}
test[2] = 
	{ name : "Test Intersection Path Path 3 : 1 intersection "
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 15 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 20 30 C 45 25 110 60 110 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ 92.46412303994038, 52.7243414360657 ] ]
	}
test[3] = 
	{ name : "Test Intersection Path Path 4 : 3 intersections "
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 5 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 20 30 C 45 35 110 60 110 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ 40.283985746643296, 35.492741952491286 ], [ 60.375150889517634, 42.27987590016992 ], [ 89.78806759460005, 53.75932402421165 ] ]
	}
test[4] = 
	{ name : "Test Intersection Path Path 5 : 7 intersections "
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 50 C 50 5 75 80 100 45' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 25 35 C 200 40 -150 45 110 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ 40.32507149131057, 35.48353404347536 ],
	[ 29.646911373486176, 42.962855503882196 ],
	[ 26.43461944845581, 47.54779576807744 ],
	[ 47.7815491203158, 35.76309435214797 ],
	[ 58.14790586814486, 40.798983305328356 ],
	[ 70.31012585842662, 49.120021985597106 ],
	[ 95.97717220244166, 49.71804047754662 ] ]
	}
test[5] = 
	{ name : "Test Intersection Path Path 6 : 9 intersections "
	, target : "intersectionBezierBezier"
	, input : function( svg ) { 
			var path1 = svg.path( 'M 25 60 C 50 -15 75 100 120 35' )
				 .stroke( { width : 1 } ).fill( "none" );
			var path2 = svg.path( 'M 25 40 C 400 40 -200 45 110 50' )
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path1, path2 ];
		}
	, output : [ [ 34.45789737091633, 40.001105915058034 ],
	[ 31.088111330670237, 45.31352942281541 ],
	[ 29.7297216755811, 47.99539753374715 ],
	[ 59.9601456955694, 40.01716207393821 ],
	[ 65.25268785436882, 43.939448382933605 ],
	[ 72.78878124131603, 49.309957380788354 ],
	[ 116.16161938706148, 40.176526663749065 ],
	[ 114.24962559015353, 42.47930720464504 ],
	[ 106.4729889928795, 49.94246700082495 ] ]
	}
	return test
}