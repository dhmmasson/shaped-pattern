Intersection = 
(function() {

	intersectionLibrary = {};

	//prototype of results
	//type : Should be "segment" or "point" or "empty"
	function IntersectionData( type, data ){
		this.type = type;
		this.data = data;
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

	return intersectionLibrary;

}) () 