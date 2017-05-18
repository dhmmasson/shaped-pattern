Intersection = 
(function() {

	function IntersectionData( type, data ){//Prototype of intersection results
		this.type = type;
		this.data = data;
	}

	function intersectionLineLine( line1, line2 ){
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

		var solX = ((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/((x1-x2)*(y3-y4)-(x3-x4)*(y1-y2));//supposed intersection coord on X axis

		var solY = ((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/((x1-x2)*(y3-y4)-(x3-x4)*(y1-y2));//supposed intersection coord on Y axis

		if( solX.toString() == "NaN" 
			|| solX.toString() == "Infinity"
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

	maLibrarie = {};
	maLibrarie.intersectionLineLine = intersectionLineLine;

	return maLibrarie;
}) () 