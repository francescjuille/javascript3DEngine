
$(document).ready(()=>{
    
    console.log("START EXECUTE ENGINE 3D")
    //3D ENGINE
    let ENGINE = new Engine3D()
    let vectors = ENGINE.updateObjectVertexPositions(0,0)
    
    //RENDER
    let canvas=new RenderCanvas()
    canvas.initCanvas()
    canvas.updateCanvas(vectors)


    document.onkeydown = function (event) {
        let angleX=0
        let angleY=0
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
        switch (event.keyCode) {
           case 37:
              console.log("Left key is pressed.");
              angleX=3
              angleY=0
              break;
           case 38:
              console.log("Up key is pressed.");
              break;
           case 39:
              console.log("Right key is pressed.");
              angleX=-3
              angleY=0
              break;
           case 40:
              console.log("Down key is pressed.");
              break;
        }
        vectors=ENGINE.updateObjectVertexPositions(angleX,angleY)
              canvas.updateCanvas(vectors)

     };
})

