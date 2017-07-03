Splitting = 
(function() {

	splittingLibrary = {};
	var epsilon = 0.00000001;

	function SplittedData( value, type ){
		this.value = value;
		this.type = type;
	}

	//determine if the value is inside the interval
	function insideInterval( a, end1, end2 ) {
		return ( end1 - epsilon <= a && a <= end2 + epsilon) || ( end2 - epsilon <= a && a <= end1 + epsilon )
	}

	//return the extremums values of a list
	function extremums( list ){
		list.sort( function( a,b ){ return a>b } );
		return [ list[0], list[list.length-1] ];
	}

	splittingLibrary.phase1 = function( path, form, j ){
		var splittedData = [];
		if( form.type == "ellipse" ){
			var points = path.array();
			for( var i in points.value ){

				if( points.value[i][0] == "C" ){
					var Xp0 = points.value[i-1][points.value[i-1].length-2];
					var Yp0 = points.value[i-1][points.value[i-1].length-1];
					var Xp1 = points.value[i][1];
					var Yp1 = points.value[i][2];
					var Xp2 = points.value[i][3];
					var Yp2 = points.value[i][4];
					var Xp3 = points.value[i][5];
					var Yp3 = points.value[i][6];
					var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' C ' + Xp1 + ' ' + Yp1 + ' ' + Xp2 + ' ' + Yp2 + ' ' + Xp3 + ' ' + Yp3 )
					 .stroke( { width : 0 } ).fill("none");
					var intersectionData = Intersection.intersectionBezierEllipse( path, form );
					console.log( "intersectionDataBezier", intersectionData.data[0].length );
					var solution = phase2( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], form, j, intersectionData )
					var splittedData = new SplittedData( [solution], "b" )


				} else if( points.value[i][0] == "L" ){
					var Xp0 = points.value[i-1][points.value[i-1].length-2];
					var Yp0 = points.value[i-1][points.value[i-1].length-1];
					var Xp1 = points.value[i][1];
					var Yp1 = points.value[i][2];
					var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' L ' + Xp1 + ' ' + Yp1 )
					 .stroke( { width : 0 } ).fill("none");
					var intersectionData = Intersection.calculCoordsEllipseLine( form, path );
					console.log( "intersectionDataLine", intersectionData.data );
					for( var j in intersectionData.data){
						var intersection =  intersectionData.data[j];
						if( intersection.length == 1  ){
							splittedData.push( new SplittedData( splittingLine( [ Xp0, Yp0, Xp1, Yp1 ], intersection ), "l" ) )
						} else{

						}
					}
				}
			}
		} else {
			console.log( "The form is not an ellipse" )
		}
		//return splittedData;
	}

	function phase2( path, form, j, intersectionData ){
		var Xp0 = path[0];
		var Yp0 = path[1];
		var Xp1 = path[2];
		var Yp1 = path[3];
		var Xp2 = path[4];
		var Yp2 = path[5];
		var Xp3 = path[6];
		var Yp3 = path[7];
		intersectionData
		var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' C ' + Xp1 + ' ' + Yp1 + ' ' + Xp2 + ' ' + Yp2 + ' ' + Xp3 + ' ' + Yp3 )
					 .stroke( { width : 0 } ).fill("none");
		var newIntersectionData = Intersection.intersectionBezierEllipse( path, form );
		console.log("newIntersectionData ", newIntersectionData.data);
		var intersection =  intersectionData.data[j];
		if( newIntersectionData.data.length > 1){
			var part1 = splittingBezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], intersection )[0];
			var part2 = splittingBezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], intersection )[1];
			console.log( "p1 : ", part1,"   p2 : ", part2 );
 	 		j = j+1;
 	 		var s = phase2( part1, form, j, intersectionData );
 	 		var t = phase2( part2, form, j, intersectionData );
 	 		return Array.prototype.concat( s, t );
		}else if( newIntersectionData.data.length == 1 && newIntersectionData.data[0].length != 0 ){
			return splittingBezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], intersection )
		}else{
			return [ [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ] ];
		}

	}


	//take a line and a "point" caracterised by x, y and retu
	function splittingLine( line, point ){
		if( point[0] != line[0] && point[0] != line[2] 
		 && point[1] != line[1] && point[1] != line[3] ){
			var line1 = [ line[0], line[1], point[0], point[1] ]; 
			var line2 = [ point[0], point[1], line[2], line[3] ];
			var solution = [ line1, line2 ];
		} else{
			var solution = line;
		}
		return solution;
	}

	//take a bezier curve and a "point" caracterised by x, y and t if a bezier and return two bezier
	function splittingBezier( bezier, point ){
		var x1 = bezier[0];
		var y1 = bezier[1];
		var x2 = bezier[2];
		var y2 = bezier[3];
		var x3 = bezier[4];
		var y3 = bezier[5];
		var x4 = bezier[6];
		var y4 = bezier[7];
		var t = point[2];
		if( point[0] != x1 && point[0] != x4 
		 && point[1] != y1 && point[1] != y4 ){
			var x12 = ( x2-x1 )*t + x1;
	    var y12 = ( y2-y1 )*t + y1;

	    var x23 = ( x3-x2 )*t + x2;
	    var y23 = ( y3-y2 )*t + y2;

	    var x34 = ( x4-x3 )*t + x3;
	    var y34 = ( y4-y3 )*t + y3;

	    var x123 = ( x23-x12 )*t + x12;
	    var y123 = ( y23-y12 )*t + y12;

	    var x234 = ( x34-x23 )*t + x23;
	    var y234 = ( y34-y23 )*t + y23;

	  	var x1234 = ( x234-x123 )*t + x123;
	    var y1234 = ( y234-y123 )*t + y123;

	    bezier1 = [ x1, y1, x12, y12, x123, y123, x1234, y1234 ];
	    bezier2 = [ x1234, y1234, x234, y234, x34, y34, x4, y4 ];
	    var solution = [ bezier1, bezier2 ];
	  } else {
	  	var solution = [ x1, y1, x2, y2, x3, y3, x4, y4 ];
	  }
  return solution;
	}


	return splittingLibrary;

}) () 