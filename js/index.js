Intersection = 
(function() {
	var svgLine = SVG("line") ;
	var svgRect = SVG("rect") ;
	var svgElipse = SVG("elipse") ;
	var svgCurve = SVG("curve") ;

	var line1 = svgLine.line(5 ,5 ,100 ,50).stroke({ width: 1 });
	var line2 = svgLine.line(5 ,50 ,100 ,5).stroke({ width: 1 });

	//function intersectLL (ligne1, ligne2){
	var coords1 = line1.array();
	var coords2 = line2.array();
	//}

	function draw() {

		console.log( this )

	}


	maLibrarie = {}
	maLibrarie.svg = svgLine 
	maLibrarie.draw = draw 

	return maLibrarie
}) () 