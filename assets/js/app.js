let touchPositionStartY = 0;
let touchPositionstartX = 0;
let currentPositionY;
let currentPositionX;
function getDegreesFromAtan(_oppOverAdjacent) {
  return Math.atan(_oppOverAdjacent) * (180/Math.PI) ;
}

document.getElementById('mh-client-review').addEventListener("touchmove", function(ev) {
  currentPositionY = ev.touches[0].clientY;
  currentPositionX = ev.touches[0].clientX;
  const diffX =  currentPositionX - touchPositionStartX
  const diffY = currentPositionY - touchPositionStartY 
  const oppOverAdjacent = diffY/diffX
  
  console.log('getTanFromDegrees', getDegreesFromAtan(oppOverAdjacent))
  if(Math.abs(getDegreesFromAtan(oppOverAdjacent)) >= 45) {
    
    return document.body.style.overflow = 'scroll';
  }
  ev.preventDefault();
  return document.body.style.overflow = 'hidden';
  
}, );

document.getElementById('mh-client-review').addEventListener("touchstart", function(ev) {
  touchPositionStartY = ev.touches[0].clientY;
  touchPositionStartX = ev.touches[0].clientX;
}, );

document.getElementById('mh-client-review').addEventListener("touchend", function() {
  document.body.style.overflow = 'scroll';
}, );

function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
