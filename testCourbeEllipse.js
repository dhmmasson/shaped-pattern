testCourbeEllipse = 
function (){ 
	var test = [] 
test[0] = 
	{ name : "Test Intersection Path Ellispe 1 : no intersection"
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
	{ name : "Test Intersection Path Ellipse 2 : 1 intersection"
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
	{ name : "Test Intersection Path Ellipse 3 : 6 intersections horizontal "
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 15 25 C 400 50 -250 55 135 65' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 100, 50 )
				 .move(20,20)
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [[ 36.48290176822461, 26.4486918225897 ],
	[ 114.3017012765476, 33.40949480926875 ],
	[ 119.9516964784421, 46.09863994912585 ],
	[ 24.228833305186434, 55.06230946887175 ], 
	[ 102.28734842089492, 64.08878675518424 ],
	[ 32.005998263344715, 61.25158333580952 ] ]
	}
test[3] = 
	{ name : "Test Intersection Path Ellipse 4 : 6 intersections vertical "
	, target : "intersectionBezierEllipse"
	, input : function( svg ) { 
			var path = svg.path( 'M 30 65 C 50 -150 75 200 115 25' )
				 .stroke( { width : 1 } ).fill( "none" );
			var ellipse = svg.ellipse( 100, 50 )
				 .move(20,20)
				 .stroke( { width : 1 } ).fill( "none" );
			return [ path, ellipse ];
		}
	, output : [ [ 30.447322109065773, 60.29367280600285 ],
	[ 34.32048520634521, 27.48591849141267 ],
	[ 82.10145198602929, 69.25672508422136 ],
	[ 61.56435024852543, 20.35836940125916 ],
	[ 102.99985541244453, 63.78170361654874 ],
	[ 113.2311237310305, 32.43944754381684 ] ]
	}
		return test
}