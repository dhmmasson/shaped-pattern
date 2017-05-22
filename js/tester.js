var tester = 
(function() {
	//require jquery, SVG.js
	//TODO: test if jquery is included

	var Tester = 
	{	testSets : {}
	}

	Tester.loadLibrary = function( library ) {
		this.library = library
	}
	Tester.loadTestSet = function( testSetName, testSet ) {
		this.testSets[ testSetName ] = testSet 
	}
	Tester.run = function( )  {
		var $body = $("body")
 
		//For each test set 
		for( var testSetName in this.testSets ) {
			var testSet = this.testSets[ testSetName ]
			//Create a new bloc
			var $testSetBlocDiv = $( document.createElement( "div" ) )
				
			//Style the div, add a title and stuff
			//TODO: make the declaration more homegeneous
			$testSetBlocDiv.addClass("")
			$testSetBlocDiv.html( "<h1>" + testSetName +  "</h1>")

			//Insert the new block at the end of the body 
			$body.append( $testSetBlocDiv )

			//For each test, create a svg, render the input,
			//run the test, render the output and if the test pass
			for( var test of testSet ) {
				var $testBloc = $(document.createElement( "div" ))

				//Style and add to testSetBloc
				$testBloc.addClass( "testBloc" )
				$testBloc.html( "<h2>" + test.name + "</h2>" )				
				$testSetBlocDiv.append( $testBloc )
				
				//Create an svg, draw the input 
				var svg = SVG( $testBloc[0] )
				var input = test.input( svg )
				
				for( var point of test.output ) {
					svg.circle( 8 )
						 .move( point[0] - 4, point[1] - 4) // -2, because circle are not drawn centered but from the top left corner 
						 .fill( {color:"red" } )
				}

				//call the target to be tested with the input values
				var result = this.library[ test.target ].apply( this.library, input ) 
				console.log( result )
				if( result.type == "point" ) {
					for( var point of result.data ) {
						svg.circle( 4 )
							 .move( point[0] - 2, point[1] - 2) // -1, because circle are not drawn centered but from the top left corner 
							 .fill( {color:"green" } )
					}
				}
				//Print a result message message 

				var correct = true 
					for( var i in result.data ) {
						correct = correct
							&& test.output[i] instanceof Array 
							&& ( result.data[i][0] == test.output[i][0])
							&& ( result.data[i][1] == test.output[i][1])
					}
					for( var i in test.output ) {
						correct = correct
							&& result.data[i] instanceof Array 
							&& ( result.data[i][0] == test.output[i][0])
							&& ( result.data[i][1] == test.output[i][1])
					}

				$testBloc.append( correct  ? "success" : "error" ) 
				if( !correct ) {
					$testBloc.append( JSON.stringify( test.output  ) )
					$testBloc.append( JSON.stringify( result ) ) 
				}
				$testBloc.addClass( correct  ? "success" : "error" ) 
			}

		}

	}

	return Tester 
})()

