Intersection = 
(function() {

	intersectionLibrary = {};
	var epsilon = 0.00000001;

	//prototype of results
	//type : Should be "segment" or "point" or "empty"
	function IntersectionData( type, data ){
		this.type = type;
		this.data = data;
	}

	//determine if the value is inside the interval
	function insideInterval( a, end1, end2 ) {
		return ( end1 - epsilon <= a && a <= end2 + epsilon) || ( end2 - epsilon <= a && a <= end1 + epsilon )
	}

	//determine the inflexion point of a bezier curve
	function inflexionPointBezier( bezier ){
		//Derivation of the cubic equation at^3+bt^2+ct+d => 3at^2 +2bt +c
		var Ay = 3*bezier.cubicY.a;
		var By = 2*bezier.cubicY.b;
		var Cy = bezier.cubicY.c;
		var Ax = 3*bezier.cubicX.a;
		var Bx = 2*bezier.cubicX.b;
		var Cx = bezier.cubicX.c;
		var solutions = [];
		var tX, tY ;
		//test if derivate = 0 on Y
		if( Ay != 0 && By != 0 ){
			tY = quadraticResolution( Ay, By, Cy );
		} else if( Ay == 0 && By != 0 ){
			tY = linearResolution( By, Cy );
		}
		//test if derivate = 0 on X
		if( Ax != 0 && Bx != 0 ) {
			tX = quadraticResolution( Ax, Bx, Cx );
		} else if( Ax == 0 && Bx != 0 ){
			tX = linearResolution( Bx, Cx );
		}
		//push valid solutions in a solutions array
		for( t of Array.prototype.concat(tX, tY) ){
			if( t != -1 && t != 0 && t != 1 ){
				solutions.push( t );
			}
		}
		return solutions;
	}

	//return the inflexion point of an ellipse
	function inflexionPointEllipse( ellipse ){
		return [ 0, Math.PI/2, Math.PI, 3*Math.PI/2, 2*Math.PI ];
	}

	//return solution list for a linear equation if inside [0..1]
	function linearResolution( A, B ){
		result = -B/A;
		if( result<-epsilon || result>1 + epsilon ){
    		result=-1;
    }
    return [result];
	}
	//return solution list for a quadratic equation if inside [0..1]
	function quadraticResolution( A, B, C ){
		//discriminant
		var D = B * B - 4 * A * C;
		var results = [];
		if( D > 0 ){
			results[0] = ( -B - Math.sqrt(D) ) / ( 2 * A );
			results[1] = ( -B + Math.sqrt(D) ) / ( 2 * A );
		} else if( D == 0 ){
			results[0] = -B/2/A;
		}
		for ( var i in results ){
    	if( results[i]<-epsilon || results[i]>1 + epsilon ){
    		results[i]=-1;
    	}
    }
		return results;
	}
	//return solution list for a cubic equation if inside [0..1]
	//based on https://www.particleincell.com/2013/cubic-line-intersection/
	function cubicResolution( A, B, C, D ){
		//resolution coefficients
		var coefficient1 = B/A;
		var coefficient2 = C/A;
		var coefficient3 = D/A;

		//discrimiant and coefficients
		var D1 = ( 3 * coefficient2 - Math.pow( coefficient1, 2 ) )/9;
		var D2 = ( 9 * coefficient1 * coefficient2 - 27 * coefficient3 - 2 * Math.pow( coefficient1, 3 ) )/54;
		var D = Math.pow( D1, 3 ) + Math.pow( D2, 2 );
		var results = [];
		if( D >= 0 ){

			var solutionPlus = Math.sign( D2 + Math.sqrt(D) )*Math.pow( Math.abs( D2 + Math.sqrt(D) ), (1/3) );
			var solutionMoins = Math.sign( D2 - Math.sqrt(D) )*Math.pow( Math.abs( D2 - Math.sqrt(D) ), (1/3) );

			results[0] = -coefficient1/3 + ( solutionPlus + solutionMoins );//real root
			results[1] = -coefficient1/3 - ( solutionPlus + solutionMoins )/2;//real part of complex root

			var imaginary = Math.abs( Math.sqrt(3)*( solutionPlus - solutionMoins )/2 );// complex part of complex root
			
			if( imaginary != 0 ){
				results[1] = -1;
			}
		} else {
			var theta = Math.acos( D2/Math.sqrt( -Math.pow( D1, 3 ) ) );
			//real distinct roots
			results[0] = 2 * Math.sqrt( -D1 ) * Math.cos( theta/3 ) - coefficient1/3;
			results[1] = 2 * Math.sqrt( -D1 ) * Math.cos( ( theta + 2 * Math.PI )/3 ) - coefficient1 / 3;
			results[2] = 2 * Math.sqrt( -D1 ) * Math.cos( ( theta + 4 * Math.PI )/3 ) - coefficient1 / 3;
		}
		//test if solution belong [0,1]
		for ( var i = 0; i < 3; i++ ){			
    	if( results[i] < -epsilon || results[i] > 1 + epsilon ){
    		results[i] = -1;
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

	function ParametricCos( u, a ){
		this.u = u;
		this.a = a; 
	}
	ParametricCos.prototype.apply = function( t ){
		return this.u + this.a*Math.cos(t);
	}

	function ParametricSin( v, b ){
		this.v = v;
		this.b = b; 
	}
	ParametricSin.prototype.apply = function( t ){
		return this.v + this.b*Math.sin(t);
	}

	//create a bezier curve with is parametric coefficients
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

	//create an ellipse with is parametric coefficients
	function Ellipse( a, b, u, v ){
		this.parametricX = new ParametricCos( u, a );
		this.parametricY = new ParametricSin( v, b );
	}

	//create a point part of a bezier curve
	function BezierPoint( bezier, t ){
		this.t = t; 
		this.x = bezier.cubicX.apply(t);
		this.y = bezier.cubicY.apply(t);
	}

	//create a point part of an ellipse
	function EllipsePoint( ellipse, t ){
		this.t = t; 
		this.x = ellipse.parametricX.apply(t);
		this.y = ellipse.parametricY.apply(t);
	}

	//return the square distance between two coordinates
	function distanceT( t1, t2 ){
		var x = t1.x - t2.x; 
		var y = t2.y - t1.y; 
		return  x*x + y*y ;
	}
	//Return the middle point for the curve, return same type of point as p1 (Bezier or Ellipse)
	function middlePoint( equation, p1, p2 ) {
		return new p1.constructor( equation, ( p1.t + p2.t ) / 2 )
	}

	//find the intersection point between two curves using dichotomy method
	function findIntersectionByDichotomy( equationT, equationS, t1, t2, s1, s2 ){
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
				return [ [ t1, t2, s1, s2 ] ];
			} else {
			//Subdivisable squares
				var middleT = middlePoint( equationT, t1, t2 )  ;
				var middleS = middlePoint( equationS, s1, s2 )  ;

				var r1 = findIntersectionByDichotomy( equationT, equationS, t1, middleT, s1, middleS );
				var r2 = findIntersectionByDichotomy( equationT, equationS, middleT, t2, s1, middleS );
				var r3 = findIntersectionByDichotomy( equationT, equationS, t1, middleT, middleS, s2 );
				var r4 = findIntersectionByDichotomy( equationT, equationS, middleT, t2, middleS, s2 );
				return Array.prototype.concat( r1, r2, r3, r4 );	
			}
		}
	}

	//add the results in solutions and remove the one too much closer from one an other
	function ajouterSolutions( solutions, result ){
		for( var intersection of result ){
			var add = true;
			for( var solution of solutions ){
				if( ( Math.floor( 10000 * intersection[0].x ) == Math.floor( 10000 * solution[0] ) )
				 && ( Math.floor( 10000 * intersection[0].y ) == Math.floor( 10000 * solution[1] ) ) ){
					add = false;
				}
			}
			if( add ){
				solutions.push( [ intersection[0].x, intersection[0].y, intersection[0].t] );
			}
		}
		return solutions;
	}

	//return IntersectionData
	intersectionLibrary.intersectionLineLine = function( line1, line2 ){
		var coords1 = line1.array(); 
		var coords2 = line2.array();
		for( var i in coords1.value ){
			if( coords1.value[i][0] == "L" ){
				var x1 = coords1.value[i-1][coords1.value[i-1].length-2];
				var y1 = coords1.value[i-1][coords1.value[i-1].length-1];
				var x2 = coords1.value[i][1];
				var y2 = coords1.value[i][2];
			}
		}
		for( var j in coords2.value ){
			if( coords2.value[j][0] == "L" ){
				var x3 = coords2.value[j-1][coords2.value[j-1].length-2];
				var y3 = coords2.value[j-1][coords2.value[j-1].length-1];
				var x4 = coords2.value[j][1];
				var y4 = coords2.value[j][2];
			}
		}
		//console.log( "x1,y1,x2,y2,x3,y3,x4,y4 ", x1,y1,x2,y2,x3,y3,x4,y4 )

		var quotient =  (x1 - x2)*(y3 - y4)-(x3 - x4)*(y1 - y2);
		//supposed intersection coord on X axis
		var solutionsOnX = ( (x1 * y2 - x2 * y1)*(x3 - x4)-(x3 * y4 - x4 * y3)*(x1 - x2) )/ quotient;
		//supposed intersection coord on Y axis
		var solutionOnY = ( (x1 * y2 - x2 * y1)*(y3 - y4)-(x3 * y4 - x4 * y3)*(y1 - y2) )/ quotient;

		if( x1 == x2 && x1 == x3 && x1 == x4 && y1 == y2 && y1 == y3 && y1 == y4 ){
			var intersectionData = new IntersectionData( "point", [ [ x1, x1 ] ] );
		} else if( isFinite( solutionsOnX ) 
		&& insideInterval( solutionsOnX, x1, x2 )//test if the solution on x is on the first segment
		&& insideInterval( solutionOnY, y1, y2 )//test if the solution on y is on the first segment
		&& insideInterval( solutionsOnX, x3, x4 )//test if the solution on x is on the second segment
		&& insideInterval( solutionOnY, y3, y4 ) ){//test if the solution on y is on the second segment
			var intersectionData = new IntersectionData( "point", [[ solutionsOnX, solutionOnY ]] );
		} else {
			var intersectionData = new IntersectionData( "empty", [ [] ] );
		}
		return intersectionData;
	}

	//return intersectionData
	intersectionLibrary.intersectionEllipseLine = function( line, ellipse ) {
		var origineEllipseX = ellipse.cx();
		var origineEllipseY = ellipse.cy();
		var demiAxeX = ellipse.rx();
		var demiAxeY = ellipse.ry();
		var points = line.array();
		for( var i in points.value ){
			if( points.value[i][0] == "L" ){
				var x1 = points.value[i-1][points.value[i-1].length-2];
				var y1 = points.value[i-1][points.value[i-1].length-1];
				var x2 = points.value[i][1];
				var y2 = points.value[i][2];
			}
		}
		var solutions = [];

		//test if segment type x = a or y = ax + b
		if( x1==x2 ) {
			//if type x = a
			var x1 = x1;
			//test if x is in the ellipse
			if( origineEllipseX - demiAxeX <= x1 && origineEllipseX + demiAxeX >= x1){
				//two y solutions possible
				var solution1 = origineEllipseY + (  Math.sqrt( 1 - ( x1 - origineEllipseX )*( x1 - origineEllipseX )/( demiAxeX * demiAxeX ) )*demiAxeY );
				var solution2 = origineEllipseY + ( -Math.sqrt( 1 - ( x1 - origineEllipseX )*( x1 - origineEllipseX )/( demiAxeX * demiAxeX ) )*demiAxeY )
				if( solution1 == solution2 ){
					//test if the solution on y is on the segment
					if( isFinite( solution1 ) && insideInterval( solution1, y1, y2 ) ) {
						solutions = [ [ x1, solution1 ] ] ;
					}
				} else {
					var solutionOnY = [ solution2, solution1 ];//solution of the equation
					for( var o in solutionOnY ) {
						//test if supposed intersection point is on segment
						if( isFinite( solutionOnY[o] ) && insideInterval( solutionOnY[o] , y1, y2 ) ) {
							solutions.push( [ x1, solutionOnY[o] ] );
						}
					}					
				}
			}
		} else {
			// if type y = ax + b
			//determination of the two coefficients
			var segmentSlope = ( y2 - y1 ) / ( x2 - x1 );
			var segmentOriginOrdinate = y1 - x1 * segmentSlope;
			var invDemiX2 = 1/( demiAxeX * demiAxeX );
			var invDemiY2 = 1/( demiAxeY * demiAxeY );

			//coef in X**2 of quadratic equation
			var i = invDemiX2                 				 
				  	+ invDemiY2 * segmentSlope * segmentSlope ;
			//coef in X**1 of quadratic equation
			var j = -2 * invDemiX2 * origineEllipseX 				 
				  	+ invDemiY2*( 2 * segmentSlope * segmentOriginOrdinate - 2 * segmentSlope * origineEllipseY );
			//coef in X**0 of quadratic equation
			var k = invDemiX2 * origineEllipseX * origineEllipseX 
				  	+	invDemiY2 *( segmentOriginOrdinate * segmentOriginOrdinate - 2 * segmentOriginOrdinate * origineEllipseY + origineEllipseY * origineEllipseY ) -1;
			//discriminant
			var delta = j * j - 4 * i * k;

			//test signe of discriminant
			if( delta > 0 ) {
				var solutionsOnX = [ (-j - Math.sqrt( ( j * j )-4 * i * k ) )/(2 * i), (-j + Math.sqrt( ( j * j) -4 * i * k ))/(2 * i) ];//solution of the equation

				for( var o in solutionsOnX ) {
					//test if supposed X coord is on segment
					if( isFinite (solutionsOnX[o] ) && insideInterval( solutionsOnX[o], x1, x2 )) {
						//solution for Y coord if X coord on segment and ellipse
						var solutionOnY = segmentSlope * solutionsOnX[o] + segmentOriginOrdinate;
						if( isFinite( solutionOnY ) && insideInterval( solutionOnY, y1, y2 ) ) {
							solutions.push( [ solutionsOnX[o], solutionOnY ] );
						}
					}
				}
			} else if( delta == 0 ) {
				var solutionsOnX = -j/(2 * i);//solution of the equation
				//test if supposed intersection point is on segment
				if( isFinite(solutionsOnX) && insideInterval( solutionsOnX, x1, x2 ) ) {
					var solutionOnY = segmentSlope * solutionsOnX + segmentOriginOrdinate;
					//test if supposed Y coord is on segment
					if( isFinite( solutionOnY ) && insideInterval( solutionOnY, y1, y2 ) ) {
						solutions = [ [ solutionsOnX, solutionOnY ] ] ;
					}
				}
			} 
			//nothing to be done for delta neg
		}
		//test what to return depending on if point are on segment
		if( solutions == [] ) {
			var intersectionData = new IntersectionData( "empty", [ [] ] );
		} else {
			var intersectionData = new IntersectionData( "point", solutions );
		}
		return intersectionData;
	}

	//return IntersectionData
	intersectionLibrary.intersectionBezierLine = function( path, line ){
		var coords = line.array();
		var points = path.array();
		for( var i in coords.value ){
			if( coords.value[i][0] == "L" ){
				var x1 = coords.value[i-1][coords.value[i-1].length-2];
				var y1 = coords.value[i-1][coords.value[i-1].length-1];
				var x2 = coords.value[i][1];
				var y2 = coords.value[i][2];
			}
		}
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
				Xp0 = points.value[i - 1][points.value[i - 1].length - 2];
				Yp0 = points.value[i - 1][points.value[i - 1].length - 1];
				Xp1 = points.value[i][1];
				Yp1 = points.value[i][2];
				Xp2 = points.value[i][3];
				Yp2 = points.value[i][4];
				Xp3 = points.value[i][5];
				Yp3 = points.value[i][6];
			}
		}
		//parametric equation coefficients
		var Ay = -Yp0 + 3 * Yp1 - 3 * Yp2 + Yp3;//coefficient t^3
		var By = 3 * Yp0 - 6 * Yp1 + 3 * Yp2;//coefficient t^2
		var Cy = -3 * Yp0 + 3 * Yp1;//coefficient t
		var Ax = -Xp0 + 3 * Xp1 - 3 * Xp2 + Xp3;//coefficient t^3
		var Bx = 3 * Xp0 - 6 * Xp1 + 3 * Xp2;//coefficient t^2
		var Cx = -3 * Xp0 + 3 * Xp1;//coefficient t

		//segment equation coefficients
		var Ycoefficient = x1 - x2;
		var Xcoefficient = y2 - y1;
		var constantCoefficient = x1*(y1 - y2)+y1*(x2 - x1);

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
		var A = Ycoefficient * Ay + Xcoefficient * Ax;
		var B = Ycoefficient * By + Xcoefficient * Bx;
		var C = Ycoefficient * Cy + Xcoefficient * Cx;
		var D = Ycoefficient * Yp0 + Xcoefficient * Xp0 + constantCoefficient;

		
		var results = null
		if( A == 0 ){
			if( B == 0 ){
				results = linearResolution( C, D );
			} else {
				results = quadraticResolution( B, C, D );
			}
		} else {
			results = cubicResolution( A, B, C, D );
		}
		//console.log( results );
		var solution = [];
		for( i in results ){
			//test if the solution are correct
			if( results[i] != -1 ){
				//replace solutions in the parametric equation
				var solutionOnX = results[i]*results[i]*results[i]*Ax 
												+ results[i]*results[i]*Bx 
												+ results[i]*Cx + Xp0;				
				var solutionOnY = results[i]*results[i]*results[i]*Ay
												+ results[i]*results[i]*By
												+ results[i]*Cy + Yp0;
				for( j in solution ){
					if( solution[j][0] ==  solutionOnX 
							&& solution[j][1] == solutionOnY){
						solutionOnX = x2 + 1;
					}
				}
				if( insideInterval( solutionOnX, x1, x2 )//test if the solution on x is on the first segment
					&& insideInterval( solutionOnY, y1, y2 ) ){//test if the solution on y is on the first segment )
					solution.push( [ solutionOnX, solutionOnY, results[i] ] );
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

	//return coords of intersection between bezier curve and ellispse
	intersectionLibrary.intersectionBezierEllipse = function( path, ellipse ){
		var points1 = path.array();
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
		var origineEllipseX = ellipse.cx();
		var origineEllipseY = ellipse.cy();
		var demiAxeX = ellipse.rx();
		var demiAxeY = ellipse.ry();
		
		bezier = new Bezier( Xp0 , Yp0 , Xp1 , Yp1 , Xp2 , Yp2 , Xp3 , Yp3 );
		ellipse = new Ellipse( demiAxeX, demiAxeY, origineEllipseX, origineEllipseY );

		p1 = new BezierPoint( bezier , 0);
		p2 = new BezierPoint( bezier , 1);
		p3 = new EllipsePoint( ellipse , 0);
		p4 = new EllipsePoint( ellipse , 2*Math.PI);

		//looking for inflexion points on both curves
		inflexionPoints1 = inflexionPointBezier( bezier );
		inflexionPoints2 = inflexionPointEllipse( ellipse );
		solutions = [];
		if( inflexionPoints1.length == 0 ){
			for( var i = 1; i < inflexionPoints2.length; i++ ){
				var p3 = new EllipsePoint( ellipse , inflexionPoints2[i-1]);
				var p4 = new EllipsePoint( ellipse , inflexionPoints2[i]);

				var result = findIntersectionByDichotomy( bezier, ellipse, p1, p2, p3, p4 );
				solutions = ajouterSolutions( solutions, result );
			}
		//same if inflexion point on both curves
		} else {
			inflexionPoints1.push( 0, 1 );
			inflexionPoints1.sort( function( a,b ){ return a>b } );
			for( var i = 1; i < inflexionPoints1.length; i++ ){
				for( var j = 1; j < inflexionPoints2.length; j++ ){
					var p1 = new BezierPoint( bezier , inflexionPoints1[i-1]);
					var p2 = new BezierPoint( bezier , inflexionPoints1[i]);
					var p3 = new EllipsePoint( ellipse , inflexionPoints2[j-1]);
					var p4 = new EllipsePoint( ellipse , inflexionPoints2[j]);

					var result = findIntersectionByDichotomy( bezier, ellipse, p1, p2, p3, p4 );
					solutions = ajouterSolutions( solutions, result );
				}
			}
		}
		if( solutions.length != 0 ){
				var intersectionData = new IntersectionData( "point", solutions );
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

		p1 = new BezierPoint( bezier1 , 0);
		p2 = new BezierPoint( bezier1 , 1);
		p3 = new BezierPoint( bezier2 , 0);
		p4 = new BezierPoint( bezier2 , 1);
		//looking for inflexion points on both curves
		inflexionPoints1 = inflexionPointBezier( bezier1 );
		inflexionPoints2 = inflexionPointBezier( bezier2 );

		var solutions = [];
		//test if there is no inflexion point
		if( inflexionPoints1.length == 0 && inflexionPoints2.length == 0 ){
			var result = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
			solutions = ajouterSolutions( solutions, result );
		//if inflexion point on first curve
		} else if( inflexionPoints2.length == 0 ){
			inflexionPoints1.push( 0, 1 );
			inflexionPoints1.sort( function( a,b ){ return a>b } );
			for( var i = 1; i < inflexionPoints1.length; i++ ){
				//calculate new bezier point at the coordonate of the inflexion point
				var p1 = new BezierPoint( bezier1 , inflexionPoints1[i-1]);
				var p2 = new BezierPoint( bezier1 , inflexionPoints1[i]);
				//call the intersection function on all new intervals
				var result = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
				solutions = ajouterSolutions( solutions, result );
			}
		//same if inflexion point on the second
		} else if( inflexionPoints1.length == 0 ){
			inflexionPoints2.push( 0, 1 );
			inflexionPoints2.sort( function( a,b ){ return a>b } );
			for( var i = 1; i < inflexionPoints2.length; i++ ){
				var p3 = new BezierPoint( bezier2 , inflexionPoints2[i-1]);
				var p4 = new BezierPoint( bezier2 , inflexionPoints2[i]);
				var result = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
				solutions = ajouterSolutions( solutions, result );
			}
		//same if inflexion point on both curves
		} else {
			inflexionPoints1.push( 0, 1 );
			inflexionPoints2.push( 0, 1 );
			inflexionPoints1.sort( function( a,b ){ return a>b } );
			inflexionPoints2.sort( function( a,b ){ return a>b } );
			for( var i = 1; i < inflexionPoints1.length; i++ ){
				for( var j = 1; j < inflexionPoints2.length; j++ ){
					var p1 = new BezierPoint( bezier1 , inflexionPoints1[i-1]);
					var p2 = new BezierPoint( bezier1 , inflexionPoints1[i]);
					var p3 = new BezierPoint( bezier2 , inflexionPoints2[j-1]);
					var p4 = new BezierPoint( bezier2 , inflexionPoints2[j]);
					var result = findIntersectionByDichotomy( bezier1, bezier2, p1, p2, p3, p4 );
					solutions = ajouterSolutions( solutions, result );
				}
			}
		}
		if( solutions.length != 0 ){
				var intersectionData = new IntersectionData( "point", solutions );
			} else {
				var intersectionData = new IntersectionData( "empty", [ [] ] );
			}
		return intersectionData;
	}

	intersectionLibrary.intersectionPathPath = function( path1, path2 ){
		var solution = [];
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
				var path11 = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' C ' + Xp1 + ' ' + Yp1 + ' ' + Xp2 + ' ' + Yp2 + ' ' + Xp3 + ' ' + Yp3 )
					 .stroke( { width : 0, color: 'hsla(0,100%,50%,0.5)'} ).fill("none");
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
				for( j in points2.value ){
					if( points2.value[j][0] == "C" ){
						Xp4 = points2.value[j-1][points2.value[j-1].length-2];
						Yp4 = points2.value[j-1][points2.value[j-1].length-1];
						Xp5 = points2.value[j][1];
						Yp5 = points2.value[j][2];
						Xp6 = points2.value[j][3];
						Yp6 = points2.value[j][4];
						Xp7 = points2.value[j][5];
						Yp7 = points2.value[j][6];
						var path22 = svg.path( 'M ' + Xp4 + ' ' + Yp4 + ' C ' + Xp5 + ' ' + Yp5 + ' ' + Xp6 + ' ' + Yp6 + ' ' + Xp7 + ' ' + Yp7 )
							 .stroke( { width : 0, color: 'hsla(120,100%,50%,0.5)' } ).fill("none");

						var intersection = intersectionLibrary.intersectionBezierBezier( path11, path22 );
						//console.log("intersection.data 2path ", intersection.data);
						if( intersection.type != "empty" ){
							for(var a of intersection.data ){
								solution.push( a );
							}
						}


					} else if( points2.value[j][0] == "L" ){
						Xp4 = points2.value[j-1][points2.value[j-1].length-2];
						Yp4 = points2.value[j-1][points2.value[j-1].length-1];
						Xp5 = points2.value[j][1];
						Yp5 = points2.value[j][2];
						var path22 = svg.path( 'M ' + Xp4 + ' ' + Yp4 + ' L ' + Xp5 + ' ' + Yp5 )
							 .stroke( { width : 0, color: 'hsla(240,100%,50%,0.5)' } ).fill("none");

						var intersection = intersectionLibrary.intersectionBezierLine( path11, path22 );
						//console.log("intersection.data path line", intersection.data);
						if( intersection.type != "empty" ){
							for(var a of intersection.data ){
								solution.push( a );
							}
						}

					}
				}
			} else if( points1.value[i][0] == "L" ){
				Xp0 = points1.value[i-1][points1.value[i-1].length-2];
				Yp0 = points1.value[i-1][points1.value[i-1].length-1];
				Xp1 = points1.value[i][1];
				Yp1 = points1.value[i][2];
				var path11 = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' L ' + Xp1 + ' ' + Yp1 )
					 .stroke( { width :0, color: 'hsla(50,100%,50%,0.5)' } ).fill("none");
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
				for( j in points2.value ){
					if( points2.value[j][0] == "C" ){
						Xp4 = points2.value[j-1][points2.value[j-1].length-2];
						Yp4 = points2.value[j-1][points2.value[j-1].length-1];
						Xp5 = points2.value[j][1];
						Yp5 = points2.value[j][2];
						Xp6 = points2.value[j][3];
						Yp6 = points2.value[j][4];
						Xp7 = points2.value[j][5];
						Yp7 = points2.value[j][6];
						var path22 = svg.path( 'M ' + Xp4 + ' ' + Yp4 + ' C ' + Xp5 + ' ' + Yp5 + ' ' + Xp6 + ' ' + Yp6 + ' ' + Xp7 + ' ' + Yp7 )
							 .stroke( { width : 0, color: 'hsla(170,100%,50%,0.5)' } ).fill("none");

						var intersection = intersectionLibrary.intersectionBezierLine( path22, path11 );
						//console.log("intersection.data line path ", intersection.data);
						if( intersection.type != "empty" ){
							for(var a of intersection.data ){
								solution.push( a );
							}
						}

					} else if( points2.value[j][0] == "L" ){
						Xp4 = points2.value[j-1][points2.value[j-1].length-2];
						Yp4 = points2.value[j-1][points2.value[j-1].length-1];
						Xp5 = points2.value[j][1];
						Yp5 = points2.value[j][2];
						var path22 = svg.path( 'M ' + Xp4 + ' ' + Yp4 + ' L ' + Xp5 + ' ' + Yp5 )
							 .stroke( { width : 0 } ).fill("none");

						var intersection = intersectionLibrary.intersectionLineLine( path11, path22 );
						//console.log("intersection.data line line ", intersection.data);
						if( intersection.type != "empty" ){
							for(var a of intersection.data ){
								solution.push( a );
							}
						}
					}
				}
			}
		}
		//console.log('solution path path ', solution);
		newSolution = [];
		for( var intersection of solution ){
			var add = true;
			for( var sol of newSolution ){
				if( intersection.length == 2 ){
					if(  Math.floor( 10000 * intersection[0] ) ==  Math.floor( 10000 * sol[0] )
					 &&  Math.floor( 10000 * intersection[1] ) ==  Math.floor( 10000 * sol[1] ) ){
						add = false;
					}
				} else {
					if(  Math.floor( 10000 * intersection[2] ) ==  Math.floor( 10000 * sol[2] ) ){
						add = false;
					}
				}
			}
			if( add ){
				if( intersection.length == 2 ){
					newSolution.push( [ intersection[0], intersection[1] ] );
				} else {
					newSolution.push( [ intersection[0], intersection[1], intersection[2] ] );
				}
			}
		}


		if( newSolution.length != 0 ){
				var intersectionData = new IntersectionData( "point", newSolution );
			} else {
				var intersectionData = new IntersectionData( "empty", [ [] ] );
			}
		return intersectionData;
	}

return intersectionLibrary;

}) () 