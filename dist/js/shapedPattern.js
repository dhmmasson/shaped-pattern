(function(){var intersectionLibrary={};var root=this;var previousModule=root.Intersection;if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=intersectionLibrary}exports.Intersection=intersectionLibrary}else{root.Intersection=intersectionLibrary}intersectionLibrary.noConflict=function(){root.Intersection=previousModule;return intersectionLibrary};var epsilon=1e-8;function IntersectionData(type,data){this.type=type;this.data=data}function insideInterval(a,end1,end2){return end1-epsilon<=a&&a<=end2+epsilon||end2-epsilon<=a&&a<=end1+epsilon}function inflexionPointBezier(bezier){var Ay=3*bezier.cubicY.a;var By=2*bezier.cubicY.b;var Cy=bezier.cubicY.c;var Ax=3*bezier.cubicX.a;var Bx=2*bezier.cubicX.b;var Cx=bezier.cubicX.c;var solutions=[];var tX,tY;if(Ay!=0&&By!=0){tY=quadraticResolution(Ay,By,Cy)}else if(Ay==0&&By!=0){tY=linearResolution(By,Cy)}if(Ax!=0&&Bx!=0){tX=quadraticResolution(Ax,Bx,Cx)}else if(Ax==0&&Bx!=0){tX=linearResolution(Bx,Cx)}var concatenation=Array.prototype.concat(tX,tY);for(var i=0;i<concatenation.length;i++){var t=concatenation[i];if(t!=-1&&t!=0&&t!=1){solutions.push(t)}}return solutions}function inflexionPointEllipse(ellipse){return[0,Math.PI/2,Math.PI,3*Math.PI/2,2*Math.PI]}function linearResolution(A,B){result=-B/A;if(result<-epsilon||result>1+epsilon){result=-1}return[result]}function quadraticResolution(A,B,C){var D=B*B-4*A*C;var results=[];if(D>0){results[0]=(-B-Math.sqrt(D))/(2*A);results[1]=(-B+Math.sqrt(D))/(2*A)}else if(D==0){results[0]=-B/2/A}for(var i in results){if(results[i]<-epsilon||results[i]>1+epsilon){results[i]=-1}}return results}function cubicResolution(A,B,C,D){var coefficient1=B/A;var coefficient2=C/A;var coefficient3=D/A;var D1=(3*coefficient2-Math.pow(coefficient1,2))/9;var D2=(9*coefficient1*coefficient2-27*coefficient3-2*Math.pow(coefficient1,3))/54;var D=Math.pow(D1,3)+Math.pow(D2,2);var results=[];if(D>=0){var solutionPlus=Math.sign(D2+Math.sqrt(D))*Math.pow(Math.abs(D2+Math.sqrt(D)),1/3);var solutionMoins=Math.sign(D2-Math.sqrt(D))*Math.pow(Math.abs(D2-Math.sqrt(D)),1/3);results[0]=-coefficient1/3+(solutionPlus+solutionMoins);results[1]=-coefficient1/3-(solutionPlus+solutionMoins)/2;var imaginary=Math.abs(Math.sqrt(3)*(solutionPlus-solutionMoins)/2);if(imaginary!=0){results[1]=-1}}else{var theta=Math.acos(D2/Math.sqrt(-Math.pow(D1,3)));results[0]=2*Math.sqrt(-D1)*Math.cos(theta/3)-coefficient1/3;results[1]=2*Math.sqrt(-D1)*Math.cos((theta+2*Math.PI)/3)-coefficient1/3;results[2]=2*Math.sqrt(-D1)*Math.cos((theta+4*Math.PI)/3)-coefficient1/3}for(var i=0;i<3;i++){if(results[i]<-epsilon||results[i]>1+epsilon){results[i]=-1}}return results}function ParametricCubic(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d}ParametricCubic.prototype.apply=function(t){return this.d+t*(this.c+t*(this.b+t*this.a))};function ParametricCos(u,a){this.u=u;this.a=a}ParametricCos.prototype.apply=function(t){return this.u+this.a*Math.cos(t)};function ParametricSin(v,b){this.v=v;this.b=b}ParametricSin.prototype.apply=function(t){return this.v+this.b*Math.sin(t)};function Bezier(x0,y0,x1,y1,x2,y2,x3,y3){var a=-y0+3*y1-3*y2+y3;var b=3*y0-6*y1+3*y2;var c=-3*y0+3*y1;var d=y0;this.cubicY=new ParametricCubic(a,b,c,d);a=-x0+3*x1-3*x2+x3;b=3*x0-6*x1+3*x2;c=-3*x0+3*x1;d=x0;this.cubicX=new ParametricCubic(a,b,c,d)}function Ellipse(a,b,u,v){this.parametricX=new ParametricCos(u,a);this.parametricY=new ParametricSin(v,b)}function BezierPoint(bezier,t){this.t=t;this.x=bezier.cubicX.apply(t);this.y=bezier.cubicY.apply(t)}function EllipsePoint(ellipse,t){this.t=t;this.x=ellipse.parametricX.apply(t);this.y=ellipse.parametricY.apply(t)}function distanceT(t1,t2){var x=t1.x-t2.x;var y=t2.y-t1.y;return x*x+y*y}function middlePoint(equation,p1,p2){return new p1.constructor(equation,(p1.t+p2.t)/2)}function findIntersectionByDichotomy(equationT,equationS,t1,t2,s1,s2){if(!insideInterval(t1.x,s1.x,s2.x)&&!insideInterval(t2.x,s1.x,s2.x)&&!insideInterval(s1.x,t1.x,t2.x)&&!insideInterval(s2.x,t1.x,t2.x)||!insideInterval(t1.y,s1.y,s2.y)&&!insideInterval(t2.y,s1.y,s2.y)&&!insideInterval(s1.y,t1.y,t2.y)&&!insideInterval(s2.y,t1.y,t2.y)){return[]}else{if(distanceT(t1,t2)<1e-13){return[[t1,t2,s1,s2]]}else{var middleT=middlePoint(equationT,t1,t2);var middleS=middlePoint(equationS,s1,s2);var r1=findIntersectionByDichotomy(equationT,equationS,t1,middleT,s1,middleS);var r2=findIntersectionByDichotomy(equationT,equationS,middleT,t2,s1,middleS);var r3=findIntersectionByDichotomy(equationT,equationS,t1,middleT,middleS,s2);var r4=findIntersectionByDichotomy(equationT,equationS,middleT,t2,middleS,s2);return Array.prototype.concat(r1,r2,r3,r4)}}}function ajouterSolutions(solutions,result){var intersection;for(var i=0;i<result.length;i++){intersection=result[i];var add=true;var solution;for(var j=0;j<solutions.length;j++){solution=solutions[j];if(Math.floor(1e4*intersection[0].x)==Math.floor(1e4*solution[0])&&Math.floor(1e4*intersection[0].y)==Math.floor(1e4*solution[1])){add=false}}if(add){solutions.push([intersection[0].x,intersection[0].y,intersection[0].t])}}return solutions}intersectionLibrary.intersectionLineLine=function(line1,line2){var coords1=line1.array();var coords2=line2.array();for(var i in coords1.value){if(coords1.value[i][0]=="L"){var x1=coords1.value[i-1][coords1.value[i-1].length-2];var y1=coords1.value[i-1][coords1.value[i-1].length-1];var x2=coords1.value[i][1];var y2=coords1.value[i][2]}}for(var j in coords2.value){if(coords2.value[j][0]=="L"){var x3=coords2.value[j-1][coords2.value[j-1].length-2];var y3=coords2.value[j-1][coords2.value[j-1].length-1];var x4=coords2.value[j][1];var y4=coords2.value[j][2]}}var quotient=(x1-x2)*(y3-y4)-(x3-x4)*(y1-y2);var solutionsOnX=((x1*y2-x2*y1)*(x3-x4)-(x3*y4-x4*y3)*(x1-x2))/quotient;var solutionOnY=((x1*y2-x2*y1)*(y3-y4)-(x3*y4-x4*y3)*(y1-y2))/quotient;if(x1==x2&&x1==x3&&x1==x4&&y1==y2&&y1==y3&&y1==y4){var intersectionData=new IntersectionData("point",[[x1,x1]])}else if(isFinite(solutionsOnX)&&insideInterval(solutionsOnX,x1,x2)&&insideInterval(solutionOnY,y1,y2)&&insideInterval(solutionsOnX,x3,x4)&&insideInterval(solutionOnY,y3,y4)){var intersectionData=new IntersectionData("point",[[solutionsOnX,solutionOnY]])}else{var intersectionData=new IntersectionData("empty",[[]])}return intersectionData};intersectionLibrary.intersectionEllipseLine=function(ellipse,line){var origineEllipseX=ellipse.cx();var origineEllipseY=ellipse.cy();var demiAxeX=ellipse.rx();var demiAxeY=ellipse.ry();var points=line.array();for(var i in points.value){if(points.value[i][0]=="L"){var x1=points.value[i-1][points.value[i-1].length-2];var y1=points.value[i-1][points.value[i-1].length-1];var x2=points.value[i][1];var y2=points.value[i][2]}}var solutions=[];if(x1==x2){var x1=x1;if(origineEllipseX-demiAxeX<=x1&&origineEllipseX+demiAxeX>=x1){var solution1=origineEllipseY+Math.sqrt(1-(x1-origineEllipseX)*(x1-origineEllipseX)/(demiAxeX*demiAxeX))*demiAxeY;var solution2=origineEllipseY+-Math.sqrt(1-(x1-origineEllipseX)*(x1-origineEllipseX)/(demiAxeX*demiAxeX))*demiAxeY;if(solution1==solution2){if(isFinite(solution1)&&insideInterval(solution1,y1,y2)){solutions=[[x1,solution1]]}}else{var solutionOnY=[solution2,solution1];for(var o in solutionOnY){if(isFinite(solutionOnY[o])&&insideInterval(solutionOnY[o],y1,y2)){solutions.push([x1,solutionOnY[o]])}}}}}else{var segmentSlope=(y2-y1)/(x2-x1);var segmentOriginOrdinate=y1-x1*segmentSlope;var invDemiX2=1/(demiAxeX*demiAxeX);var invDemiY2=1/(demiAxeY*demiAxeY);var i=invDemiX2+invDemiY2*segmentSlope*segmentSlope;var j=-2*invDemiX2*origineEllipseX+invDemiY2*(2*segmentSlope*segmentOriginOrdinate-2*segmentSlope*origineEllipseY);var k=invDemiX2*origineEllipseX*origineEllipseX+invDemiY2*(segmentOriginOrdinate*segmentOriginOrdinate-2*segmentOriginOrdinate*origineEllipseY+origineEllipseY*origineEllipseY)-1;var delta=j*j-4*i*k;if(delta>0){var solutionsOnX=[(-j-Math.sqrt(j*j-4*i*k))/(2*i),(-j+Math.sqrt(j*j-4*i*k))/(2*i)];for(var o in solutionsOnX){if(isFinite(solutionsOnX[o])&&insideInterval(solutionsOnX[o],x1,x2)){var solutionOnY=segmentSlope*solutionsOnX[o]+segmentOriginOrdinate;if(isFinite(solutionOnY)&&insideInterval(solutionOnY,y1,y2)){solutions.push([solutionsOnX[o],solutionOnY])}}}}else if(delta==0){var solutionsOnX=-j/(2*i);if(isFinite(solutionsOnX)&&insideInterval(solutionsOnX,x1,x2)){var solutionOnY=segmentSlope*solutionsOnX+segmentOriginOrdinate;if(isFinite(solutionOnY)&&insideInterval(solutionOnY,y1,y2)){solutions=[[solutionsOnX,solutionOnY]]}}}}if(solutions==[]){var intersectionData=new IntersectionData("empty",[[]])}else{var intersectionData=new IntersectionData("point",solutions)}return intersectionData};intersectionLibrary.intersectionBezierLine=function(path,line){var coords=line.array();var points=path.array();for(var i in coords.value){if(coords.value[i][0]=="L"){var x1=coords.value[i-1][coords.value[i-1].length-2];var y1=coords.value[i-1][coords.value[i-1].length-1];var x2=coords.value[i][1];var y2=coords.value[i][2]}}var Xp0;var Yp0;var Xp1;var Yp1;var Xp2;var Yp2;var Xp3;var Yp3;for(i in points.value){if(points.value[i][0]=="C"){Xp0=points.value[i-1][points.value[i-1].length-2];Yp0=points.value[i-1][points.value[i-1].length-1];Xp1=points.value[i][1];Yp1=points.value[i][2];Xp2=points.value[i][3];Yp2=points.value[i][4];Xp3=points.value[i][5];Yp3=points.value[i][6]}}var Ay=-Yp0+3*Yp1-3*Yp2+Yp3;var By=3*Yp0-6*Yp1+3*Yp2;var Cy=-3*Yp0+3*Yp1;var Ax=-Xp0+3*Xp1-3*Xp2+Xp3;var Bx=3*Xp0-6*Xp1+3*Xp2;var Cx=-3*Xp0+3*Xp1;var Ycoefficient=x1-x2;var Xcoefficient=y2-y1;var constantCoefficient=x1*(y1-y2)+y1*(x2-x1);if(x1==x2){Ycoefficient=0;Xcoefficient=-1;constantCoefficient=x1}else if(y1==y2){Ycoefficient=-1;Xcoefficient=0;constantCoefficient=y1}var A=Ycoefficient*Ay+Xcoefficient*Ax;var B=Ycoefficient*By+Xcoefficient*Bx;var C=Ycoefficient*Cy+Xcoefficient*Cx;var D=Ycoefficient*Yp0+Xcoefficient*Xp0+constantCoefficient;var results=null;if(A==0){if(B==0){results=linearResolution(C,D)}else{results=quadraticResolution(B,C,D)}}else{results=cubicResolution(A,B,C,D)}var solution=[];for(i in results){if(results[i]!=-1){var solutionOnX=results[i]*results[i]*results[i]*Ax+results[i]*results[i]*Bx+results[i]*Cx+Xp0;var solutionOnY=results[i]*results[i]*results[i]*Ay+results[i]*results[i]*By+results[i]*Cy+Yp0;for(j in solution){if(solution[j][0]==solutionOnX&&solution[j][1]==solutionOnY){solutionOnX=x2+1}}if(insideInterval(solutionOnX,x1,x2)&&insideInterval(solutionOnY,y1,y2)){solution.push([solutionOnX,solutionOnY,results[i]])}}}if(solution.length!=0){var intersectionData=new IntersectionData("point",solution)}else{var intersectionData=new IntersectionData("empty",[[]])}return intersectionData};intersectionLibrary.intersectionBezierEllipse=function(path,ellipse){var points1=path.array();var Xp0;var Yp0;var Xp1;var Yp1;var Xp2;var Yp2;var Xp3;var Yp3;for(i in points1.value){if(points1.value[i][0]=="C"){Xp0=points1.value[i-1][points1.value[i-1].length-2];Yp0=points1.value[i-1][points1.value[i-1].length-1];Xp1=points1.value[i][1];Yp1=points1.value[i][2];Xp2=points1.value[i][3];Yp2=points1.value[i][4];Xp3=points1.value[i][5];Yp3=points1.value[i][6]}}var origineEllipseX=ellipse.cx();var origineEllipseY=ellipse.cy();var demiAxeX=ellipse.rx();var demiAxeY=ellipse.ry();bezier=new Bezier(Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3);ellipse=new Ellipse(demiAxeX,demiAxeY,origineEllipseX,origineEllipseY);p1=new BezierPoint(bezier,0);p2=new BezierPoint(bezier,1);p3=new EllipsePoint(ellipse,0);p4=new EllipsePoint(ellipse,2*Math.PI);inflexionPoints1=inflexionPointBezier(bezier);inflexionPoints2=inflexionPointEllipse(ellipse);solutions=[];if(inflexionPoints1.length==0){for(var i=1;i<inflexionPoints2.length;i++){var p3=new EllipsePoint(ellipse,inflexionPoints2[i-1]);var p4=new EllipsePoint(ellipse,inflexionPoints2[i]);var result=findIntersectionByDichotomy(bezier,ellipse,p1,p2,p3,p4);solutions=ajouterSolutions(solutions,result)}}else{inflexionPoints1.push(0,1);inflexionPoints1.sort(function(a,b){return a>b});for(var i=1;i<inflexionPoints1.length;i++){for(var j=1;j<inflexionPoints2.length;j++){var p1=new BezierPoint(bezier,inflexionPoints1[i-1]);var p2=new BezierPoint(bezier,inflexionPoints1[i]);var p3=new EllipsePoint(ellipse,inflexionPoints2[j-1]);var p4=new EllipsePoint(ellipse,inflexionPoints2[j]);var result=findIntersectionByDichotomy(bezier,ellipse,p1,p2,p3,p4);solutions=ajouterSolutions(solutions,result)}}}if(solutions.length!=0){var intersectionData=new IntersectionData("point",solutions)}else{var intersectionData=new IntersectionData("empty",[[]])}return intersectionData};intersectionLibrary.intersectionBezierBezier=function(path1,path2){var points1=path1.array();var Xp0;var Yp0;var Xp1;var Yp1;var Xp2;var Yp2;var Xp3;var Yp3;for(i in points1.value){if(points1.value[i][0]=="C"){Xp0=points1.value[i-1][points1.value[i-1].length-2];Yp0=points1.value[i-1][points1.value[i-1].length-1];Xp1=points1.value[i][1];Yp1=points1.value[i][2];Xp2=points1.value[i][3];Yp2=points1.value[i][4];Xp3=points1.value[i][5];Yp3=points1.value[i][6]}}var points2=path2.array();var Xp4;var Yp4;var Xp5;var Yp5;var Xp6;var Yp6;var Xp7;var Yp7;for(i in points2.value){if(points2.value[i][0]=="C"){Xp4=points2.value[i-1][points2.value[i-1].length-2];Yp4=points2.value[i-1][points2.value[i-1].length-1];Xp5=points2.value[i][1];Yp5=points2.value[i][2];Xp6=points2.value[i][3];Yp6=points2.value[i][4];Xp7=points2.value[i][5];Yp7=points2.value[i][6]}}bezier1=new Bezier(Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3);bezier2=new Bezier(Xp4,Yp4,Xp5,Yp5,Xp6,Yp6,Xp7,Yp7);p1=new BezierPoint(bezier1,0);p2=new BezierPoint(bezier1,1);p3=new BezierPoint(bezier2,0);p4=new BezierPoint(bezier2,1);inflexionPoints1=inflexionPointBezier(bezier1);inflexionPoints2=inflexionPointBezier(bezier2);var solutions=[];if(inflexionPoints1.length==0&&inflexionPoints2.length==0){var result=findIntersectionByDichotomy(bezier1,bezier2,p1,p2,p3,p4);solutions=ajouterSolutions(solutions,result)}else if(inflexionPoints2.length==0){inflexionPoints1.push(0,1);inflexionPoints1.sort(function(a,b){return a>b});for(var i=1;i<inflexionPoints1.length;i++){var p1=new BezierPoint(bezier1,inflexionPoints1[i-1]);var p2=new BezierPoint(bezier1,inflexionPoints1[i]);var result=findIntersectionByDichotomy(bezier1,bezier2,p1,p2,p3,p4);solutions=ajouterSolutions(solutions,result)}}else if(inflexionPoints1.length==0){inflexionPoints2.push(0,1);inflexionPoints2.sort(function(a,b){return a>b});for(var i=1;i<inflexionPoints2.length;i++){var p3=new BezierPoint(bezier2,inflexionPoints2[i-1]);var p4=new BezierPoint(bezier2,inflexionPoints2[i]);var result=findIntersectionByDichotomy(bezier1,bezier2,p1,p2,p3,p4);solutions=ajouterSolutions(solutions,result)}}else{inflexionPoints1.push(0,1);inflexionPoints2.push(0,1);inflexionPoints1.sort(function(a,b){return a>b});inflexionPoints2.sort(function(a,b){return a>b});for(var i=1;i<inflexionPoints1.length;i++){for(var j=1;j<inflexionPoints2.length;j++){var p1=new BezierPoint(bezier1,inflexionPoints1[i-1]);var p2=new BezierPoint(bezier1,inflexionPoints1[i]);var p3=new BezierPoint(bezier2,inflexionPoints2[j-1]);var p4=new BezierPoint(bezier2,inflexionPoints2[j]);var result=findIntersectionByDichotomy(bezier1,bezier2,p1,p2,p3,p4);solutions=ajouterSolutions(solutions,result)}}}if(solutions.length!=0){var intersectionData=new IntersectionData("point",solutions)}else{var intersectionData=new IntersectionData("empty",[[]])}return intersectionData};intersectionLibrary.intersectionPathPath=function(path1,path2){var solution=[];var points1=path1.array();var Xp0;var Yp0;var Xp1;var Yp1;var Xp2;var Yp2;var Xp3;var Yp3;for(i in points1.value){if(points1.value[i][0]=="C"){Xp0=points1.value[i-1][points1.value[i-1].length-2];Yp0=points1.value[i-1][points1.value[i-1].length-1];Xp1=points1.value[i][1];Yp1=points1.value[i][2];Xp2=points1.value[i][3];Yp2=points1.value[i][4];Xp3=points1.value[i][5];Yp3=points1.value[i][6];var path11=svgOut.path("M "+Xp0+" "+Yp0+" C "+Xp1+" "+Yp1+" "+Xp2+" "+Yp2+" "+Xp3+" "+Yp3).stroke({width:0,color:"hsla(0,100%,50%,0.5)"}).fill("none");var points2=path2.array();var Xp4;var Yp4;var Xp5;var Yp5;var Xp6;var Yp6;var Xp7;var Yp7;for(j in points2.value){if(points2.value[j][0]=="C"){Xp4=points2.value[j-1][points2.value[j-1].length-2];Yp4=points2.value[j-1][points2.value[j-1].length-1];Xp5=points2.value[j][1];Yp5=points2.value[j][2];Xp6=points2.value[j][3];Yp6=points2.value[j][4];Xp7=points2.value[j][5];Yp7=points2.value[j][6];var path22=svgOut.path("M "+Xp4+" "+Yp4+" C "+Xp5+" "+Yp5+" "+Xp6+" "+Yp6+" "+Xp7+" "+Yp7).stroke({width:0,color:"hsla(120,100%,50%,0.5)"}).fill("none");var intersection=intersectionLibrary.intersectionBezierBezier(path11,path22);if(intersection.type!="empty"){for(var a=0;a<intersection.data.length;a++){solution.push(intersection.data[a])}}}else if(points2.value[j][0]=="L"){Xp4=points2.value[j-1][points2.value[j-1].length-2];Yp4=points2.value[j-1][points2.value[j-1].length-1];Xp5=points2.value[j][1];Yp5=points2.value[j][2];var path22=svgOut.path("M "+Xp4+" "+Yp4+" L "+Xp5+" "+Yp5).stroke({width:0,color:"hsla(240,100%,50%,0.5)"}).fill("none");var intersection=intersectionLibrary.intersectionBezierLine(path11,path22);if(intersection.type!="empty"){for(var a=0;a<intersection.data.length;a++){solution.push(intersection.data[a])}}}}}else if(points1.value[i][0]=="L"){Xp0=points1.value[i-1][points1.value[i-1].length-2];Yp0=points1.value[i-1][points1.value[i-1].length-1];Xp1=points1.value[i][1];Yp1=points1.value[i][2];var path11=svgOut.path("M "+Xp0+" "+Yp0+" L "+Xp1+" "+Yp1).stroke({width:0,color:"hsla(50,100%,50%,0.5)"}).fill("none");var points2=path2.array();var Xp4;var Yp4;var Xp5;var Yp5;var Xp6;var Yp6;var Xp7;var Yp7;for(j in points2.value){if(points2.value[j][0]=="C"){Xp4=points2.value[j-1][points2.value[j-1].length-2];Yp4=points2.value[j-1][points2.value[j-1].length-1];Xp5=points2.value[j][1];Yp5=points2.value[j][2];Xp6=points2.value[j][3];Yp6=points2.value[j][4];Xp7=points2.value[j][5];Yp7=points2.value[j][6];var path22=svgOut.path("M "+Xp4+" "+Yp4+" C "+Xp5+" "+Yp5+" "+Xp6+" "+Yp6+" "+Xp7+" "+Yp7).stroke({width:0,color:"hsla(170,100%,50%,0.5)"}).fill("none");var intersection=intersectionLibrary.intersectionBezierLine(path22,path11);if(intersection.type!="empty"){for(var a=0;a<intersection.data.length;a++){solution.push(intersection.data[a])}}}else if(points2.value[j][0]=="L"){Xp4=points2.value[j-1][points2.value[j-1].length-2];Yp4=points2.value[j-1][points2.value[j-1].length-1];Xp5=points2.value[j][1];Yp5=points2.value[j][2];var path22=svgOut.path("M "+Xp4+" "+Yp4+" L "+Xp5+" "+Yp5).stroke({width:0}).fill("none");var intersection=intersectionLibrary.intersectionLineLine(path11,path22);if(intersection.type!="empty"){for(var a=0;a<intersection.data.length;a++){solution.push(intersection.data[a])}}}}}}newSolution=[];var intersection;for(var indexSol=0;indexSol<solution.length;indexSol++){intersection=solution[indexSol];var add=true;var sol;for(var indexNewSolution=0;indexNewSolution<newSolution.length;indexNewSolution++){sol=newSolution[indexNewSolution];if(intersection.length==2){if(Math.floor(1e4*intersection[0])==Math.floor(1e4*sol[0])&&Math.floor(1e4*intersection[1])==Math.floor(1e4*sol[1])){add=false}}else{if(Math.floor(1e4*intersection[2])==Math.floor(1e4*sol[2])){add=false}}}if(add){if(intersection.length==2){newSolution.push([intersection[0],intersection[1]])}else{newSolution.push([intersection[0],intersection[1],intersection[2]])}}}if(newSolution.length!=0){var intersectionData=new IntersectionData("point",newSolution)}else{var intersectionData=new IntersectionData("empty",[[]])}return intersectionData};return intersectionLibrary}).call(this);(function(){var root=this;var previousModule=root.Splitting;var splittingLibrary={};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=splittingLibrary}exports.Splitting=splittingLibrary}else{root.Splitting=splittingLibrary}splittingLibrary.noConflict=function(){root.Splitting=previousModule;return splittingLibrary};var epsilon=1e-8;function SplittedData(value,type){this.value=value;this.type=type}function insideInterval(a,end1,end2){return end1-epsilon<=a&&a<=end2+epsilon||end2-epsilon<=a&&a<=end1+epsilon}function extremums(list){list.sort(function(a,b){return a>b});return[list[0],list[list.length-1]]}function isEven(value){if(value%2==0){return true}else{return false}}splittingLibrary.phase1=function(path,form,j){var solutions=[];var splittedData=[];if(form.type=="ellipse"){var points=path.array();for(var i in points.value){if(points.value[i][0]=="C"){var Xp0=points.value[i-1][points.value[i-1].length-2];var Yp0=points.value[i-1][points.value[i-1].length-1];var Xp1=points.value[i][1];var Yp1=points.value[i][2];var Xp2=points.value[i][3];var Yp2=points.value[i][4];var Xp3=points.value[i][5];var Yp3=points.value[i][6];var path=svgOut.path("M "+Xp0+" "+Yp0+" C "+Xp1+" "+Yp1+" "+Xp2+" "+Yp2+" "+Xp3+" "+Yp3).stroke({width:0}).fill("none");var intersectionData=Intersection.intersectionBezierEllipse(path,form);var solution=phase2Bezier([Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3],form,j,intersectionData);var intersectionNumber=splittingLibrary.cutting(Xp0,Yp0,form);var finalSolution=[];for(var u in solution){if(isEven(intersectionNumber)){if(!isEven(u)){finalSolution.push(solution[u])}}else{if(isEven(u)){finalSolution.push(solution[u])}}}var splittedData=new SplittedData([finalSolution],"b");solutions.push(splittedData)}else if(points.value[i][0]=="L"){var Xp0=points.value[i-1][points.value[i-1].length-2];var Yp0=points.value[i-1][points.value[i-1].length-1];var Xp1=points.value[i][1];var Yp1=points.value[i][2];var path=svgOut.path("M "+Xp0+" "+Yp0+" L "+Xp1+" "+Yp1).stroke({width:0}).fill("none");var intersectionData=Intersection.intersectionEllipseLine(path,form);var solution=phase2Line([Xp0,Yp0,Xp1,Yp1],form,j,intersectionData);var intersectionNumber=splittingLibrary.cutting(Xp0,Yp0,form);var finalSolution=[];for(var u in solution){if(isEven(intersectionNumber)){if(!isEven(u)){finalSolution.push(solution[u])}}else{if(isEven(u)){finalSolution.push(solution[u])}}}var splittedData=new SplittedData([finalSolution],"l");solutions.push(splittedData)}}}else if(form.type=="path"){var points=path.array();for(var i in points.value){if(points.value[i][0]=="C"){var Xp0=points.value[i-1][points.value[i-1].length-2];var Yp0=points.value[i-1][points.value[i-1].length-1];var Xp1=points.value[i][1];var Yp1=points.value[i][2];var Xp2=points.value[i][3];var Yp2=points.value[i][4];var Xp3=points.value[i][5];var Yp3=points.value[i][6];var path=svgOut.path("M "+Xp0+" "+Yp0+" C "+Xp1+" "+Yp1+" "+Xp2+" "+Yp2+" "+Xp3+" "+Yp3).stroke({width:0}).fill("none");var intersectionData=Intersection.intersectionPathPath(path,form);var solution=phase2Bezier([Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3],form,j,intersectionData);var corner=false;var formPoints=form.array();var val;for(var indexValue=0;indexValue<formPoints.value.length;indexValue++){val=formPoints.value[indexValue];if(val[val.length-2]==Xp0&&val[val.length-1]==Yp0){corner=true}}if(corner){var intersectionNumber=splittingLibrary.cutting(Xp3,Yp3,form)}else{var intersectionNumber=splittingLibrary.cutting(Xp0,Yp0,form)}var finalSolution=[];for(var u in solution){if(isEven(intersectionNumber)){if(!isEven(u)){finalSolution.push(solution[u])}}else{if(isEven(u)){finalSolution.push(solution[u])}}}var splittedData=new SplittedData([finalSolution],"b");solutions.push(splittedData)}else if(points.value[i][0]=="L"){var Xp0=points.value[i-1][points.value[i-1].length-2];var Yp0=points.value[i-1][points.value[i-1].length-1];var Xp1=points.value[i][1];var Yp1=points.value[i][2];var path=svgOut.path("M "+Xp0+" "+Yp0+" L "+Xp1+" "+Yp1).stroke({width:0}).fill("none");var intersectionData=Intersection.intersectionPathPath(path,form);var solution=phase2Line([Xp0,Yp0,Xp1,Yp1],form,j,intersectionData);var corner=false;var formPoints=form.array();var val;for(var indexValue=0;indexValue<formPoints.value.length;indexValue++){val=formPoints.value[indexValue];if(val[val.length-2]==Xp0&&val[val.length-1]==Yp0){corner=true}}if(corner){var intersectionNumber=splittingLibrary.cutting(Xp1,Yp1,form)}else{var intersectionNumber=splittingLibrary.cutting(Xp0,Yp0,form)}var finalSolution=[];for(var u in solution){if(isEven(intersectionNumber)){if(!isEven(u)){finalSolution.push(solution[u])}}else{if(isEven(u)){finalSolution.push(solution[u])}}}var splittedData=new SplittedData([finalSolution],"l");solutions.push(splittedData)}}}return solutions};function phase2Bezier(path,form,j,intersectionData){var Xp0=path[0];var Yp0=path[1];var Xp1=path[2];var Yp1=path[3];var Xp2=path[4];var Yp2=path[5];var Xp3=path[6];var Yp3=path[7];var newIntersectionData=[];intersectionData.data.sort(function(a,b){return a[2]>b[2]});var path=svgOut.path("M "+Xp0+" "+Yp0+" C "+Xp1+" "+Yp1+" "+Xp2+" "+Yp2+" "+Xp3+" "+Yp3).stroke({width:0}).fill("none");if(form.type=="ellipse"){var currentIntersectionData=Intersection.intersectionBezierEllipse(path,form)}else if(form.type=="path"){var currentIntersectionData=Intersection.intersectionPathPath(path,form)}for(var k in currentIntersectionData.data){if(currentIntersectionData.data[k][2]>1e-5&&currentIntersectionData.data[k][2]<.99999){newIntersectionData.push(currentIntersectionData.data[k])}}newIntersectionData.sort(function(a,b){return a[2]>b[2]});if(newIntersectionData.length>1&&j<intersectionData.data.length){var part1=splittingBezier([Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3],newIntersectionData[0])[0];var part2=splittingBezier([Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3],newIntersectionData[0])[1];j=j+1;var s=phase2Bezier(part1,form,j,intersectionData);var t=phase2Bezier(part2,form,j,intersectionData);return Array.prototype.concat(s,t)}else if(newIntersectionData.length!=0&&j<intersectionData.data.length){return splittingBezier([Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3],newIntersectionData[0])}else{return[[Xp0,Yp0,Xp1,Yp1,Xp2,Yp2,Xp3,Yp3]]}}function phase2Line(path,form,j,intersectionData){var Xp0=path[0];var Yp0=path[1];var Xp1=path[2];var Yp1=path[3];var newIntersectionData=[];if(Xp0!=Xp1){intersectionData.data.sort(function(a,b){return a[0]>b[0]});var path=svgOut.path("M "+Xp0+" "+Yp0+" L "+Xp1+" "+Yp1).stroke({width:0}).fill("none");if(form.type=="ellipse"){var currentIntersectionData=Intersection.intersectionEllipseLine(form,path)}else if(form.type=="path"){var currentIntersectionData=Intersection.intersectionPathPath(path,form)}for(var k in currentIntersectionData.data){if(!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp0)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp0))&&!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp1)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp1))&&!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp1)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp1))&&!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp0)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp0))){newIntersectionData.push(currentIntersectionData.data[k])}}newIntersectionData.sort(function(a,b){return a[0]>b[0]})}else{intersectionData.data.sort(function(a,b){return a[1]>b[1]});var path=svgOut.path("M "+Xp0+" "+Yp0+" L "+Xp1+" "+Yp1).stroke({width:0}).fill("none");if(form.type=="ellipse"){var currentIntersectionData=Intersection.intersectionEllipseLine(form,path)}else if(form.type=="path"){var currentIntersectionData=Intersection.intersectionPathPath(path,form)}for(var k in currentIntersectionData.data){if(!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp0)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp0))&&!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp1)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp1))&&!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp1)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp1))&&!(Math.floor(1e4*currentIntersectionData.data[k][0])==Math.floor(1e4*Xp0)&&Math.floor(1e4*currentIntersectionData.data[k][1])==Math.floor(1e4*Yp0))){newIntersectionData.push(currentIntersectionData.data[k])}}newIntersectionData.sort(function(a,b){return a[1]>b[1]})}if(intersectionData.type=="empty"){return[[Xp0,Yp0,Xp1,Yp1]]}else if(newIntersectionData.length>1&&j<intersectionData.data.length){var part1=splittingLine([Xp0,Yp0,Xp1,Yp1],newIntersectionData[0])[0];var part2=splittingLine([Xp0,Yp0,Xp1,Yp1],newIntersectionData[0])[1];j=j+1;var s=phase2Line(part1,form,j,intersectionData);var t=phase2Line(part2,form,j,intersectionData);return Array.prototype.concat(s,t)}else if(newIntersectionData.length!=0&&j<intersectionData.data.length){return splittingLine([Xp0,Yp0,Xp1,Yp1],newIntersectionData[0])}else{return[[Xp0,Yp0,Xp1,Yp1]]}}function splittingLine(line,point){if(Math.floor(1e4*point[0])==Math.floor(1e4*line[0])&&Math.floor(1e4*point[0])==Math.floor(1e4*line[2])&&Math.floor(1e4*point[1])==Math.floor(1e4*line[1])&&Math.floor(1e4*point[1])==Math.floor(1e4*line[3])){var solution=line}else{var line1=[line[0],line[1],point[0],point[1]];var line2=[point[0],point[1],line[2],line[3]];var solution=[line1,line2]}return solution}function splittingBezier(bezier,point){var x1=bezier[0];var y1=bezier[1];var x2=bezier[2];var y2=bezier[3];var x3=bezier[4];var y3=bezier[5];var x4=bezier[6];var y4=bezier[7];var t=point[2];if(Math.floor(1e4*point[0])==Math.floor(1e4*x1)&&Math.floor(1e4*point[0])==Math.floor(1e4*x4)&&Math.floor(1e4*point[1])==Math.floor(1e4*y1)&&Math.floor(1e4*point[1])==Math.floor(1e4*y4)){var solution=[x1,y1,x2,y2,x3,y3,x4,y4]}else{var x12=(x2-x1)*t+x1;var y12=(y2-y1)*t+y1;var x23=(x3-x2)*t+x2;var y23=(y3-y2)*t+y2;var x34=(x4-x3)*t+x3;var y34=(y4-y3)*t+y3;var x123=(x23-x12)*t+x12;var y123=(y23-y12)*t+y12;var x234=(x34-x23)*t+x23;var y234=(y34-y23)*t+y23;var x1234=(x234-x123)*t+x123;var y1234=(y234-y123)*t+y123;bezier1=[x1,y1,x12,y12,x123,y123,x1234,y1234];bezier2=[x1234,y1234,x234,y234,x34,y34,x4,y4];var solution=[bezier1,bezier2]}return solution}splittingLibrary.cutting=function(Xp,Yp,form){var x=-10;var y=-10;var path=svgOut.path("M "+x+" "+y+" L "+Xp+" "+Yp).stroke({width:0}).fill("none");if(form.type=="ellipse"){var intersectionData=Intersection.intersectionEllipseLine(form,path)}else if(form.type=="path"){var intersectionData=Intersection.intersectionPathPath(path,form)}if(intersectionData.type=="empty"){return 0}else{return intersectionData.data.length}}}).call(this);(function(){var Index={};var root=this;var previousModule=root.shapedPattern;if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=Index}exports.shapedPattern=Index}else{root.shapedPattern=Index}Index.noConflict=function(){root.shapedPattern=previousModule;return Index};var color=["chartreuse","red","blue","green","yellow","indigo"];Index.createSVG=function(svg){var blob=new Blob([svg.svg()],{type:"image/svg+xml"});var url=URL.createObjectURL(blob);lien=document.getElementById("download");lien.setAttribute("href",url)};function drawSplittedData(path,form){var splittedData=Splitting.phase1(path,form,0);for(var i in splittedData){if(splittedData[i].type=="l"){for(var j in splittedData[i].value[0]){var part=splittedData[i].value[0][j];svg.path("M "+part[0]+" "+part[1]+" L "+part[2]+" "+part[3]).stroke({width:1}).fill("none")}}else if(splittedData[i].type=="b"){for(var j in splittedData[i].value[0]){var part=splittedData[i].value[0][j];svg.path("M "+part[0]+" "+part[1]+" C "+part[2]+" "+part[3]+" "+part[4]+" "+part[5]+" "+part[6]+" "+part[7]).stroke({width:1}).fill("none")}}}}function drawPath(svg,X,Y,i,j,form,path,sX,sY){var command1="";var points1=path.array();for(var k in points1.value){if(points1.value[k][0]=="M"){var text="M "+(points1.value[k][1]+sX*1+X*i)+" "+(points1.value[k][2]+sY*1+Y*j);var command1=command1.concat(text)}else if(points1.value[k][0]=="C"){var text=" C "+(points1.value[k][1]+sX*1+X*i)+" "+(points1.value[k][2]+sY*1+Y*j)+" "+(points1.value[k][3]+sX*1+X*i)+" "+(points1.value[k][4]+sY*1+Y*j)+" "+(points1.value[k][5]+sX*1+X*i)+" "+(points1.value[k][6]+sY*1+Y*j);var command1=command1.concat(text)}else if(points1.value[k][0]=="L"){var text=" L "+(points1.value[k][1]+sX*1+X*i)+" "+(points1.value[k][2]+sY*1+Y*j);var command1=command1.concat(text)}else if(points1.value[k][0]=="Z"){var element1=svgOut.path(command1).stroke({width:0}).fill("none");if(form.type=="path"){var command2="";var points2=form.array();for(var k in points2.value){if(points2.value[k][0]=="M"){var text="M "+points2.value[k][1]+" "+points2.value[k][2];var command2=command2.concat(text)}else if(points2.value[k][0]=="C"){var text=" C "+points2.value[k][1]+" "+points2.value[k][2]+" "+points2.value[k][3]+" "+points2.value[k][4]+" "+points2.value[k][5]+" "+points2.value[k][6];var command2=command2.concat(text)}else if(points2.value[k][0]=="L"){var text=" L "+points2.value[k][1]+" "+points2.value[k][2];var command2=command2.concat(text)}else if(points2.value[k][0]=="Z"){break}}var element2=svgOut.path(command2).stroke({width:0}).fill("none")}else{var element2=form}drawSplittedData(element1,element2);command1=""}if(points1.value[points1.value.length-1][0]!="Z"){var element1=svgOut.path(command1).stroke({width:0}).fill("none");if(form.type=="path"){var command2="";var points2=form.array();for(var k in points2.value){if(points2.value[k][0]=="M"){var text="M "+points2.value[k][1]+" "+points2.value[k][2];var command2=command2.concat(text)}else if(points2.value[k][0]=="C"){var text=" C "+points2.value[k][1]+" "+points2.value[k][2]+" "+points2.value[k][3]+" "+points2.value[k][4]+" "+points2.value[k][5]+" "+points2.value[k][6];var command2=command2.concat(text)}else if(points2.value[k][0]=="L"){var text=" L "+points2.value[k][1]+" "+points2.value[k][2];var command2=command2.concat(text)}else if(points2.value[k][0]=="Z"){break}}var element2=svgOut.path(command2).stroke({width:0}).fill("none")}else{var element2=form}drawSplittedData(element1,element2)}}}Index.run=function(svg,form,path,X,Y,i,j,sX,sY){for(var x=0;x<i;x++){for(var y=0;y<j;y++){drawPath(svg,X,Y,x,y,form,path,sX,sY)}}};return Index}).call(this);