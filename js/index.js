Intersection = 
(function() {

	intersectionLibrary = {};

	//prototype of results
	//type : Should be "segment" or "point" or "empty"
	function IntersectionData( type, data ){
		this.type = type;
		this.data = data;
	}

	function cubicResolution( A, B, C, D ){
		//resolution coefficients
		var coefficient1 = B/A;
		var coefficient2 = C/A;
		var coefficient3 = D/A;

		//discrimiant and coefficients
		var D1 = ( 3*B - Math.pow( coefficient1, 2 ) )/9;
		var D2 = ( 9*A*B - 27*C - 2*Math.pow( A, 3 ) )/54;
		var D = Math.pow( D1, 3 ) + Math.pow( D2, 2 );

		var results = array();

		if( D >= 0 ){
			var solutionPlus = sgn( D2 + Math.sqrt(D) )*Math.pow( Math.abs( D2 + Math.sqrt(D) ), (1/3) );
			var solutionMoins = sgn( D2 - Math.sqrt(D) )*Math.pow( Math.abs( D2 - Math.sqrt(D) ), (1/3) );

			results[0] = -coefficient1/3 + ( solutionPlus + solutionMoins );//real root
			results[1] = -coefficient1/3 - ( solutionPlus + solutionMoins )/2;//real part of complex root

			var imaginary = Math.abs(Math.sqrt(3)*(S - T)/2);// complex part of complex root
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
        	if( results[i]<0 || results[i]>1.0 ){
        		results[i]=-1;
        	}
        }
        //order -1 at the end
        results = sortSpecial( results );

        return results;
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

	//based on https://www.particleincell.com/2013/cubic-line-intersection/
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
				Xp0 = points.value[i-1][-2];
				Yp0 = points.value[i-1][-1];
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
		var Ycoefficient = 1;// Ycoefficient = {0,1}
		var segmentSlope = ( y2-y1 ) / ( x2-x1 );
		var segmentOriginOrdinate = y1-x1*segmentSlope;

		//cubic equation coefficients
		var A = Ycoefficient*Ay + segmentSlope*Ax;
		var B = Ycoefficient*By + segmentSlope*Bx;
		var C = Ycoefficient*Cy + segmentSlope*Cx;
		var D = Ycoefficient*Yp0 + segmentSlope*Xp0 + segmentOriginOrdinate;

		var results = cubicResolution( A, B, C, D );
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
								+ results[i]*Cx + Yp0;
				//test if the solution are on the segment
				if(  ){
					solution.add( [ solutionOnX, solutionOnY ] );
				}
			}
		}
		if( sizeOf(solution) != 0 ){
			var intersectionData = new IntersectionData( "point", solution );
		} else {
			var intersectionData = new IntersectionData( "empty", [ [] ] );
		}

		return intersectionData;
	}

	return intersectionLibrary;
}) () 