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

	intersectionLibrary.intersectionPathLine = function( path, line ){
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


		return intersectionData;
	}

	return intersectionLibrary;
}) () 