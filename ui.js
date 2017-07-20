
tester2.loadLibrary( Intersection )
tester2.loadLibrary( Splitting )


var svg = null
var svgOut = null

$( function() { 
	svg = SVG("shape").size(1000,500) 
	svgOut = SVG( document.createElement( "svg" ) )

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
		dataStructure[ svgObject ] = svgOut.svg( event.target.result )
		dataStructure.update()      
	}
	reader.readAsText( filename )
}

dataStructure.update = function ( ) {
	if( this.pattern && this.shape ) this.compute() 
}

dataStructure.compute = function( ) {
	console.log( "this", this )
	
	svg.clear()

	var espacementX = document.getElementById("espacementX")
	var espacementY = document.getElementById("espacementY")
	var numberX = document.getElementById("numberX")
	var numberY = document.getElementById("numberY")

	var X = espacementX.value
	var Y = espacementY.value
	var i = numberX.value
	var j = numberY.value

	var allPathShape = dataStructure.shape.node.getElementsByTagName("path")
	if( allPathShape.length != 0 ){
		for( var i = 0 ; i < allPathShape.length	; i++ ) { 
			var svgPathForm = this.shape.node.getElementById( allPathShape[i].id )
			var form = svg.path(svgPathForm.getAttribute("d"))
						  .stroke( { width : 1 } ).fill( "none" )

			var allPathPattern = dataStructure.pattern.node.getElementsByTagName("path")

			for( var i = 0 ; i < allPathPattern.length	; i++ ) { 
				var svgPathPattern = this.pattern.node.getElementById( allPathPattern[i].id )
				var path = svgOut.path(svgPathPattern.getAttribute("d"))
							  .stroke( { width : 0 } ).fill( "none" )

				tester2.run( svg, form, path, X, Y, i, j )
			}
		}
	} else{
		var allEllipseShape = dataStructure.shape.node.getElementsByTagName("ellipse")
		for( var i = 0 ; i < allEllipseShape.length	; i++ ) { 
			var svgEllipseForm = this.shape.node.getElementById( allEllipseShape[i].id )
			var rx = svgEllipseForm.getAttribute("rx")*2
			var ry = svgEllipseForm.getAttribute("ry")*2
			var x = svgEllipseForm.getAttribute("cx") - rx/2
			var y = svgEllipseForm.getAttribute("cy") - ry/2
			var form = svg.ellipse(rx, ry).move(x,y)
						  .stroke( { width : 1 } ).fill( "none" )

			var allPathPattern = dataStructure.pattern.node.getElementsByTagName("path")

			for( var i = 0 ; i < allPathPattern.length	; i++ ) { 
				var svgPathPattern = this.pattern.node.getElementById( allPathPattern[i].id )
				var path = svgOut.path(svgPathPattern.getAttribute("d"))
							  .stroke( { width : 0 } ).fill( "none" )

				tester2.run( svg, form, path, X, Y, i, j )
			}
		}
	}

	tester2.createSVG( svg )
}
