Intersection = 
(function() {

	intersectionLibrary = {};

	//prototype of results
	//type : Should be "segment" or "point" or "empty"
	function IntersectionData( type, data ){
		this.type = type;
		this.data = data;
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
		var solutionsOnX = ((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/ quotient;//supposed intersection coord on X axis
		var solutionOnY = ((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/ quotient ;//supposed intersection coord on Y axis

		if( solutionsOnX == NaN
			|| solutionsOnX == Infinity
			|| ( x1 < solutionsOnX && x2 < solutionsOnX )//intersection left of line1 on X axis
			|| ( x1 > solutionsOnX && x2 > solutionsOnX )//intersection right of line1 on X axis
			|| ( y1 < solutionOnY && y2 < solutionOnY )//intersection left of line1 on Y axis
			|| ( y3 > solutionOnY && y4 > solutionOnY )//intersection right of line1 on Y axis
			|| ( y1 > solutionOnY && y2 > solutionOnY )//intersection left of line2 on X axis
			|| ( x3 < solutionsOnX && x4 < solutionsOnX )//intersection right of line2 on X axis
			|| ( x3 > solutionsOnX && x4 > solutionsOnX )//intersection left of line2 on Y axis
			|| ( y3 < solutionOnY && y4 < solutionOnY ) ) {//intersection right of line2 on Y axis
			var intersectionData = new IntersectionData( "empty", [] );
		} else {
			var intersectionData = new IntersectionData( "point", [ solutionsOnX, solutionOnY ] );
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
		//test if segment type x = a or y = ax + b
		if( x1==x2 ) {
			//if type x = a
			var solutionsOnX = x1;
			//test if x is in the ellipse
			if( origineEllipseX - demiAxeX <= solutionsOnX && origineEllipseX + demiAxeX >= solutionsOnX){
				//two y solutions possible
				var solution1 = origineEllipseY + ( Math.sqrt( 1 - ( solutionsOnX - origineEllipseX )*( solutionsOnX - origineEllipseX )/( demiAxeX*demiAxeX ) )*demiAxeY );
				var solution2 =  origineEllipseY + ( -Math.sqrt( 1 - ( solutionsOnX - origineEllipseX )*( solutionsOnX - origineEllipseX )/( demiAxeX*demiAxeX ) )*demiAxeY )
				if( solution1 == solution2 ){
					//test if the solution on y is on the segment
					if( solution1 == NaN
						|| solution1 == Infinity 
						|| y1 < solution1 && y2 < solution1
						|| y1 > solution1 && y2 > solution1 ) {
						var intersectionData = new IntersectionData( "empty", [] );
					} else {
						var intersectionData = new IntersectionData( "point", [ [ solutionsOnX, solution1 ] ] );
					}
				} else {
					var solutionOnY = [ solution2, solution1 ];//solution of the equation
					var solutions = [];
					for( var o in solutionOnY ) {
						//test if supposed intersection point is on segment
						if( solutionOnY[o] == NaN
							|| solutionOnY[o] == Infinity 
							|| y1 < solutionOnY[o] && y2 < solutionOnY[o]
							|| y1 > solutionOnY[o] && y2 > solutionOnY[o] ) {
							solutions = solutions;
						} else {
							solutions.push( [ solutionsOnX, solutionOnY[o] ] );
						}
					}
					//test what to return depending on if point are on segment
					if( solutions == [] ) {
						var intersectionData = new IntersectionData( "empty", [] );
					} else {
						var intersectionData = new IntersectionData( "point", solutions );
					}
				}
			} else {
				//if x not in the ellipse return "empty"
				var intersectionData = new IntersectionData( "empty", [] );
			}

		} else {
			// if type y = ax + b
			//determination of the two coefficients
			var segmentSlope = ( y2-y1 ) / ( x2-x1 );
			var segmentOriginOrdonate = y1-x1*segmentSlope;
			var solutions = [];

			var i = ( 1/( demiAxeX*demiAxeX ) )+( ( segmentSlope*segmentSlope )/( demiAxeY*demiAxeY ) );//coef in X**2 of quadratic equation
			var j = ( ( -2*origineEllipseX )/( demiAxeX*demiAxeX ) )+( ( 2*segmentSlope*segmentOriginOrdonate - 2*segmentSlope*origineEllipseY )/( demiAxeY*demiAxeY ) );//coef in X**1 of quadratic equation
			var k = ( ( origineEllipseX*origineEllipseX )/( demiAxeX*demiAxeX ) )+( ( segmentOriginOrdonate*segmentOriginOrdonate - 2*segmentOriginOrdonate*origineEllipseY + origineEllipseY*origineEllipseY )/( demiAxeY*demiAxeY ) )-1;//coef in X**0 of quadratic equation
			var delta = j*j - 4*i*k;//disriminant
			console.log(delta);
			//test signe of discriminant
			if( delta > 0 ) {
				var solutionsOnX = [ (-j-Math.sqrt( ( j*j )-4*i*k ))/(2*i), (-j+Math.sqrt( ( j*j) -4*i*k ))/(2*i) ];//solution of the equation

				for( var o in solutionsOnX ) {
					
					//test if supposed X coord is on segment
					if( solutionsOnX[o] == NaN
						|| solutionsOnX[o] == Infinity 
						|| x1 < solutionsOnX[o] && x2 < solutionsOnX[o]
						|| x1 > solutionsOnX[o] && x2 > solutionsOnX[o] 
						|| origineEllipseX - demiAxeX > solutionsOnX && origineEllipseX + demiAxeX < solutionsOnX ) {
						solutions = solutions;
					} else {
						var solutionOnY = segmentSlope * solutionsOnX[o] + segmentOriginOrdonate;//solution for Y coord if X coord on segment and ellipse
						console.log( solutionsOnX[o], solutionOnY )
						if( solutionOnY == NaN
							|| solutionOnY == Infinity 
							|| y1 < solutionOnY && y2 < solutionOnY
							|| y1 > solutionOnY && y2 > solutionOnY ) {
							solutions = solutions;
						} else {
							solutions.push( [ solutionsOnX[o], solutionOnY ] );
						}
					}
				}
				if( solutions.length == 0 ) {
					var intersectionData = new IntersectionData( "empty", [] );
				} else {
					var intersectionData = new IntersectionData( "point", solutions );
				}
			} else if( delta == 0 ) {
				var solutionsOnX = (-j)/(2*i);//solution of the equation
				//test if supposed intersection point is on segment
				if( solutionsOnX == NaN
					|| solutionsOnX == Infinity 
					|| x1 < solutionsOnX && x2 < solutionsOnX
					|| x1 > solutionsOnX && x2 > solutionsOnX
					|| origineEllipseX - demiAxeX > solutionsOnX && origineEllipseX + demiAxeX < solutionsOnX ) {
					var intersectionData = new IntersectionData( "empty", [] );
				} else {
					var solutionOnY = segmentSlope * solutionsOnX + segmentOriginOrdonate;
					console.log( solutionsOnX, solutionOnY )
					//test if supposed Y coord is on segment
					if( solutionOnY == NaN
						|| solutionOnY == Infinity 
						|| y1 < solutionOnY && y2 < solutionOnY
						|| y1 > solutionOnY && y2 > solutionOnY ){
						var intersectionData = new IntersectionData( "empty", [] );
					} else {
						var intersectionData = new IntersectionData( "point", [ [ solutionsOnX, solutionOnY ] ] );
					}
				}
			} else {
				console.log("delta neg")
				var intersectionData = new IntersectionData( "empty", [] );
			}
		}

		return intersectionData;

	}

	return intersectionLibrary ;
}) () 