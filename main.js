
$(document).ready(()=>{
    
    console.log("START EXECUTE ENGINE 3D")
    //3D ENGINE
    let ENGINE = new Engine3D()
    let vectors = ENGINE.updateObjectVertexPositions(0,0,0,0)
    
    //RENDER
    let canvas=new RenderCanvas()
    canvas.initCanvas()
    canvas.updateCanvas(vectors)


    document.onkeydown = function (event) {
        let angleX=0
        let angleY=0
        let posX=0
        let posY=0
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
         switch (event.keyCode) {
            case 37:
               console.log("Left key is pressed.");
               posX=-3
               break;
            case 38:
               console.log("Up key is pressed.");
               posY=3
               break;
            case 39:
               console.log("Right key is pressed.");
               posX=3
               break;
            case 40:
               console.log("Down key is pressed.");
               posY=-3
               break;
            case 65:
               console.log("A key is pressed.");
               angleX=3
               break;
            case 83:
               console.log("S key is pressed.");
               angleX=-3
               break;   

        }
        vectors=ENGINE.updateObjectVertexPositions(angleX,angleY,posX,posY)
        canvas.updateCanvas(vectors)

     };


     window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
      }
  }, false);
})

