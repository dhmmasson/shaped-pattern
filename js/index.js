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
			var solutionsOnX = x1;
			var i = algebra.parse( "1/" + demiAxeY + "**2" );//coef in Y**2 of quadratic equation
			var j = algebra.parse( "-2*" + origineEllipseY + "/" + demiAxeY + "**2" );//coef in Y**1 of quadratic equation
			var k = algebra.parse( "(" + origineEllipseY + "**2/" + demiAxeY + "**2)-1+((" + solutionsOnX + "**2-2*" + origineEllipseX + "*" + solutionsOnX + "+" + origineEllipseX + "**2)/" + demiAxeX + "**2)" );//coef in Y**0 of quadratic equation
			//test signe of discriminant
			if( j**2-4*i*k >= 0 ) {
				var equation = algebra.parse( i + "y*y + y*" + j + " + "+ k + "=0" );

				var solutionOnY = equation.solveFor( "y" );//solution of the equation
				var solutions = [];
				for( var o in solutionOnY ) {
					//test if supposed intersection point is on segment
					if( y1 < solutionOnY[o] && y2 < solutionOnY[o]
						|| y1 > solutionOnY[o] && y2 > solutionOnY[o] ) {
						solutions = solutions;
					} else {
						sol.push( [ solutionsOnX,solutionOnY[o] ] );
					}
				}
				//test what to return depending on if point are on segment
				if( solutions == [] ) {
					var intersectionData = new IntersectionData( "empty", sol );
				} else {
					var intersectionData = new IntersectionData( "point", sol );
				}
			} else {
				var intersectionData = new IntersectionData( "empty", [] );
			}

		} else {
			var segmentSlope = ( y2-y1 ) / ( x2-x1 );
			var segmentOriginOrdonate = y1-x1*segmentSlope;
			var solutions = [];

			var i = algebra.parse( "(1/"+ demiAxeX + "**2)+(" + segmentSlope + "**2/" + demiAxeY + "**2)" );//coef in X**2 of quadratic equation
			var j = algebra.parse( "4*((" + origineEllipseX + "/" + demiAxeX + "**2)+((" + segmentSlope + "*" + segmentOriginOrdonate + "+" + segmentSlope+ "*" + origineEllipseY + ")/" + demiAxeY + "**2)" );//coef in X**1 of quadratic equation
			var k = algebra.parse( "(" + origineEllipseX + "**2/" + demiAxeX + "**2)-1+((" + segmentOriginOrdonate + "**2+(" + segmentOriginOrdonate + "*" + origineEllipseY + ")+" + origineEllipseY + "**2)/" + demiAxeY + "**2)" );//coef in X**0 of quadratic equation
			//test signe of discriminant
			if( i**2 - 4*j*k >= 0 ) {
				var equation = algebra.parse( i + "x*x + x*" + j + " + "+ k + "=0" );

				var solutionsOnX = equation.solveFor( "x" );//solution of the quadratic equation for X coord

				for( var o in solutionsOnX ) {
					//test if supposed X coord is on segment
					if(  x1 < solutionsOnX[o] && x2 < solutionsOnX[o]
						|| x1 > solutionsOnX[o] && x2 > solutionsOnX[o] ){
						solutions = solutions;
					} else {
						var l = algebra.parse( "1/" + demiAxeY + "**2" );//coef in Y**2 of quadratic equation
						var m = algebra.parse( "-2*" + origineEllipseY + "/" + demiAxeY + "**2" );//coef in Y**1 of quadratic equation
						var n = algebra.parse( "(" + origineEllipseY + "**2/" + demiAxeY + "**2)-1+((" + solutionsOnX[o] + "**2-2*" + origineEllipseX + "*" + solutionsOnX[o] + "+" + origineEllipseX + "**2)/" + demiAxeX + "**2)" );//coef in Y**0 of quadratic equation
						
						var equation = algebra.parse( l + "y*y + y*" + m + " + "+ n + "=0" );

						var solutionOnY = equation.solveFor( "y" );//solution of the quadratic equation for X coord
						for( var p in solutionOnY ) {
							//test if supposed Y coord is on segment
							if(  y1 < solutionOnY[p] && y2 < solutionOnY[p]
								|| y1 > solutionOnY[p] && y2 > solutionOnY[p] ){
								solutions = solutions
							} else {
								solutions.push( [ solutionsOnX[o], solutionOnY[p] ] );
							}
						}
					}
				}
				//test what to return depending on if point are on segment
				if( solutions == [] ) {
					var intersectionData = new IntersectionData( "empty", solutions );
				} else {
					var intersectionData = new IntersectionData( "point", solutions );
				}
			} else {
				var intersectionData = new IntersectionData( "empty", [] );
			}
		}

		return intersectionData;

	}

	return intersectionLibrary ;
}) () 