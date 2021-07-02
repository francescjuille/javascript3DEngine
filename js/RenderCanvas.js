

class RenderCanvas{

    canvas=null
    canvasHtmlReference=null

    initCanvas(){
        this.canvasHtmlReference = document.getElementById("gameEngine");
        this.canvas = this.canvasHtmlReference.getContext("2d");
        this.canvas.moveTo(0, 50);
        this.canvas.lineTo(200, 300);
        this.canvas.stroke();
    }

    updateCanvas(vectors){ //(100,200) el primer es X (width), el segon es y (height)
        this.canvas.clearRect(0, 0, this.canvasHtmlReference.width, this.canvasHtmlReference.height);
        console.log("\nUPDATE CANVAS")
        console.log(vectors)
        console.log("______________\n")
        let canvasWidth=600

        for (let i=0;i<vectors.length;i++){
            let vectorWidth=vectors[i].horizontal.distanceLeft + vectors[i].horizontal.distanceRight
        
            let metrics=canvasWidth/vectorWidth
            let x=vectors[i].horizontal.distanceLeft*metrics
            let y=vectors[i].vertical.distanceTop
            this.canvas.fillRect(x,y,7,7);
            this.canvas.font = "12px Arial";
            this.canvas.fillText(vectors[i].vertexName, x, y-1); 
        }
        
        /*
        this.canvas.beginPath();
        this.canvas.moveTo(50, 50);
        this.canvas.lineTo(50, 100);
        this.canvas.lineTo(100, 100);
        this.canvas.lineTo(100, 50);
        this.canvas.lineTo(50, 50);
        this.canvas.fillStyle = "#FF0000";
        this.canvas.strokeStyle = "gray";
        this.canvas.fill();
        this.canvas.stroke();
        */
        //this.canvas.lineWidth = "10";
        //this.canvas.strokeStyle = "red";
        //this.canvas.stroke();

        
    }



}