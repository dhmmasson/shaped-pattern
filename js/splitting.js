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

	function isEven(value){
    if (value%2 == 0){
      return true;
    }else{
      return false;
    }
	}

	//initialisation for splitting part
	splittingLibrary.phase1 = function( path, form, j ){
		var solutions = [];
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
					//console.log( "intersectionDataBezier ", intersectionData.data );
					var solution = phase2Bezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], form, j, intersectionData );
					var intersectionNumber = splittingLibrary.cutting( Xp0, Yp0, form );
					//console.log(intersectionNumber)
					var finalSolution = []
					for( var u in solution ){
						if( isEven(intersectionNumber) ){
							if( !isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}else{
							if( isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}
					}
					//console.log( " solution ", solution );
					var splittedData = new SplittedData( [finalSolution], "b" );
					solutions.push(splittedData);

				} else if( points.value[i][0] == "L" ){
					var Xp0 = points.value[i-1][points.value[i-1].length-2];
					var Yp0 = points.value[i-1][points.value[i-1].length-1];
					var Xp1 = points.value[i][1];
					var Yp1 = points.value[i][2];
					var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' L ' + Xp1 + ' ' + Yp1 )
					 .stroke( { width : 0 } ).fill("none");
					var intersectionData = Intersection.intersectionEllipseLine( path, form );
					//console.log( "intersectionDataLine", intersectionData.data );
					var solution = phase2Line( [ Xp0, Yp0, Xp1, Yp1 ], form, j, intersectionData );
					var intersectionNumber = splittingLibrary.cutting( Xp0, Yp0, form );
					//console.log(intersectionNumber)
					var finalSolution = []
					for( var u in solution ){
						if( isEven(intersectionNumber) ){
							if( !isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}else{
							if( isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}
					}
					//console.log( " solution ", solution );
					var splittedData = new SplittedData( [finalSolution], "l" );
					solutions.push(splittedData);
				}
			}
		} else if( form.type == "path" ){
			var points = path.array();
			for( var i in points.value ){

				if( points.value[i][0] == "C" ){
					//console.log( "         New cubic part" )
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
					var intersectionData = Intersection.intersectionPathPath( path, form );
					//console.log( "intersectionDataBezier ", intersectionData.data );
					var solution = phase2Bezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], form, j, intersectionData );

					var corner = false;
					var formPoints = form.array();
					for( val of formPoints.value ){
						if( val[ val.length-2 ] == Xp0
						 && val[ val.length-1 ] == Yp0 ){
							corner = true;
						}
					}
					if( corner ){
						var intersectionNumber = splittingLibrary.cutting( Xp1, Yp1, form );
					}else{
						var intersectionNumber = splittingLibrary.cutting( Xp3, Yp3, form );
					}
					//console.log(intersectionNumber)
					var finalSolution = []
					for( var u in solution ){
						if( isEven(intersectionNumber) ){
							if( !isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}else{
							if( isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}
					}
					//console.log( " solution ", solution );
					//console.log( " final solution ", finalSolution );
					var splittedData = new SplittedData( [finalSolution], "b" );
					solutions.push(splittedData);

				} else if( points.value[i][0] == "L" ){
					//console.log( "         New line part" )
					var Xp0 = points.value[i-1][points.value[i-1].length-2];
					var Yp0 = points.value[i-1][points.value[i-1].length-1];
					var Xp1 = points.value[i][1];
					var Yp1 = points.value[i][2];
					var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' L ' + Xp1 + ' ' + Yp1 )
					 .stroke( { width : 0 } ).fill("none");
					var intersectionData = Intersection.intersectionPathPath( path, form );
					console.log( "intersectionDataLine", intersectionData.data );

					var solution = phase2Line( [ Xp0, Yp0, Xp1, Yp1 ], form, j, intersectionData );
					
					var corner = false;
					var formPoints = form.array();
					for( val of formPoints.value ){
						if( val[ val.length-2 ] == Xp0
						 && val[ val.length-1 ] == Yp0 ){
							corner = true;
						}
					}
					if( corner ){
						var intersectionNumber = splittingLibrary.cutting( Xp1, Yp1, form );
					}else{
						var intersectionNumber = splittingLibrary.cutting( Xp0, Yp0, form );
					}
					console.log(intersectionNumber)
					var finalSolution = []
					for( var u in solution ){
						if( isEven(intersectionNumber) ){
							if( !isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}else{
							if( isEven(u) ){
								finalSolution.push(solution[u]);
							}
						}
					}
					console.log( " solution ", solution );
					console.log( " final solution ", finalSolution );
					var splittedData = new SplittedData( [finalSolution], "l" );
					solutions.push(splittedData);
				}
			}
		}
		return solutions;
	}

	//recurcive part for Bezier
	function phase2Bezier( path, form, j, intersectionData ){
		var Xp0 = path[0];
		var Yp0 = path[1];
		var Xp1 = path[2];
		var Yp1 = path[3];
		var Xp2 = path[4];
		var Yp2 = path[5];
		var Xp3 = path[6];
		var Yp3 = path[7];
		var newIntersectionData = []; 
		intersectionData.data.sort( function( a,b ){ return a[2]>b[2] } );
		//console.log( "ordered intersectionData ", intersectionData )
		var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' C ' + Xp1 + ' ' + Yp1 + ' ' + Xp2 + ' ' + Yp2 + ' ' + Xp3 + ' ' + Yp3 )
					 .stroke( { width : 0 } ).fill("none");
		if( form.type == "ellipse" ){
			var currentIntersectionData = Intersection.intersectionBezierEllipse( path, form );
		} else if( form.type == "path" ){
			var currentIntersectionData = Intersection.intersectionPathPath( path, form );
		}
		for( var k in currentIntersectionData.data ){
			if( currentIntersectionData.data[k][2] > 0.00001 && currentIntersectionData.data[k][2] < 0.99999 ){
				newIntersectionData.push(currentIntersectionData.data[k]) ;
			}
		}
		newIntersectionData.sort( function( a,b ){ return a[2]>b[2] } );
		//console.log("newIntersectionData ", newIntersectionData);
		if( newIntersectionData.length > 1 && j<intersectionData.data.length ){
			var part1 = splittingBezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], newIntersectionData[0] )[0];
			var part2 = splittingBezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], newIntersectionData[0] )[1];
			//console.log( "p1 : ", part1,"   p2 : ", part2 );
 	 		j = j+1;
 	 		var s = phase2Bezier( part1, form, j, intersectionData );
 	 		var t = phase2Bezier( part2, form, j, intersectionData );
 	 		return Array.prototype.concat( s, t );
 	 	}else if( newIntersectionData.length != 0 && j<intersectionData.data.length ){
 	 		return splittingBezier( [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ], newIntersectionData[0] )
		}else{
			return [ [ Xp0, Yp0, Xp1, Yp1, Xp2, Yp2, Xp3, Yp3 ] ];
		}
	}

	//recurcive part for line
	function phase2Line( path, form, j, intersectionData ){
		var Xp0 = path[0];
		var Yp0 = path[1];
		var Xp1 = path[2];
		var Yp1 = path[3];
		var newIntersectionData = [];
		//console.log(Xp0,Yp0,Xp1,Yp1)
		if( Xp0 != Xp1 ){
			intersectionData.data.sort( function( a,b ){ return a[0]>b[0] } );
			//console.log( "ordered intersectionData ", intersectionData )
			var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' L ' + Xp1 + ' ' + Yp1 )
						 				.stroke( { width : 0 } ).fill("none");
			if( form.type == "ellipse" ){
				var currentIntersectionData = Intersection.intersectionEllipseLine( form, path );
			} else if( form.type == "path" ){
				var currentIntersectionData = Intersection.intersectionPathPath( path, form );
			}
			for( var k in currentIntersectionData.data ){
				if( !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp0 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp0 ))
				 && !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp1 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp1 ))
				 && !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp1 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp1 ))
				 && !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp0 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp0 )) ){
					
					newIntersectionData.push(currentIntersectionData.data[k]) ;
				}
			}

			newIntersectionData.sort( function( a,b ){ return a[0]>b[0] } );
		} else{
			intersectionData.data.sort( function( a,b ){ return a[1]>b[1] } );
			//console.log( "ordered intersectionData ", intersectionData )
			var path = svg.path( 'M ' + Xp0 + ' ' + Yp0 + ' L ' + Xp1 + ' ' + Yp1 )
						 				.stroke( { width : 0 } ).fill("none");
			if( form.type == "ellipse" ){
				var currentIntersectionData = Intersection.intersectionEllipseLine( form, path );
			} else if( form.type == "path" ){
				var currentIntersectionData = Intersection.intersectionPathPath( path, form );
			}
			for( var k in currentIntersectionData.data ){
				if( !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp0 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp0 ))
				 && !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp1 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp1 ))
				 && !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp1 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp1 ))
				 && !(Math.floor( 10000 * currentIntersectionData.data[k][0] ) == Math.floor( 10000 * Xp0 ) && Math.floor( 10000 * currentIntersectionData.data[k][1] ) == Math.floor( 10000 * Yp0 )) ){
					newIntersectionData.push(currentIntersectionData.data[k]) ;
				}
			}
			newIntersectionData.sort( function( a,b ){ return a[1]>b[1] } );
		}
		console.log( "intersectionData ", newIntersectionData )
		if( intersectionData.type == "empty" ){
			return [ [ Xp0, Yp0, Xp1, Yp1 ] ];
		}else if( newIntersectionData.length > 1 && j<intersectionData.data.length ){
			var part1 = splittingLine( [ Xp0, Yp0, Xp1, Yp1 ], newIntersectionData[0] )[0];
			var part2 = splittingLine( [ Xp0, Yp0, Xp1, Yp1 ], newIntersectionData[0] )[1];
			//console.log( "p1 : ", part1,"   p2 : ", part2 );
 	 		j = j+1;
 	 		var s = phase2Line( part1, form, j, intersectionData );
 	 		var t = phase2Line( part2, form, j, intersectionData );
 	 		return Array.prototype.concat( s, t );
 	 	}else if( newIntersectionData.length != 0 && j<intersectionData.data.length ){
 	 		return splittingLine( [ Xp0, Yp0, Xp1, Yp1 ], newIntersectionData[0] )
		}else{
			return [ [ Xp0, Yp0, Xp1, Yp1 ] ];
		}
	}

	//take a line and a "point" caracterised by x, y and retu
	function splittingLine( line, point ){
		if( Math.floor( 10000 * point[0] ) == Math.floor( 10000 * line[0] ) && Math.floor( 10000 * point[0] ) == Math.floor( 10000 * line[2] ) 
		 && Math.floor( 10000 * point[1] ) == Math.floor( 10000 * line[1] ) && Math.floor( 10000 * point[1] ) == Math.floor( 10000 * line[3] ) ){
			var solution = line;
		} else{
			var line1 = [ line[0], line[1], point[0], point[1] ]; 
			var line2 = [ point[0], point[1], line[2], line[3] ];
			var solution = [ line1, line2 ];
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
		if( Math.floor( 10000 * point[0] ) == Math.floor( 10000 * x1 ) && Math.floor( 10000 * point[0] ) == Math.floor( 10000 * x4 )
		 && Math.floor( 10000 * point[1] ) == Math.floor( 10000 * y1 ) && Math.floor( 10000 * point[1] ) == Math.floor( 10000 * y4 ) ){
	    var solution = [ x1, y1, x2, y2, x3, y3, x4, y4 ];
	  } else {
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
	  }
  return solution;
	}

	splittingLibrary.cutting = function( Xp, Yp, form ){

		var x = -10
		var y = -10

		var path = svg.path( 'M ' + x + ' ' + y + ' L ' + Xp + ' ' + Yp )
								  .stroke( { width : 0 } ).fill("none");

		if( form.type == "ellipse" ){
			var intersectionData = Intersection.intersectionEllipseLine( form, path );
		} else if( form.type == "path" ){
			var intersectionData = Intersection.intersectionPathPath( path, form );
		}
		if( intersectionData.type == "empty" ){
			return 0
		}else{
			return intersectionData.data.length
		}
	}

	return splittingLibrary;

}) () 