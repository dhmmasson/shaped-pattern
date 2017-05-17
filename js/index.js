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

	function calculCoords (ligne1, ligne2){
		var coords1 = ligne1.array();
		var coords2 = ligne2.array();

		if(coords1.value[1][0]==coords1.value[0][0]){
			var coefDir1 = 1;
			var ordOri1 = 0;
		}else{
			var coefDir1 = (coords1.value[1][1]-coords1.value[0][1])/(coords1.value[1][0]-coords1.value[0][0]);
			var ordOri1 = coords1.value[0][1]-coords1.value[0][0]*coefDir1;
			var exp1 = new algebra.parse(coefDir1+ " *x + " + ordOri1);
		}
		if(coords2.value[1][0]==coords2.value[0][0]){
			var coefDir2 = 1;
			var ordOri2 = 0;
		}else{
			var coefDir2 = (coords2.value[1][1]-coords2.value[0][1])/(coords2.value[1][0]-coords2.value[0][0]);
			var ordOri2 = coords2.value[0][1]-coords2.value[0][0]*coefDir2;
			var exp2 = new algebra.parse(coefDir2+ " *x + " + ordOri2);
		}

		if(coords2.value[1][0]==coords2.value[0][0])(coords1.value[1][0]==coords1.value[0][0])
		var equation = new algebra.Equation(exp1,exp2);

		var solX = equation.solveFor("x");

		var equationY = new algebra.parse(coefDir1+" *"+ solX + "+" + ordOri1 + "= y")

		var solY = equationY.solveFor("y");

		var sol = [solX,solY];
		console.log("coordonnées intersection " + sol[0] + ", " + sol[1]);

		return sol;
	}

	function draw() {

		console.log( this )

	}


	maLibrarie = {}
	maLibrarie.svg = svgLine 
	maLibrarie.draw = draw 

//	return maLibrarie
//}) () 