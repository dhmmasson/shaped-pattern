
tester2.loadLibrary( Intersection )
tester2.loadLibrary( Splitting )


var svg = null

$( function() { 
	svg = SVG("shape").size(1000,500) 

	$("#inputPattern").on("change", e => dataStructure.load( "pattern", e.target.files[0] ) )
	$("#inputForm").on("change", e => dataStructure.load( "shape", e.target.files[0] ) )

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
	var svgPathPattern = this.pattern.node.getElementById( "SvgjsPath1007" )
	var path = svg.path(svgPathPattern.getAttribute("d"))
				  .stroke( { width : 0 } ).fill( "none" )

	var svgPathForm = this.shape.node.getElementById( "SvgjsPath1007" )
	var form = svg.path(svgPathForm.getAttribute("d"))
				  .stroke( { width : 1 } ).fill( "none" )
	


	var espacementX = document.getElementById("espacementX")
	var espacementY = document.getElementById("espacementY")
	var numberX = document.getElementById("numberX")
	var numberY = document.getElementById("numberY")

	var X = espacementX.value
	var Y = espacementY.value
	var i = numberX.value
	var j = numberY.value

	tester2.run( svg, form, path, X, Y, i, j )
	tester2.createSVG( svg )
}
