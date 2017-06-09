Intersection = 
(function() {

	intersectionLibrary = {};

	//prototype of results
	//type : Should be "segment" or "point" or "empty"
	function IntersectionData( type, data ){
		this.type = type;
		this.data = data;
	}
	function sgn( x ){
    if (x < 0.0) return -1;
    return 1;
	}

	function insideInterval( a, end1, end2 ) {
		return ( end1-0.00000001 <= a && a <= end2 + 0.000000001) || ( end2-0.000000001 <= a && a <= end1+0.00000001 )
	}

	function inflexionPoint( bezier ){
		var Ay = bezier.cubicY.a;
		var By = bezier.cubicY.b;
		var Cy = bezier.cubicY.c;
		var Ax = bezier.cubicX.a;
		var Bx = bezier.cubicX.b;
		var Cx = bezier.cubicX.c;
		var solution = [];
		var coordonatesX = [];
		var coordonatesY = [];

		if( Ay != 0 && By != 0 ){
			var dAy = 3*Ay;
			var dBy = 2*By;
			coordonatesY = quadraticResolution(dAy, dBy, Cy);
		} else if( Ay == 0 && By != 0 ){
			var dBy = 2*By;
			coordonatesY = linearResolution( dBy, Cy );
		}

		if( Ax != 0 && Bx != 0 ){
			var dAx = 3*Ax;
			var dBx = 2*Bx;
			coordonatesX = quadraticResolution(dAx, dBx, Cx);
		} else if( Ax == 0 && Bx != 0 ){
			var dBx = 2*Bx;
			coordonatesX = linearResolution( dBx, Cx );
		}

		for( i in coordonatesX ){
			if( coordonatesX[i] != -1){
				solution.push( coordonatesX[i] );
			}
		}
		for( i in coordonatesY ){
			if( coordonatesY[i] != -1){
				solution.push( coordonatesY[i] );
			}
		}
		return solution;
	}

	//return solution list for a linear equation
	function linearResolution( A, B ){
		var results = [];
		results[0] = -B/A;
		for ( var i=0; i<3; i++ ){
			//console.log( results[i] );
        	if( results[i]<-0.00000000001 || results[i]>1.00000000001 ){
        		results[i]=-1;
        	}
        }
		return results;
	}
	//return solution list for a quadratic equation
	function quadraticResolution( A, B, C ){
		//console.log( " A : " + A + "  B : " + B + "  C : " + C );
		//discriminant
		var D = (B*B) - 4*A*C;
		//console.log( " discriminant : " + D );
		var results = [];

		if( D > 0 ){
			results[0] = ( -B-Math.sqrt(D) ) / ( 2*A );
			results[1] = ( -B+Math.sqrt(D) ) / ( 2*A );
		} else if( D == 0 ){
			results[0] = (-B)/(2*A);
		}
		for ( i in results ){
			//console.log( " quadratic : " + results[i] );
        	if( results[i]<-0.00000000001 || results[i]>1.00000000001 ){
        		results[i]=-1;
        	}
        }

		return results;
	}
	//return solution list for a cubic equation
	//based on https://www.particleincell.com/2013/cubic-line-intersection/
	function cubicResolution( A, B, C, D ){
		//resolution coefficients
		var coefficient1 = B/A;
		var coefficient2 = C/A;
		var coefficient3 = D/A;

		//discrimiant and coefficients
		var D1 = ( 3*coefficient2 - Math.pow( coefficient1, 2 ) )/9;
		var D2 = ( 9*coefficient1*coefficient2 - 27*coefficient3 - 2*Math.pow( coefficient1, 3 ) )/54;
		var D = Math.pow( D1, 3 ) + Math.pow( D2, 2 );
		/*console.log("D1 " + D1 + " D2 " + D2 + " D " + D );*/

		var results = [];

		if( D >= 0 ){
			var solutionPlus = sgn( D2 + Math.sqrt(D) )*Math.pow( Math.abs( D2 + Math.sqrt(D) ), (1/3) );
			var solutionMoins = sgn( D2 - Math.sqrt(D) )*Math.pow( Math.abs( D2 - Math.sqrt(D) ), (1/3) );
			/*console.log( "solutionPlus " + solutionPlus );*/
			/*console.log( "solutionMoins " + solutionMoins );*/
			results[0] = -coefficient1/3 + ( solutionPlus + solutionMoins );//real root
			results[1] = -coefficient1/3 - ( solutionPlus + solutionMoins )/2;//real part of complex root

			var imaginary = Math.abs(Math.sqrt(3)*(solutionPlus - solutionMoins)/2);// complex part of complex root
			/*console.log( "imaginary " + imaginary );*/
			if( imaginary != 0 ){
				results[1] = -1;
			}


		} else {
			var theta = Math.acos( D2/Math.sqrt( -Math.pow( D1, 3 ) ) );
			//real distinct roots
			results[0] = 2*Math.sqrt(-D1)*Math.cos( theta/3 ) - coefficient1/3;
			results[1] = 2*Math.sqrt(-D1)*Math.cos( ( theta + 2*Math.PI )/3 ) - coefficient1/3;
			results[2] = 2*Math.sqrt(-D1)*Math.cos( ( theta + 4*Math.PI )/3 ) - coefficient1/3;
		}
		//test if solution belong [0,1]
		for ( var i=0; i<3; i++ ){
			/*console.log( results[i] );*/
        	if( results[i]<-0.00000000001 || results[i]>1.00000000001 ){
        		results[i]=-1;
        	}
        }

        return results;
	}


	function ParametricCubic( a, b, c, d ){
		this.a = a;
		this.b = b; 
		this.c = c; 
		this.d = d;  
	}
	ParametricCubic.prototype.apply = function( t ){
		return this.d + t * ( this.c + t * ( this.b + t * this.a ) );
	}
	function Bezier( x0, y0, x1, y1, x2, y2, x3, y3 ){
		var a = -y0 + 3*y1 - 3*y2 + y3;//coefficient t^3
		var b = 3*y0 - 6*y1 + 3*y2;//coefficient t^2
		var c = -3*y0 + 3*y1;//coefficient t
		var d = y0;
		this.cubicY = new ParametricCubic( a,b,c,d );
		a = -x0 + 3*x1 - 3*x2 + x3;//coefficient t^3
		b = 3*x0 - 6*x1 + 3*x2;//coefficient t^2
		c = -3*x0 + 3*x1;//coefficient t
		d = x0;
		this.cubicX = new ParametricCubic( a,b,c,d );
	}
	function BezierPoint( t, bezier ){
		this.t = t; 
		this.x = bezier.cubicX.apply( t );
		this.y = bezier.cubicY.apply( t );
	}
	function distanceT( t1, t2 ){
		var x = t1.x - t2.x; 
		var y = t2.y - t1.y; 
		return  x*x + y*y ;
	}

	function findIntersectionByDichotomy( bezierT, bezierS, t1, t2, s1, s2 ){
		if( ( !insideInterval( t1.x, s1.x, s2.x ) 
		   && !insideInterval( t2.x, s1.x, s2.x ) 
		   && !insideInterval( s1.x, t1.x, t2.x ) 
		   && !insideInterval( s2.x, t1.x, t2.x ) )
		 || ( !insideInterval( t1.y, s1.y, s2.y ) 
		   && !insideInterval( t2.y, s1.y, s2.y ) 
		   && !insideInterval( s1.y, t1.y, t2.y ) 
		   && !insideInterval( s2.y, t1.y, t2.y ) ) ) {
			//no intersection 
			return []; 
		} else {
			//Atomic square
			if( distanceT( t1, t2 ) < 0.0000000000001 ){

				return [[ t1, t2, s1, s2 ]]
			} else {
			//Subdivisable squares
				middleT = new BezierPoint( (t1.t  + t2.t)/2, bezierT );
				middleS = new BezierPoint( (s1.t  + s2.t)/2, bezierS );
				var r1 = findIntersectionByDichotomy( bezierT, bezierS, t1, middleT, s1, middleS );
				var r2 = findIntersectionByDichotomy( bezierT, bezierS, middleT, t2, s1, middleS );
				var r3 = findIntersectionByDichotomy( bezierT, bezierS, t1, middleT, middleS, s2 );
				var r4 = findIntersectionByDichotomy( bezierT, bezierS, middleT, t2, middleS, s2 );
				return Array.prototype.concat( r1, r2, r3, r4 );	
			}
		}
	}

	//return IntersectionData
	intersectionLibrary.intersectionLineLine = function( line1, line2 ){
		var coords1 = line1.array(); 
		var coords2 = line2.array();

		var x1 = coords1.value[0][0];
		var x2 = coords1.value[1][0];
		var y1 = coords1.value[0][1];
		var y2 = coords1.value[1][1];

		var x3 = coords2.value[0][0];
		var x4 = coords2.value[1][0];
		var y3 = coords2.value[0][1];
		var y4 = coords2.value[1][1];

		var quotient = ((x1-x2)*(y3-y4)-(x3-x4)*(y1-y2));
		var solX = ((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/ quotient;//supposed intersection coord on X axis
		var solY = ((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/ quotient ;//supposed intersection coord on Y axis

		if( x1 == x2 && x1 == x3 && x1 == x4 && y1 == y2 && y1 == y3 && y1 == y4 ){
			var intersectionData = new IntersectionData( "point", [ [ x1, x1 ] ] );
		} else if( solX == NaN
			|| solX == Infinity
			|| ( x1 < solX && x2 < solX )//intersection left of line1 on X axis
			|| ( x1 > solX && x2 > solX )//intersection right of line1 on X axis
			|| ( y1 < solY && y2 < solY )//intersection down of line1 on Y axis
			|| ( y3 > solY && y4 > solY )//intersection up of line2 on Y axis
			|| ( y1 > solY && y2 > solY )//intersection up of line1 on Y axis
			|| ( x3 < solX && x4 < solX )//intersection left of line2 on X axis
			|| ( x3 > solX && x4 > solX )//intersection left of line2 on X axis
			|| ( y3 < solY && y4 < solY ) ) {//intersection down of line2 on Y axis
			var intersectionData = new IntersectionData( "empty", [ [] ] );
		} else {
			var intersectionData = new IntersectionData( "point", [ [ solX, solY ] ] );
		}
		return intersectionData;
	}

	//return IntersectionData
	intersectionLibrary.intersectionBezierLine = function( path, line ){
		var coords = line.array();
		var points = path.array();

		var x1 = coords.value[0][0];
		var x2 = coords.value[1][0];
		var y1 = coords.value[0][1];
		var y2 = coords.value[1][1];
		var Xp0;
		var Yp0;
		var Xp1;
		var Yp1;
		var Xp2;
		var Yp2;
		var Xp3;
		var Yp3;
		//recuperation of the bezier curve control point
		for( i in points.value ){
			if( points.value[i][0] == "C" ){
				Xp0 = points.value[i-1][points.value[i-1].length-2];
				Yp0 = points.value[i-1][points.value[i-1].length-1];
				Xp1 = points.value[i][1];
				Yp1 = points.value[i][2];
				Xp2 = points.value[i][3];
				Yp2 = points.value[i][4];
				Xp3 = points.value[i][5];
				Yp3 = points.value[i][6];
			}
		}
		//parametric equation coefficients
		var Ay = -Yp0 + 3*Yp1 - 3*Yp2 + Yp3;//coefficient t^3
		var By = 3*Yp0 - 6*Yp1 + 3*Yp2;//coefficient t^2
		var Cy = -3*Yp0 + 3*Yp1;//coefficient t
		var Ax = -Xp0 + 3*Xp1 - 3*Xp2 + Xp3;//coefficient t^3
		var Bx = 3*Xp0 - 6*Xp1 + 3*Xp2;//coefficient t^2
		var Cx = -3*Xp0 + 3*Xp1;//coefficient t

		//segment equation coefficients
		var Ycoefficient = x1-x2;
		var Xcoefficient = y2-y1;
		var constantCoefficient = x1*(y1-y2)+y1*(x2-x1);

		if( x1 == x2 ){
			Ycoefficient = 0;
			Xcoefficient = -1;
			constantCoefficient = x1;
		} else if( y1 == y2 ){
			Ycoefficient = -1;
			Xcoefficient = 0;
			constantCoefficient = y1;
		}

		//cubic equation coefficients
		var A = Ycoefficient*Ay + Xcoefficient*Ax;
		var B = Ycoefficient*By + Xcoefficient*Bx;
		var C = Ycoefficient*Cy + Xcoefficient*Cx;
		var D = Ycoefficient*Yp0 + Xcoefficient*Xp0 + constantCoefficient;

		/*console.log( "A= " + A + "  B= " + B + "  C= " + C + "  D= " + D);*/

		if( A == 0 ){
			if( B == 0 ){
				var results = linearResolution( C, D );
			} else {
				var results = quadraticResolution( B, C, D );
			}
		} else {
			var results = cubicResolution( A, B, C, D );
		}
		/*console.log( results );*/
		var solution = [];
		for( i in results ){
			//test if the solution are correct
			if( results[i] != -1 ){
				//replace solutions in the parametric equation
				var solutionOnX = results[i]*results[i]*results[i]*Ax 
												+ results[i]*results[i]*Bx 
												+ results[i]*Cx + Xp0;
				/*console.log( "solution on X: " + solutionOnX );*/
				var solutionOnY = results[i]*results[i]*results[i]*Ay
												+ results[i]*results[i]*By
												+ results[i]*Cy + Yp0;
				/*console.log( "solution on Y: " + solutionOnY );*/
				for( j in solution ){
					if( solution[j][0] ==  solutionOnX 
							&& solution[j][1] == solutionOnY){
						solutionOnX = x2+1;
					}
				}
				if( insideInterval( solutionOnX, x1, x2 )//test if the solution on x is on the first segment
					&& insideInterval( solutionOnY, y1, y2 ) ){//test if the solution on y is on the first segment )
					solution.push( [ solutionOnX, solutionOnY ] );
				}
			}
		}
		//test for what to return
		if( solution.length != 0 ){
			var intersectionData = new IntersectionData( "point", solution );
		} else {
			var intersectionData = new IntersectionData( "empty", [ [] ] );
		}

		return intersectionData;
	}

	//retrun coords of intersection between bezier curve and another bezier curve
	intersectionLibrary.intersectionBezierBezier = function( path1, path2 ){
		var points1 = path1.array();
		var Xp0;
		var Yp0;
		var Xp1;
		var Yp1;
		var Xp2;
		var Yp2;
		var Xp3;
		var Yp3;
		//recuperation of the bezier curve control point
		for( i in points1.value ){
			if( points1.value[i][0] == "C" ){
				Xp0 = points1.value[i-1][points1.value[i-1].length-2];
				Yp0 = points1.value[i-1][points1.value[i-1].length-1];
				Xp1 = points1.value[i][1];
				Yp1 = points1.value[i][2];
				Xp2 = points1.value[i][3];
				Yp2 = points1.value[i][4];
				Xp3 = points1.value[i][5];
				Yp3 = points1.value[i][6];
			}
		}
		//coord of the second path
		var points2 = path2.array();
		var Xp4;
		var Yp4;
		var Xp5;
		var Yp5;
		var Xp6;
		var Yp6;
		var Xp7;
		var Yp7;
		//recuperation of the bezier curve control point
		for( i in points2.value ){
			if( points2.value[i][0] == "C" ){
				Xp4 = points2.value[i-1][points2.value[i-1].length-2];
				Yp4 = points2.value[i-1][points2.value[i-1].length-1];
				Xp5 = points2.value[i][1];
				Yp5 = points2.value[i][2];
				Xp6 = points2.value[i][3];
				Yp6 = points2.value[i][4];
				Xp7 = points2.value[i][5];
				Yp7 = points2.value[i][6];
			}
		}

		bezier1 = new Bezier( Xp0 , Yp0 , Xp1 , Yp1 , Xp2 , Yp2 , Xp3 , Yp3 );
		bezier2 = new Bezier( Xp4 , Yp4 , Xp5 , Yp5 , Xp6 , Yp6 , Xp7 , Yp7 );
		//console.log( bezier1, bezier2 );

		p1 = new BezierPoint( 0, bezier1 );
		p2 = new BezierPoint( 1, bezier1 );
		p3 = new BezierPoint( 0, bezier2 );
		p4 = new BezierPoint( 1, bezier2 );
		//console.log( p1, p2, p3, p4 );

		inflexionPoints1 = inflexionPoint( bezier1 );
		inflexionPoints2 = inflexionPoint( bezier2 );
		console.log( inflexionPoints1.length, inflexionPoints2.length );
		console.log( inflexionPoints1, inflexionPoints2 )
		//if( inflexionPoints1.length == 0 && inflexionPoints2.length == 0 ){
			var resultat = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
			console.log( resultat );
			var solution = [[]];
			for( var intersection of resultat ){
				console.log( Math.floor( 100000 * intersection[0].x ),  Math.floor( 100000 * intersection[0].y ) ) 
				var add = true;
				for( i in solution ){
					if( ( Math.floor( 100000 * intersection[0].x ) == Math.floor( 100000 * solution[i][0] ) ) && ( Math.floor( 100000 * intersection[0].y ) == Math.floor( 100000 * solution[i][1] ) ) ) {
						add = false;
					}
				}
				if( add ){
					solution.push( [ intersection[0].x, intersection[0].y ] );
				}
			}
		/*} else if( inflexionPoints1.length == 0 ){
			inflexionPoints1.push( 0, 1 );
			inflexionPoints1.sort(function(a,b) { return a>b });
			for( var i = 1 ; i++; inflexionPoints1.length ){
				var p1 = new BezierPoint( inflexionPoints1[i-1], bezier1 );
				var p2 = new BezierPoint( inflexionPoints1[i], bezier1 );
				var resultat = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
				var solution = [[]];
				for( var intersection of resultat ){
					console.log( Math.floor( 100000 * intersection[0].x ),  Math.floor( 100000 * intersection[0].y ) ) 
					var add = true;
					for( i in solution ){
						if( ( Math.floor( 100000 * intersection[0].x ) == Math.floor( 100000 * solution[i][0] ) ) && ( Math.floor( 100000 * intersection[0].y ) == Math.floor( 100000 * solution[i][1] ) ) ) {
							add = false;
						}
					}
					if( add ){
						solution.push( [ intersection[0].x, intersection[0].y ] );
					}
				}
			}
		} else if( inflexionPoints2.length == 0 ){
			inflexionPoints2.push( 0, 1 );
			inflexionPoints2.sort(function(a,b) { return a>b });
			for( var i = 1 ; i++; inflexionPoints2.length ){
				var p3 = new BezierPoint( inflexionPoints2[i-1], bezier2 );
				var p4 = new BezierPoint( inflexionPoints2[i], bezier2 );
				var resultat = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
				var solution = [[]];
				for( var intersection of resultat ){
					console.log( Math.floor( 100000 * intersection[0].x ),  Math.floor( 100000 * intersection[0].y ) ) 
					var add = true;
					for( i in solution ){
						if( ( Math.floor( 100000 * intersection[0].x ) == Math.floor( 100000 * solution[i][0] ) ) && ( Math.floor( 100000 * intersection[0].y ) == Math.floor( 100000 * solution[i][1] ) ) ) {
							add = false;
						}
					}
					if( add ){
						solution.push( [ intersection[0].x, intersection[0].y ] );
					}
				}
			}
		} else {
			inflexionPoints1.push( 0, 1 );
			inflexionPoints2.push( 0, 1 );
			inflexionPoints1.sort(function(a,b) { return a>b });
			inflexionPoints2.sort(function(a,b) { return a>b });
			for( var i = 1 ; i++; inflexionPoints1.length ){
				for( var j = 1 ; j++; inflexionPoints2.length ){
					var p1 = new BezierPoint( inflexionPoints1[i-1], bezier1 );
					var p2 = new BezierPoint( inflexionPoints1[i], bezier1 );
					var p3 = new BezierPoint( inflexionPoints2[j-1], bezier2 );
					var p4 = new BezierPoint( inflexionPoints2[j], bezier2 );
					var resultat = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
					var solution = [[]];
					for( var intersection of resultat ){
						console.log( Math.floor( 100000 * intersection[0].x ),  Math.floor( 100000 * intersection[0].y ) ) 
						var add = true;
						for( i in solution ){
							if( ( Math.floor( 100000 * intersection[0].x ) == Math.floor( 100000 * solution[i][0] ) ) && ( Math.floor( 100000 * intersection[0].y ) == Math.floor( 100000 * solution[i][1] ) ) ) {
								add = false;
							}
						}
						if( add ){
							solution.push( [ intersection[0].x, intersection[0].y ] );
						}
					}
				}
			}
		}*/
		if( solution.length != 0 ){
				var intersectionData = new IntersectionData( "point", solution );
			} else {
				var intersectionData = new IntersectionData( "empty", [ [] ] );
			}
		return intersectionData;
	}

	return intersectionLibrary;
}) () 