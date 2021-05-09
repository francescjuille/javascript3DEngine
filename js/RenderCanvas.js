

class RenderCanvas{

    canvas=null
    canvasMetrix=null

    initCanvas(){
        this.canvasMetrix = document.getElementById("gameEngine");
        this.canvas = this.canvasMetrix.getContext("2d");
        this.canvas.moveTo(0, 50);
        this.canvas.lineTo(200, 300);
        this.canvas.stroke();
    }

    updateCanvas(){ //(100,200) el primer es X (width), el segon es y (height)
        this.canvas.clearRect(0, 0, this.canvasMetrix.width, this.canvasMetrix.height);

        this.canvas.beginPath();
        //this.canvas.rect(20, 20, 150, 10);
        this.canvas.stroke();

        this.canvas.beginPath();
        this.canvas.moveTo(75, 50);
        this.canvas.lineTo(100, 750);
        this.canvas.lineTo(100, 25);
        this.canvas.fill();
        //this.canvas.lineWidth = "10";
        //this.canvas.strokeStyle = "red";
        //this.canvas.stroke();
    }



}