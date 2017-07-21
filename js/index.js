var index = 
(function() {

	var Index = {};

	var color = [ "chartreuse", "red", "blue", "green", "yellow", "indigo"  ]
	
	Index.loadLibrary = function( library ) {
		this.library = library;
	}
	//create blob used to get the svg file
	Index.createSVG = function( svg ) {
	  var blob = new Blob([svg.svg()], {type: 'image/svg+xml'});
	  var url = URL.createObjectURL(blob);
	  lien = document.getElementById( "download");
	  lien.setAttribute("href", url );
	}
	//draw all the determined pattern part inside the form on the final svg
	function drawSplittedData( path, form )  {
		var splittedData = Splitting.phase1( path, form, 0 );
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
	//translate the svg element to a standart shape to be readed by the script
	function drawPath( svg, X, Y, i, j, form, path, sX, sY ){
		//take care of the pattern part
		var command1 = '';
		var points1 = path.array();
		for( var k in points1.value ){
			if( points1.value[k][0] == "M" ){
				var text = 'M '+(((points1.value[k][1])+(sX*1))+(X*i))+' '+(((points1.value[k][2])+(sY*1))+(Y*j))
				var command1 = command1.concat(text);
			}else if( points1.value[k][0] == "C" ){
				var text = ' C '+(((points1.value[k][1])+(sX*1))+(X*i))+' '+(((points1.value[k][2])+(sY*1))+(Y*j))+' '+(((points1.value[k][3])+(sX*1))+(X*i))+' '+(((points1.value[k][4])+(sY*1))+(Y*j))+' '+(((points1.value[k][5])+(sX*1))+(X*i))+' '+(((points1.value[k][6])+(sY*1))+(Y*j))
				var command1 = command1.concat(text);
			}else if( points1.value[k][0] == "L" ){
				var text = ' L '+(((points1.value[k][1])+(sX*1))+(X*i))+' '+(((points1.value[k][2])+(sY*1))+(Y*j))
				var command1 = command1.concat(text);
			}else if( points1.value[k][0] == "Z" ){
				var Z = false;
				var element1 = svgOut.path(command1).stroke( { width : 0 } ).fill("none");
				//take care of the shape part that can be an ellipse form
				if( form.type == "path" ){
					var command2 = '';
					var points2 = form.array();
					for( var k in points2.value ){
						if( points2.value[k][0] == "M" ){
							var text = 'M '+(points2.value[k][1])+' '+(points2.value[k][2])
							var command2 = command2.concat(text);
						}else if( points2.value[k][0] == "C" ){
							var text = ' C '+(points2.value[k][1])+' '+(points2.value[k][2])+' '+(points2.value[k][3])+' '+(points2.value[k][4])+' '+(points2.value[k][5])+' '+(points2.value[k][6])
							var command2 = command2.concat(text);
						}else if( points2.value[k][0] == "L" ){
							var text = ' L '+(points2.value[k][1])+' '+(points2.value[k][2])
							var command2 = command2.concat(text);
						}else if( points2.value[k][0] == "Z" ){
							break
						}
					}
					var element2 = svgOut.path(command2).stroke( { width : 0 } ).fill("none");
				} else {
					var element2 = form
				}
			  drawSplittedData( element1, element2 );
			  command1='';
			}
			//if the pattern element is not closed then run the script one more time
			if( points1.value[points1.value.length-1][0] != "Z" ){
				var element1 = svgOut.path(command1).stroke( { width : 0 } ).fill("none");
				//take care of the shape part that can be an ellipse form
				if( form.type == "path" ){
					var command2 = '';
					var points2 = form.array();
					for( var k in points2.value ){
						if( points2.value[k][0] == "M" ){
							var text = 'M '+(points2.value[k][1])+' '+(points2.value[k][2])
							var command2 = command2.concat(text);
						}else if( points2.value[k][0] == "C" ){
							var text = ' C '+(points2.value[k][1])+' '+(points2.value[k][2])+' '+(points2.value[k][3])+' '+(points2.value[k][4])+' '+(points2.value[k][5])+' '+(points2.value[k][6])
							var command2 = command2.concat(text);
						}else if( points2.value[k][0] == "L" ){
							var text = ' L '+(points2.value[k][1])+' '+(points2.value[k][2])
							var command2 = command2.concat(text);
						}else if( points2.value[k][0] == "Z" ){
							break
						}
					}
					var element2 = svgOut.path(command2).stroke( { width : 0 } ).fill("none");
				} else {
					var element2 = form
				}
			  drawSplittedData( element1, element2 );
			}
		}
		
	}
	//launch the script for eatch element of the pattern
	Index.run = function( svg, form, path, X, Y, i, j, sX, sY ){
		for( var x = 0; x<i; x++ ){
			for(var y = 0; y<j; y++ ){	
				drawPath( svg, X, Y, x, y, form, path, sX, sY );
			}
		}
	}


	return Index;
})()