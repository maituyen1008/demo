var wrap = document.getElementById("wrap");
var begX, begY, prevX, prevY, newX, newY, dv;
newX=33; newY=67;
document.onmousedown = beginD;
document.onmouseup = stopD;
/*document.touchstart = beginD;
document.touchend = stopD;*/

function beginD(e){
  dv = wrap.parentNode.offsetWidth >> 7;
  begX = e.clientX/(dv!=0?dv:dv=1);
  begY = e.clientY/dv;
  prevX = newX;
  prevY = newY;
  drag = true;
  document.onmousemove = letsD;
  /*document.ontouchmove = letsD;*/
  return false;
}

function letsD(e) {
  if (!drag) return;
  newX = (prevY > 0 && prevY < 180) ? (prevX - (e.clientX/dv) + begX) : (prevX + (e.clientX/dv) - begX);
  newY = prevY - (e.clientY /dv) + begY;
  wrap.style.transform = "rotateX(" + newY + "deg) rotateZ(" + newX + "deg)";
  return false;
}

function stopD() {
  drag = false;
  rotReset();
}

function rotReset() {
  if (newX >= 360 || newX < 0) newX -= 360 * Math.floor(newX / 360);
  if (newY >= 360 || newY < 0) newY -= 360 * Math.floor(newY / 360);
  wrap.style.transform = "rotateX(" + newY + "deg) rotateZ(" + newX + "deg)";
}

wrap.style.transform = "rotateX(" + (newY += .11) + "deg) rotateZ(" + (newX += .11) + "deg)"; //flicker preventer