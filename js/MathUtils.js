

class MathUtils{


    offsetAngle=0

    checkObjects(offsetAngle,camera,objects){

        this.offsetAngle=offsetAngle
        let f1=-this.tan(camera.rotation.x + offsetAngle)
        let f2=this.tan(camera.rotation.x + offsetAngle)
        let vertex=objects[0].vertex

        vertex=this.sortVertex(vertex)


        for(let i=0;i<vertex.length;i++){
            console.log(vertex[i]["y"])
            let functio=(vertex[i].x - camera.position.x) * f1;
            let functio2=vertex[i].x * f2;
            if(functio){}

        }
        
    }




    getVertexLateralMargin(vertex,camera){
        //numero of X that increments for each Y
        let Fy = this.getFuntionOf2Points(vertex, camera.position)


    }


    getFuntionOf2Points(pfinal,pinitial){
        let X=pfinal.x - pinitial.x
        let Y=pfinal.y - pinitial.y
        return X/Y
    }

    isVertexInCameraRangeHorizontalLeft(vertex,camera){
        diferencialY=vertex.y-camera.y
        let x = (diferencialY/this.tan(camera.rotation.x+this.offsetAngle)) + camera.x  // get maxim range of X that is visible (LEFT ARROW)

        if(vertex.x>x){
            return true
        }
        return false
    }



    sortVertex(vertex){
        for(let i=0;i<vertex.length;i++){
            for(let j=i+1;j<vertex.length-1;j++){
                if(vertex[i].y<vertex[j].y){
                    let aux=vertex[i]
                    vertex[i]=vertex[j]
                    vertex[j]=aux
                }
            }
        }
        return vertex
    }

    tan(angle){
        return Math.tan(angle * Math.PI / 180)
    }


    
}