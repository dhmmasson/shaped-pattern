
index.loadLibrary( Intersection )
index.loadLibrary( Splitting )

//declare the svg for printing
var svg = null
//declare the svg used as playground
var svgOut = null

$( function() { 
	svg = SVG("shape").size(1000,500) 
	svgOut = SVG( document.createElement( "svg" ) )
	//calling update on change for each element
	$("#inputPattern").on("change", e => dataStructure.load( "pattern", e.target.files[0] ) )
	$("#inputForm").on("change", e => dataStructure.load( "shape", e.target.files[0] ) )
	$("#espacementX").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#espacementY").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#numberX").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#numberY").on("change", dataStructure.update.bind( dataStructure ) )
	$("#startX").on("change", dataStructure.update.bind( dataStructure ) ) 
	$("#startY").on("change", dataStructure.update.bind( dataStructure ) ) 
})
//declaration of the structure used to received data
var dataStructure = {
	pattern : null, 
	shape : null 
}
//function using the file reader to implement the file in an svg object
dataStructure.load = function ( svgObject, filename ) {
	var reader = new FileReader() ;
	reader.onload = function(event) {
		//TODO: do not create a new element for each new svg... but reuse previous one...
		dataStructure[ svgObject ] = SVG( document.createElement( "svg" ) ).svg( event.target.result )
		dataStructure.update()      
	}
	reader.readAsText( filename )
}
//starting the computing function only when both file are load
dataStructure.update = function ( ) {
	if( this.pattern && this.shape ) this.compute() 
}
//function receiving the data from range, putting the data file into shape for function run and calling it
dataStructure.compute = function( ) {
	console.log( "this", this )
	
	svg.clear()
	//range elements
	var espacementX = document.getElementById("espacementX")
	var espacementY = document.getElementById("espacementY")
	var numberX = document.getElementById("numberX")
	var numberY = document.getElementById("numberY")
	var startX = document.getElementById("startX")
	var startY = document.getElementById("startY")
	//ranges values
	var X = espacementX.value
	var Y = espacementY.value
	var i = numberX.value
	var j = numberY.value
	var sX = startX.value
	var sY = startY.value
	//finding the element with tagname path to use the id 
	var allPathShape = dataStructure.shape.node.getElementsByTagName("path")
	if( allPathShape.length != 0 ){
		for( var m = 0 ; m < allPathShape.length	; m++ ) { 
			//element get by id then put in path shape
			var svgPathForm = this.shape.node.getElementById( allPathShape[m].id )
			var form = svg.path(svgPathForm.getAttribute("d"))
						  .stroke( { width : 1 } ).fill( "none" )

			var allPathPattern = dataStructure.pattern.node.getElementsByTagName("path")

			for( var n = 0 ; n < allPathPattern.length	; n++ ) { 
				//element get by id then put in path shape
				var svgPathPattern = this.pattern.node.getElementById( allPathPattern[n].id )
				var path = svgOut.path(svgPathPattern.getAttribute("d"))
							  .stroke( { width : 0 } ).fill( "none" )

				index.run( svg, form, path, X, Y, i, j, sX, sY )
			}
		}
	} else{
		var allEllipseShape = dataStructure.shape.node.getElementsByTagName("ellipse")
		for( var m = 0 ; m < allEllipseShape.length	; m++ ) { 
			//element get by id then put in ellipse shape
			var svgEllipseForm = this.shape.node.getElementById( allEllipseShape[m].id )
			var rx = svgEllipseForm.getAttribute("rx")*2
			var ry = svgEllipseForm.getAttribute("ry")*2
			var x = svgEllipseForm.getAttribute("cx") - rx/2
			var y = svgEllipseForm.getAttribute("cy") - ry/2
			var form = svg.ellipse(rx, ry).move(x,y)
						  .stroke( { width : 1 } ).fill( "none" )

			var allPathPattern = dataStructure.pattern.node.getElementsByTagName("path")

			for( var n = 0 ; n < allPathPattern.length	; n++ ) {
				//element get by id then put in path shape
				var svgPathPattern = this.pattern.node.getElementById( allPathPattern[n].id )
				var path = svgOut.path(svgPathPattern.getAttribute("d"))
							  .stroke( { width : 0 } ).fill( "none" )

				index.run( svg, form, path, X, Y, i, j, sX, sY )
			}
		}
	}

	index.createSVG( svg )
}
