var tester2 = 
(function() {

	var Tester2 = {};

	var color = [ "chartreuse", "red", "blue", "green", "yellow", "indigo"  ]
	
	Tester2.loadLibrary = function( library ) {
		this.library = library;
	}

	Tester2.createSVG = function( svg ) {
	  var blob = new Blob([svg.svg()], {type: 'image/svg+xml'}); // pass a useful mime type here
	  var url = URL.createObjectURL(blob);
	  lien = document.getElementById( "download");
	  lien.setAttribute("href", url );
	}

	function drawSplittedData( path, form )  {
		console.log("entering run");
		var splittedData = Splitting.phase1( path, form, 0 );
		//console.log( "splittedData", splittedData );
		for( var i in splittedData ){
			if( splittedData[i].type == "l" ){
				for( var j in splittedData[i].value[0] ){
					var part = splittedData[i].value[0][j];
					svg.path( 'M ' + part[0] + ' ' + part[1] + ' L ' + part[2] + ' ' + part[3] )
					 	 .stroke( { width : 1 } ).fill("none");
				}
			} else if( splittedData[i].type == "b" ){
				for( var j in splittedData[i].value[0] ){
					var part = splittedData[i].value[0][j];
					svg.path( 'M ' + part[0] + ' ' + part[1] + ' C ' + part[2] + ' ' + part[3] + ' ' + part[4] + ' ' + part[5] + ' ' + part[6] + ' ' + part[7])
						 .stroke( { width : 1 } ).fill("none");
				}
			}
		}
	}

	function drawPath( svg, X, Y, i, j, form ){
		console.log("entering drawPath");
	  //var path = svg.path('M'+(1+(X*i))+' '+(1+(Y*j))+' L'+(10+(X*i))+' '+(0+(Y*j))+' C'+(80+(X*i))+' '+(0+(Y*j))+' '+(40+(X*i))+' '+(40+(Y*j))+' '+(80+(X*i))+' '+(40+(Y*j))+' L'+(100+(X*i))+' '+(40+(Y*j))+' C'+(120+(X*i))+' '+(40+(Y*j))+' '+(110+(X*i))+' '+(20+(Y*j))+' '+(140+(X*i))+' '+(20+(Y*j))+' L'+(150+(X*i))+' '+(20+(Y*j)))
	  //   .fill('none').stroke({ color: '#000000', width: 0});
	  var path1 = svg.path('M'+(25+(X*i))+' '+(20+(Y*j))+' L'+(65+(X*i))+' '+(20+(Y*j))+' L'+(65+(X*i))+' '+(25+(Y*j))+' L'+(25+(X*i))+' '+(25+(Y*j))+' L'+(25+(X*i))+' '+(20+(Y*j)) )
	  	 .fill('none').stroke({ color: '#000000', width: 0});
	  var path2 = svg.path('M'+(0+(X*i))+' '+(30+(Y*j))+' L'+(40+(X*i))+' '+(30+(Y*j))+' L'+(40+(X*i))+' '+(35+(Y*j))+' L'+(0+(X*i))+' '+(35+(Y*j))+' L'+(0+(X*i))+' '+(30+(Y*j)) )
	  	 .fill('none').stroke({ color: '#000000', width: 0});
	  drawSplittedData( path1, form );
	  drawSplittedData( path2, form );
	}

	Tester2.run = function( svg, form ){
		for( var x = 0; x<17; x++ ){
			for(var y = 0; y<25; y++ ){	
				drawPath( svg, 50, 20, x, y, form );
			}
		}
	}


	return Tester2;
})()