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
		//discriminant
		var D = (B*B) - 4*A*C;
		var results = [];

		if( D > 0 ){
			results[0] = ( -B-Math.sqrt(D) ) / ( 2*A );
			results[1] = ( -B+Math.sqrt(D) ) / ( 2*A );
		} else if( D == 0 ){
			results[0] = (-B)/(2*A);
		}
		for ( var i=0; i<3; i++ ){
			console.log( results[i] );
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

	function insideInterval( a, end1, end2 ) {
		return ( end1 <= a && a <= end2) || ( end2 <= a && a <= end1 )
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


		var quotient =  (x1-x2)*(y3-y4)-(x3-x4)*(y1-y2);
		//supposed intersection coord on X axis
		var solutionsOnX = ((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/ quotient;
		//supposed intersection coord on Y axis
		var solutionOnY = ((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/ quotient;

		if( isFinite( solution1 ) 
			&& insideInterval( solutionsOnX, x1, x2 )//test if the solution on x is on the first segment
			&& insideInterval( solutionOnY, y1, y2 )//test if the solution on y is on the first segment
			&& insideInterval( solutionsOnX, x3, x4 )//test if the solution on x is on the second segment
			&& insideInterval( solutionOnY, y3, y4 ) ){//test if the solution on y is on the second segment
			var intersectionData = new IntersectionData( "point", [ solutionsOnX, solutionOnY ] );
		} else {
			var intersectionData = new IntersectionData( "empty", [] );
		}
		return intersectionData;
	}
	//return intersectionData
	intersectionLibrary.calculCoordsEllipseLine = function( ellipse, line ) {
		var origineEllipseX = ellipse.cx();
		var origineEllipseY = ellipse.cy();
		var demiAxeX = ellipse.rx();
		var demiAxeY = ellipse.ry();
		var coordsLine = line.array();
		var x1 = coordsLine.value[0][0];//coord first point segment on X
		var x2 = coordsLine.value[1][0];//coord second point segment on X
		var y1 = coordsLine.value[0][1];//coord first point segment on Y
		var y2 = coordsLine.value[1][1];//coord second point segment on Y

		var solutions = [];

		//test if segment type x = a or y = ax + b
		if( x1==x2 ) {
			//if type x = a
			var x1 = x1;
			//test if x is in the ellipse
			if( origineEllipseX - demiAxeX <= x1 && origineEllipseX + demiAxeX >= x1){
				//two y solutions possible
				var solution1 = origineEllipseY + (  Math.sqrt( 1 - ( x1 - origineEllipseX )*( x1 - origineEllipseX )/( demiAxeX*demiAxeX ) )*demiAxeY );
				var solution2 = origineEllipseY + ( -Math.sqrt( 1 - ( x1 - origineEllipseX )*( x1 - origineEllipseX )/( demiAxeX*demiAxeX ) )*demiAxeY )
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
			var segmentSlope = ( y2-y1 ) / ( x2-x1 );
			var segmentOriginOrdinate = y1-x1*segmentSlope;
			var invDemiX2 = 1/( demiAxeX*demiAxeX );
			var invDemiY2 = 1/( demiAxeY*demiAxeY );

			//coef in X**2 of quadratic equation
			var i =    	invDemiX2                 				 
				  + 	invDemiY2*segmentSlope*segmentSlope ;
			//coef in X**1 of quadratic equation
			var j =  -2*invDemiX2*origineEllipseX 				 
				  + 	invDemiY2*( 2*segmentSlope*segmentOriginOrdinate - 2*segmentSlope*origineEllipseY );
			//coef in X**0 of quadratic equation
			var k =  	invDemiX2*origineEllipseX*origineEllipseX 
				  +		invDemiY2 *( segmentOriginOrdinate*segmentOriginOrdinate - 2*segmentOriginOrdinate*origineEllipseY + origineEllipseY*origineEllipseY ) -1;
			//discriminant
			var delta = j*j - 4*i*k;

			//test signe of discriminant
			if( delta > 0 ) {
				var solutionsOnX = [ (-j-Math.sqrt( ( j*j )-4*i*k ) )/(2*i), (-j+Math.sqrt( ( j*j) -4*i*k ))/(2*i) ];//solution of the equation

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
				var solutionsOnX = -j/(2*i);//solution of the equation
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
			var intersectionData = new IntersectionData( "empty", [] );
		} else {
			var intersectionData = new IntersectionData( "point", solutions );

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

	return intersectionLibrary;

}) () 