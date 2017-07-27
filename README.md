#README 

This project allows to draw a pattern in a shape for laser cutter. 

To use this project download the project and launch the dist/index.html file.
- First select the space you want between each part of the pattern on X axis and Y axis
- Then select the number of repetition you want
- Select the coordinate of the first pattern element you want
- Finally import your pattern element and your object form


This project is composed in different parts: 
- The first library is the intersectionLibrary.
  It's composed of different function able to return the diffrents intersection between two elements.
  The element are svg.js element and these function return an "intersectionData" object composed of a type 
  ("point" or "empty") and a value under the form of an list of intersection list's.
  
  The first function is "intersectionLineLine". It take two line under the form of a path ("M .. .. L .. ..").
  
  The second function is "intersectionEllipseLine". It take a line under the form of a path and an ellipse
  form.
  
  The third function is "intersectionBezierLine". It take a bezier curve under the form of a path
  ("M .. .. C .. .. .. .. .. ..") and a line under the form of a path.
  
  The fourth function is "intersectionBezierEllipse". It take a bezier curve under the form of a path and
  an ellipse. The solution is found by dichotomy methode.
  
  The fith function is "intersectionBezierBezier". It take two bezier curve under the form of path. The solution
  is also found by using the dichotomy methode.
  
  The last function is "intersectionPathPath". It take two path composed of line and bezier curve and select the
  good function to call depending on the diffrent parts.
  
- The second library is the splittingLibrary.
  It's composed of different function able to cut a path and return different new path depending on a control form.
  The first phase is there to separate the case where the form is a path and the one whee the form is an ellipse. 
  After doing so, it split the path in is specific differents part (line or bezier curve). Then it calls the second
  phase. 
  This phase depend on the nature of the specific part to split. It work as a recurcive function that call itself 
  if there is still intersection to treat.
  Under these two function there is three other smaller ones that treat the intersection data (named "cutting"), 
  split a line one one specific point (named "splittingLine") and split a bezier curve on one specific point 
  (named "splittingBezier").
