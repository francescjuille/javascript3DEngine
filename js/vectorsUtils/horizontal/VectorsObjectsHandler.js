

class MathFunctions{

    mathUtils = new MathUtils();

    getVertexLateralMarginFromCamera(vertex,camera){

        let R=camera.rotation.x
        let resultFunction={}
        if(R>=0 && R<=90){
            resultFunction=this.getFunctionVertex90Degrees(vertex,camera)

        } else if(R>=90 && R<=180){
            resultFunction=this.getFunctionVertex180Degrees(vertex,camera)

        } else if(R>=180 && R<=270){
            resultFunction=this.getFunctionVertex270Degrees(vertex,camera)

        } else if(R>=270 && R<=360){
            resultFunction=this.getFunctionVertex360Degrees(vertex,camera)
        }

        let Fy = this.getFuntionOf2Points(vertex, camera.position)

    }


    /*
    * get vertex function if camera rotation is in interval [0,90]
    * Returns a F(x)
    */
    getFunctionVertex90Degrees(vertex,camera){
        angle=camera.rotation.x
        A=vertex.x
        P0x=0
        P0y=(vertex.y-this.mathUtils.tan(angle)*A)
        return {x:P0x,y:P0y}
    }

    /*
    * get vertex function if camera rotation is in interval [90,180]
    * Returns a F(y)
    */
    getFunctionVertex180Degrees(vertex,camera){
        angle=90-camera.rotation.x
        A=vertex.y
        P0x=(vertex.x+this.mathUtils.tan(angle)*A)
        P0y=0
        return {x:P0x,y:P0y}
    }

     /*
    * get vertex function if camera rotation is in interval [180,270]
    * Returns a F(y)
    */
     getFunctionVertex270Degrees(vertex,camera){
        angle=90-camera.rotation.x
        A=vertex.y
        P0x=(vertex.x-this.mathUtils.tan(angle)*A)
        P0y=0
        return {x:P0x,y:P0y}
    }

    /*
    * get vertex function if camera rotation is in interval [270,380]
    * Returns a F(x)
    */
    getFunctionVertex360Degrees(vertex,camera){
        angle=camera.rotation.x
        A=vertex.x
        P0x=0
        P0y=(vertex.y-this.mathUtils.tan(angle)*A)
        return {x:P0x,y:P0y}
    }


}