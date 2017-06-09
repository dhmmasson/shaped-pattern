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

	function inflexionPoint( Ay, By, Cy, Yp0, Ax, Bx, Cx, Xp0 ){
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
				//replace solutions in the parametric equation
				var solutionOnX = coordonatesX[i]*coordonatesX[i]*coordonatesX[i]*Ax 
												+ coordonatesX[i]*coordonatesX[i]*Bx 
												+ coordonatesX[i]*Cx + Xp0;
				/*console.log( "solution on X: " + solutionOnX );*/
				var solutionOnY = coordonatesX[i]*coordonatesX[i]*coordonatesX[i]*Ay
												+ coordonatesX[i]*coordonatesX[i]*By
												+ coordonatesX[i]*Cy + Yp0;
				/*console.log( "solution on Y: " + solutionOnY );*/
				solution.push( [ solutionOnX, solutionOnY ] );
			}
		}
		for( i in coordonatesY ){
			if( coordonatesY[i] != -1){
				//replace solutions in the parametric equation
				var solutionOnX = coordonatesY[i]*coordonatesY[i]*coordonatesY[i]*Ax 
												+ coordonatesY[i]*coordonatesY[i]*Bx 
												+ coordonatesY[i]*Cx + Xp0;
				/*console.log( "solution on X: " + solutionOnX );*/
				var solutionOnY = coordonatesY[i]*coordonatesY[i]*coordonatesY[i]*Ay
												+ coordonatesY[i]*coordonatesY[i]*By
												+ coordonatesY[i]*Cy + Yp0;
				/*console.log( "solution on Y: " + solutionOnY );*/
				solution.push( [ solutionOnX, solutionOnY ] );
			}
		}
		return solution;
	}

	//return solution list for a linear equation
	function linearResolution( A, B ){
		var results = [];
		results[0] = -B/A;
		for ( var i=0; i<3; i++ ){
			console.log( results[i] );
        	if( results[i]<-0.00000000001 || results[i]>1.00000000001 ){
        		results[i]=-1;
        	}
        }
		return results;
	}
	//return solution list for a quadratic equation
	function quadraticResolution( A, B, C ){
		console.log( " A : " + A + "  B : " + B + "  C : " + C );
		//discriminant
		var D = (B*B) - 4*A*C;
		console.log( " discriminant : " + D );
		var results = [];

		if( D > 0 ){
			results[0] = ( -B-Math.sqrt(D) ) / ( 2*A );
			results[1] = ( -B+Math.sqrt(D) ) / ( 2*A );
		} else if( D == 0 ){
			results[0] = (-B)/(2*A);
		}
		for ( i in results ){
			console.log( " quadratic : " + results[i] );
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

//initialise it with t1=0 and t2=1 and t3=0 and t4 =1
	//parameter are the composants of the equation and the two extremity points of the curve
	function dichotomy( Ay1, By1, Cy1, Dy1, Yp0, Yp3, Ax1, Bx1, Cx1, Dx1, Xp0, Xp3, Ay2, By2, Cy2, Dy2, Yp4, Yp7, Ax2, Bx2, Cx2, Dx2, Xp4, Xp7, t1, t2, t3, t4, epsilon, i, solution ){
		//console.log( "totototototot" );
		//test if the angle of the rectangle formed by the two extremity of the curve are in the other rectangle
		console.log( "step : " + i )
		i = i+1;
		if( insideInterval( Xp0, Xp4, Xp7 ) && insideInterval( Yp0, Yp4, Yp7 )
				|| insideInterval( Xp0, Xp4, Xp7 ) && insideInterval( Yp3, Yp4, Yp7 )
				|| insideInterval( Xp3, Xp4, Xp7 ) && insideInterval( Yp3, Yp4, Yp7 )
				|| insideInterval( Xp3, Xp4, Xp7 ) && insideInterval( Yp0, Yp4, Yp7 )

				|| insideInterval( Xp4, Xp0, Xp3 ) && insideInterval( Yp4, Yp0, Yp3 )
				|| insideInterval( Xp4, Xp0, Xp3 ) && insideInterval( Yp7, Yp0, Yp3 )
				|| insideInterval( Xp7, Xp0, Xp3 ) && insideInterval( Yp7, Yp0, Yp3 )
				|| insideInterval( Xp7, Xp0, Xp3 ) && insideInterval( Yp4, Yp0, Yp3 ) // tests for one point inside rectangle

				|| Xp0 < Xp4 && Xp0 < Xp7 && Xp3 > Xp4 && Xp3 > Xp7 && Yp0 > Yp4 && Yp0 < Yp7
				|| Xp0 > Xp4 && Xp0 > Xp7 && Xp3 < Xp4 && Xp3 < Xp7 && Yp0 < Yp4 && Yp0 > Yp7
				/*|| Xp0 < Xp4 && Xp0 < Xp7 && Xp3 > Xp4 && Xp3 > Xp7 && Yp3 > Yp4 && Yp3 < Yp7
				|| Xp0 > Xp4 && Xp0 > Xp7 && Xp3 < Xp4 && Xp3 < Xp7 && Yp3 < Yp4 && Yp3 > Yp7
				|| Yp0 < Yp4 && Yp0 < Yp7 && Yp3 > Yp4 && Yp3 > Yp7 && Xp0 > Xp4 && Xp0 < Xp7
				|| Yp0 > Yp4 && Yp0 > Yp7 && Yp3 < Yp4 && Yp3 < Yp7 && Xp0 < Xp4 && Xp0 > Xp7
				|| Yp0 < Yp4 && Yp0 < Yp7 && Yp3 > Yp4 && Yp3 > Yp7 && Xp3 > Xp4 && Xp3 < Xp7
				|| Yp0 > Yp4 && Yp0 > Yp7 && Yp3 < Yp4 && Yp3 < Yp7 && Xp3 < Xp4 && Xp3 > Xp7 

				|| Xp4 < Xp0 && Xp4 < Xp3 && Xp7 > Xp0 && Xp7 > Xp3 && Yp4 > Yp0 && Yp4 < Yp3
				|| Xp4 > Xp0 && Xp4 > Xp3 && Xp7 < Xp0 && Xp7 < Xp3 && Yp4 < Yp0 && Yp4 > Yp3
				|| Xp4 < Xp0 && Xp4 < Xp3 && Xp7 > Xp0 && Xp7 > Xp3 && Yp7 > Yp0 && Yp7 < Yp3
				|| Xp4 > Xp0 && Xp4 > Xp3 && Xp7 < Xp0 && Xp7 < Xp3 && Yp7 < Yp0 && Yp7 > Yp3
				|| Yp4 < Yp0 && Yp4 < Yp3 && Yp7 > Yp0 && Yp7 > Yp3 && Xp4 > Xp0 && Xp4 < Xp3
				|| Yp4 > Yp0 && Yp4 > Yp3 && Yp7 < Yp0 && Yp7 < Yp3 && Xp4 < Xp0 && Xp4 > Xp3
				|| Yp4 < Yp0 && Yp4 < Yp3 && Yp7 > Yp0 && Yp7 > Yp3 && Xp7 > Xp0 && Xp7 < Xp3
				|| Yp4 > Yp0 && Yp4 > Yp3 && Yp7 < Yp0 && Yp7 < Yp3 && Xp7 < Xp0 && Xp7 > Xp3// tests if include a part of a rectangle 

				|| Xp0 < Xp4 && Xp0 < Xp7 && Xp3 > Xp4 && Xp3 > Xp7 && Yp0 < Yp4 && Yp0 < Yp7 && Yp3 > Yp4 && Yp3 > Yp7
				|| Xp0 > Xp4 && Xp0 > Xp7 && Xp3 < Xp4 && Xp3 < Xp7 && Yp0 > Yp4 && Yp0 > Yp7 && Yp3 < Yp4 && Yp3 < Yp7
				|| Xp4 < Xp0 && Xp4 < Xp3 && Xp7 > Xp0 && Xp7 > Xp3 && Yp4 < Yp0 && Yp4 < Yp3 && Yp7 > Yp0 && Yp7 > Yp3
				|| Xp4 > Xp0 && Xp4 > Xp3 && Xp7 < Xp0 && Xp7 < Xp3 && Yp4 > Yp0 && Yp4 > Yp3 && Yp7 < Yp0 && Yp7 < Yp3 */){ // test if include the complette rectangle
			console.log( "intersection" );
			//test if the precision wanted is respected
			if( Math.abs( Xp0 - Xp3 ) < epsilon && Math.abs( Yp0 - Yp3 ) < epsilon ){
				console.log( "precision reach" );
				//if precision is reach test which segment is now a point 
				//test if the point is on the curve by solving the equation
				middleX1 = ((t1+t2)/2)*((t1+t2)/2)*((t1+t2)/2)*Ax1 + ((t1+t2)/2)*((t1+t2)/2)*Bx1 + ((t1+t2)/2)*Cx1 + Dx1;
				middleY1 = ((t1+t2)/2)*((t1+t2)/2)*((t1+t2)/2)*Ay1 + ((t1+t2)/2)*((t1+t2)/2)*By1 + ((t1+t2)/2)*Cy1 + Dy1;
				//middleX1 = (Xp0 + Xp3)/2;
				//middleY1 = (Yp0 + Yp3)/2;
				if( Ay2 != 0 ){
					result = cubicResolution(Ay2, By2, Cy2, Dy2-middleY1 );
				} else if( Ay2 == 0 && By2 != 0 ){
					result = quadraticResolution( By2, Cy2, Dy2-middleY1 );
				} else {
					result = linearResolution( Cy2, Dy2-middleY1 );
				}
				var X1 = result[0]*result[0]*result[0]*Ax1 + result[0]*result[0]*Bx1 + result[0]*Cx1 + Dx1;
				var X2 = result[0]*result[0]*result[0]*Ax2 + result[0]*result[0]*Bx2 + result[0]*Cx2 + Dx2;
				console.log( X1, X2, middleX1 )
				console.log( Math.abs( X2 - middleX1 ) )
				if( Math.abs( X2 - middleX1 ) < 1/epsilon ){
					var add = true;
					if( solution.length != 0 ){
						for( i in solution ){
							if( Math.abs( solution[i][0] - middleX1 ) < epsilon*100
									|| Math.abs( solution[i][1] - middleY1 ) < epsilon*100 ){
								add = false;
							}
						}
						if( add ){
							solution.push( [ middleX1, middleY1 ] );
							console.log( solution );
						}
					} else {
						solution.push( [ middleX1, middleY1 ] );
						console.log( solution );
					}
				}
			} else if(  Math.abs( Xp4 - Xp7 ) < epsilon && Math.abs( Yp4 - Yp7 ) < epsilon ){
				console.log( "precision reach" );
				middleX2 = ((t3+t4)/2)*((t3+t4)/2)*((t3+t4)/2)*Ax2 + ((t3+t4)/2)*((t3+t4)/2)*Bx2 + ((t3+t4)/2)*Cx2 + Dx2;
				middleY2 = ((t3+t4)/2)*((t3+t4)/2)*((t3+t4)/2)*Ay2 + ((t3+t4)/2)*((t3+t4)/2)*By2 + ((t3+t4)/2)*Cy2 + Dy2;
				//middleX2 = (Xp4 + Xp7)/2;
				//middleY2 = (Yp4 + Yp7)/2;
				if( Ay1 != 0 ){
					result = cubicResolution(Ay1, By1, Cy1, Dy1-middleY2 );
				} else if( Ay1 == 0 && By1 != 0 ){
					result = quadraticResolution( By1, Cy1, Dy1-middleY2 );
				} else {
					result = linearResolution( Cy1, Dy1-middleY2 );
				}
				var X = result[0]*result[0]*result[0]*Ax1 + result[0]*result[0]*Bx1 + result[0]*Cx1 + Dx1;
				if( Math.abs( X - middleX2 ) < 1/epsilon ){
					var add = 0;
					if( solution.length != 0 ){
						for( i in solution ){
							if( Math.abs( solution[i][0] - middleX2 ) > epsilon*100
									|| Math.abs( solution[i][1] - middleY2 ) > epsilon*100 ){
								console.log( add );
								add = false;
							}
						}
						if( add ){
							solution.push( [ middleX2, middleY2 ] );
							console.log( solution );
						}
					} else {
						solution.push( [ middleX2, middleY2 ] );
						console.log( solution );
					}
				}
			} else {
				console.log( "no precision" );
				//console.log( Math.abs( Xp0 - Xp3 ), Math.abs( Yp0 - Yp3 ) );
				//console.log( Math.abs( Xp4 - Xp7 ), Math.abs( Yp4 - Yp7 ) );
				//cut the curve in the middle
				middleX1 = ((t1+t2)/2)*((t1+t2)/2)*((t1+t2)/2)*Ax1 + ((t1+t2)/2)*((t1+t2)/2)*Bx1 + ((t1+t2)/2)*Cx1 + Dx1;
				middleX2 = ((t3+t4)/2)*((t3+t4)/2)*((t3+t4)/2)*Ax2 + ((t3+t4)/2)*((t3+t4)/2)*Bx2 + ((t3+t4)/2)*Cx2 + Dx2;
				middleY1 = ((t1+t2)/2)*((t1+t2)/2)*((t1+t2)/2)*Ay1 + ((t1+t2)/2)*((t1+t2)/2)*By1 + ((t1+t2)/2)*Cy1 + Dy1;
				middleY2 = ((t3+t4)/2)*((t3+t4)/2)*((t3+t4)/2)*Ay2 + ((t3+t4)/2)*((t3+t4)/2)*By2 + ((t3+t4)/2)*Cy2 + Dy2;
				//console.log( middleX1, middleY1, middleX2, middleY2 );
				//solution.push( [ middleX1, middleY1 ], [ middleX2, middleY2 ] );
				//call again the function until the precision is good enought
				var r1 = dichotomy( Ay1, By1, Cy1, Dy1, Yp0, middleY1, Ax1, Bx1, Cx1, Dx1, Xp0, middleX1, Ay2, By2, Cy2, Dy2, Yp4, middleY2, Ax2, Bx2, Cx2, Dx2, Xp4, middleX2, t1, ((t1+t2)/2), t3, ((t3+t4)/2), epsilon, i, solution );
				var r2 = dichotomy( Ay1, By1, Cy1, Dy1, Yp0, middleY1, Ax1, Bx1, Cx1, Dx1, Xp0, middleX1, Ay2, By2, Cy2, Dy2, middleY2, Yp7, Ax2, Bx2, Cx2, Dx2, middleX2, Xp7, t1, ((t1+t2)/2), ((t3+t4)/2), t4, epsilon, i, solution );
				var r3 = dichotomy( Ay1, By1, Cy1, Dy1, middleY1, Yp3, Ax1, Bx1, Cx1, Dx1, middleX1, Xp3, Ay2, By2, Cy2, Dy2, Yp4, middleY2, Ax2, Bx2, Cx2, Dx2, Xp4, middleX2, ((t1+t2)/2), t2, t3, ((t3+t4)/2), epsilon, i, solution );
				var r4 = dichotomy( Ay1, By1, Cy1, Dy1, middleY1, Yp3, Ax1, Bx1, Cx1, Dx1, middleX1, Xp3, Ay2, By2, Cy2, Dy2, middleY2, Yp7, Ax2, Bx2, Cx2, Dx2, middleX2, Xp7, ((t1+t2)/2), t2, ((t3+t4)/2), t4, epsilon, i, solution );
				//solution.concat( r1, r2, r3, r4 );
			}
		} else { 
			//solution.concat( [] );
			console.log( "NOPE" ); 
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
	//retrun coords of intersection between bezier curve ans ellipse
	//TODO: prevent case of A=0
	intersectionLibrary.intersectionBezierEllipse = function( path1, path2 ){
		/*var origineEllipseX = ellipse.cx();
		var origineEllipseY = ellipse.cy();
		var demiAxeX = ellipse.rx();
		var demiAxeY = ellipse.ry();*/
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
		console.log( Xp0 , Yp0 , Xp1 , Yp1 , Xp2 , Yp2 , Xp3 , Yp3 );
			//parametric equation coefficients
		var Ay1 = -Yp0 + 3*Yp1 - 3*Yp2 + Yp3;//coefficient t^3
		var By1 = 3*Yp0 - 6*Yp1 + 3*Yp2;//coefficient t^2
		var Cy1 = -3*Yp0 + 3*Yp1;//coefficient t
		var Dy1 = Yp0;
		var Ax1 = -Xp0 + 3*Xp1 - 3*Xp2 + Xp3;//coefficient t^3
		var Bx1 = 3*Xp0 - 6*Xp1 + 3*Xp2;//coefficient t^2
		var Cx1 = -3*Xp0 + 3*Xp1;//coefficient t
		var Dx1 = Xp0;
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
			//parametric equation coefficients
		var Ay2 = -Yp4 + 3*Yp5 - 3*Yp6 + Yp7;//coefficient t^3
		var By2 = 3*Yp4 - 6*Yp5 + 3*Yp6;//coefficient t^2
		var Cy2 = -3*Yp4 + 3*Yp5;//coefficient t
		var Dy2 = Yp4;
		var Ax2 = -Xp4 + 3*Xp5 - 3*Xp6 + Xp7;//coefficient t^3
		var Bx2 = 3*Xp4 - 6*Xp5 + 3*Xp6;//coefficient t^2
		var Cx2 = -3*Xp4 + 3*Xp5;//coefficient t
		var Dx2 = Xp4;
		//coefficient of the sextic equation to decompose
		/*var A = ( ( Ax*Ax )/demiAxeX ) + ( ( Ay*Ay )/demiAxeY );//coefficient t^6
		var B = ( ( 2*Ax*Bx )/demiAxeX ) + ( ( 2*Ay*By )/demiAxeY );//coefficient t^5
		var C = ( ( ( 2*Ax*Cx ) + ( Bx*Bx ) )/demiAxeX ) 
					+ ( ( ( 2*Ay*Cy ) + ( By*By ) )/demiAxeY );//coefficient t^4
		var D = ( ( ( 2*Xp0*Ax ) + ( 2*origineEllipseX*Ax ) + ( 2*Bx*Cx ) )/demiAxeX ) 
					+ ( ( ( 2*Yp0*Ay ) + ( 2*origineEllipseY*Ay ) + ( 2*By*Cy ) )/demiAxeY );//coefficient t^3
		var E = ( ( ( Cx*Cx ) + ( 2*Xp0*Bx ) + ( 2*origineEllipseX*Bx ) )/demiAxeX ) 
					+ ( ( ( Cy*Cy ) + ( 2*Yp0*By ) + ( 2*origineEllipseY*By ) )/demiAxeY );//coefficient t^2
		var F = ( ( ( 2*Xp0*Cx ) + ( 2*origineEllipseX*Cx ) )/demiAxeX ) 
					+ ( ( ( 2*Yp0*Cy ) + ( 2*origineEllipseY*Cy ) )/demiAxeY );//coefficient t^1
		var G = ( ( ( Xp0*Xp0 ) + ( 2*origineEllipseX*Xp0 ) + ( origineEllipseX*origineEllipseX ) )/demiAxeX ) 
					+ ( ( ( Yp0*Yp0 ) + ( 2*origineEllipseY*Yp0 ) + ( origineEllipseY*origineEllipseY ) )/demiAxeY );//coefficient t^0*/
		//first simplification of the coefficient t^6 to 1
		/*var a0 = G/A;
		var a1 = F/A;
		var a2 = E/A;
		var a3 = D/A;
		var a4 = C/A;
		var a5 = B/A;*/
		//var inflexionPoints = inflexionPoint( Ay, By, Cy, Yp0, Ax, Bx, Cx, Xp0 );
		var solution = [];
		dichotomy( Ay1, By1, Cy1, Dy1, Yp0, Yp3, Ax1, Bx1, Cx1, Dx1, Xp0, Xp3, Ay2, By2, Cy2, Dy2, Yp4, Yp7, Ax2, Bx2, Cx2, Dx2, Xp4, Xp7, 0, 1, 0, 1, 0.001, 1, solution );
		//console.log( solution );
		var intersectionData = new IntersectionData( "point", solution );
		return intersectionData;
	}

	

	return intersectionLibrary;
}) () 