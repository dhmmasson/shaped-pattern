//Intersection = 
//(function() {
	var svgLine = SVG("line") ;
	var svgRect = SVG("rect") ;
	var svgElipse = SVG("elipse") ;
	var svgCurve = SVG("curve") ;

	var line1 = svgLine.line(5 ,5 ,100 ,50).stroke({ width: 1 });
	var line2 = svgLine.line(5 ,50 ,100 ,5).stroke({ width: 1 });
	var line3 = svgLine.line(5 ,15 ,100 ,40).stroke({ width: 1 });
	var line4 = svgLine.line(80 ,20 ,20 ,20).stroke({ width: 1 });
	var line5 = svgLine.line(80 ,20 ,80 ,80).stroke({ width: 1 });
	var line6 = svgLine.line(70 ,20 ,70 ,80).stroke({ width: 1 });

	function calculCoords (ligne1, ligne2){
		var coords1 = ligne1.array();
		var coords2 = ligne2.array();

		var x1 = coords1.value[0][0];
		var x2 = coords1.value[1][0];
		var y1 = coords1.value[0][1];
		var y2 = coords1.value[1][1];

		var x3 = coords2.value[0][0];
		var x4 = coords2.value[1][0];
		var y3 = coords2.value[0][1];
		var y4 = coords2.value[1][1];

		var solX = ((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/((x1-x2)*(y3-y4)-(x3-x4)*(y1-y2));

		var solY = ((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/((x1-x2)*(y3-y4)-(x3-x4)*(y1-y2));

		if (solX.toString() == "NaN" || solX.toString() == "Infinity"){
			console.log("Les segments ne s'intersectent pas");
		}else if ( x1<solX && x2<solX ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( x1>solX && x2>solX ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( y1<solY && y2<solY ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( y1>solY && y2>solY ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( x3<solX && x4<solX ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( x3>solX && x4>solX ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( y3<solY && y4<solY ){
			console.log("Les segments ne s'intersectent pas");
		}else if ( y3>solY && y4>solY ){
			console.log("Les segments ne s'intersectent pas");
		}else{
			var sol = [solX,solY];
			console.log("coordonnées intersection " + sol[0] + ", " + sol[1]);
			return sol;
		}
	}

	maLibrarie = {}
	maLibrarie.svg = svgLine 
	maLibrarie.calculCoords = calculCoords

//	return maLibrarie
//}) () 