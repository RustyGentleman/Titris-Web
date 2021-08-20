var vw, vh, ratio
var correctRatio = 16/9
var canvas = document.getElementById("unity-canvas")
function Script(){
  console.log("Starting script.")
  Update();
  setInterval(Update, 1000)
}
function Update(){
  if (canvas == null){
    canvas = document.getElementById("unity-canvas")
    return
  }
  if (document.getElementById("unity-footer")) document.getElementById("unity-footer").remove();
  console.log("Updating.")
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  ratio = vw/vh
  if (ratio <= correctRatio){
    canvas.style.width = vw+"px"
    canvas.style.height = vw*(1/correctRatio)+"px"
  }
  else{
    canvas.style.height = vh+"px"
    canvas.style.width = vh*correctRatio+"px"
  }
}
