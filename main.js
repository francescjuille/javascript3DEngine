
$(document).ready(()=>{
    
    console.log("START EXECUTE ENGINE 3D")
    
    //3D ENGINE
    let ENGINE = new Engine3D()
    ENGINE.getUpdatedObjectVertexPositions()
    console.log("FINISH EXECUTE ENGINE 3D")


    //RENDER
    let canvas=new RenderCanvas()
    canvas.initCanvas()
    canvas.updateCanvas()
})

