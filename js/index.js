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
		var solX = ((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/ quotient;//supposed intersection coord on X axis
		var solY = ((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/ quotient ;//supposed intersection coord on Y axis

		if( solX == NaN
			|| solX == Infinity
			|| ( x1 < solX && x2 < solX )//intersection left of line1 on X axis
			|| ( x1 > solX && x2 > solX )//intersection right of line1 on X axis
			|| ( y1 < solY && y2 < solY )//intersection left of line1 on Y axis
			|| ( y3 > solY && y4 > solY )//intersection right of line1 on Y axis
			|| ( y1 > solY && y2 > solY )//intersection left of line2 on X axis
			|| ( x3 < solX && x4 < solX )//intersection right of line2 on X axis
			|| ( x3 > solX && x4 > solX )//intersection left of line2 on Y axis
			|| ( y3 < solY && y4 < solY ) ) {//intersection right of line2 on Y axis
			var intersectionData = new IntersectionData( "empty", [] );
		} else {
			var intersectionData = new IntersectionData( "point", [ solX, solY ] );
		}
		return intersectionData;
	}
	intersectionLibrary.calculCoordsEllipseLine = function( ellipse, line ) {
		var x0 = ellipse.cx();
		var y0 = ellipse.cy();
		var a = ellipse.rx();
		var b = ellipse.ry();
		var coordsLine = line.array();
		var x1 = coordsLine.value[0][0];
		var x2 = coordsLine.value[1][0];
		var y1 = coordsLine.value[0][1];
		var y2 = coordsLine.value[1][1];

		if( x1==x2 ) {
			var solX = x1;
			var i = algebra.parse( "1/" + b + "**2" );
			var j = algebra.parse( "-2*" + y0 + "/" + b + "**2" );
			var k = algebra.parse( "(" + y0 + "**2/" + b + "**2)-1+((" + solX + "**2-2*" + x0 + "*" + solX + "+" + x0 + "**2)/" + a + "**2)" );
			if( j**2-4*i*k >= 0 ) {
				var eq = algebra.parse( i + "y*y + y*" + j + " + "+ k + "=0" );

				var solY = eq.solveFor( "y" );
				var sol = [];
				for( var o in solY ) {
					if( y1 < solY[o] && y2 < solY[o]
						|| y1 > solY[o] && y2 > solY[o] ) {
						sol = sol;
					} else {
						sol.push( [ solX,solY[o] ] );
					}
				}
				if( sol == [] ) {
					var intersectionData = new IntersectionData( "empty", sol );
				} else {
					var intersectionData = new IntersectionData( "point", sol );
				}
			} else {
				var intersectionData = new IntersectionData( "empty", [] );
			}

		} else {
			var coefDirLine = ( y2-y1 ) / ( x2-x1 );
			var ordOriLine = y1-x1*coefDirLine;
			var solutions = [];

			var i = algebra.parse( "(1/"+ a + "**2)+(" + coefDirLine + "**2/" + b + "**2)" );
			var j = algebra.parse( "4*((" + x0 + "/" + a + "**2)+((" + coefDirLine + "*" + ordOriLine + "+" + coefDirLine+ "*" + y0 + ")/" + b + "**2)" );
			var k = algebra.parse( "(" + x0 + "**2/" + a + "**2)-1+((" + ordOriLine + "**2+(" + ordOriLine + "*" + y0 + ")+" + y0 + "**2)/" + b + "**2)" );
			if( i**2 - 4*j*k >= 0 ) {
				var eq = algebra.parse( i + "x*x + x*" + j + " + "+ k + "=0" );

				var solX = eq.solveFor( "x" );

				for( var o in solX ) {
					if(  x1 < solX[o] && x2 < solX[o]
						|| x1 > solX[o] && x2 > solX[o] ){
						solutions = solutions;
					} else {
						var l = algebra.parse( "1/" + b + "**2" );
						var m = algebra.parse( "-2*" + y0 + "/" + b + "**2" );
						var n = algebra.parse( "(" + y0 + "**2/" + b + "**2)-1+((" + solX[o] + "**2-2*" + x0 + "*" + solX[o] + "+" + x0 + "**2)/" + a + "**2)" );
						
						var eq = algebra.parse( l + "y*y + y*" + m + " + "+ n + "=0" );

						var sol = eq.solveFor( "y" );
						for( var p in sol ) {
							if(  y1 < solY[p] && y2 < solY[p]
								|| y1 > solY[p] && y2 > solY[p] ){
								solutions = solutions
							} else {
								solutions.push( [ solX[o], solY[p] ] );
							}
						}
					}
				}
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