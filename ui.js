
tester2.loadLibrary( Intersection )
tester2.loadLibrary( Splitting )


var svg = null

$( function() { 
	svg = SVG("shape").size(1000,500) 

	$("#inputPattern").on("change", e => dataStructure.load( "pattern", e.target.files[0] ) )
	$("#inputForm").on("change", e => dataStructure.load( "shape", e.target.files[0] ) )
	$("#espacementX").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#espacementY").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#numberX").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#numberY").on("change", dataStructure.update.bind( dataStructure ) ) 
})

var dataStructure = {
	pattern : null, 
	shape : null 
}

dataStructure.load = function ( svgObject, filename ) {
	var reader = new FileReader() ;
	reader.onload = function(event) {
		//TODO: do not create a new element for each new svg... but reuse previous one...
		dataStructure[ svgObject ] = SVG( document.createElement( "svg" ) ).svg( event.target.result )
		dataStructure.update()      
	}
	reader.readAsText( filename )
}

dataStructure.update = function ( ) {
	if( this.pattern && this.shape ) this.compute() 
}

dataStructure.compute = function( ) {
	console.log( this )
	
	svg.clear()

	var espacementX = document.getElementById("espacementX")
	var espacementY = document.getElementById("espacementY")
	var numberX = document.getElementById("numberX")
	var numberY = document.getElementById("numberY")

	var X = espacementX.value
	var Y = espacementY.value
	var i = numberX.value
	var j = numberY.value

	if( this.shape.node.getElementById( "SvgjsPath1007" ) != null ){
		var svgPathForm = this.shape.node.getElementById( "SvgjsPath1007" )
		var form = svg.path(svgPathForm.getAttribute("d"))
					  .stroke( { width : 1 } ).fill( "none" )
	} else{
		var svgEllipseForm = this.shape.node.getElementById( "SvgjsEllipse1007" )
		var rx = svgEllipseForm.getAttribute("rx")*2
		var ry = svgEllipseForm.getAttribute("ry")*2
		var x = svgEllipseForm.getAttribute("cx") - rx/2
		var y = svgEllipseForm.getAttribute("cy") - ry/2
		console.log(rx, ry, x , y)
		var form = svg.ellipse(rx, ry).move(x,y)
					  .stroke( { width : 1 } ).fill( "none" )
		console.log(form)
	}

	if(this.pattern.node.getElementById( "SvgjsPath1008" ) == null ){
	var svgPathPattern = this.pattern.node.getElementById( "SvgjsPath1007" )
	var path = svg.path(svgPathPattern.getAttribute("d"))
				  .stroke( { width : 0 } ).fill( "none" )

	tester2.run( svg, form, path, X, Y, i, j )
	} else {
		var svgPathPattern1 = this.pattern.node.getElementById( "SvgjsPath1007" )
		var path1 = svg.path(svgPathPattern1.getAttribute("d"))
					  .stroke( { width : 0 } ).fill( "none" )
		var svgPathPattern2 = this.pattern.node.getElementById( "SvgjsPath1008" )
		var path2 = svg.path(svgPathPattern2.getAttribute("d"))
					  .stroke( { width : 0 } ).fill( "none" )

		tester2.run( svg, form, path1, X, Y, i, j )
		tester2.run( svg, form, path2, X, Y, i, j )
	}

	tester2.createSVG( svg )
}
