

class VectorObjectsHandler{

    mathUtils = new MathUtils();

    getFunction(vertex,camera){

        let R=camera.rotation.x
        let resultFunction={}
        let typeOfFunction=""
        if(R>=0 && R<=90){
            resultFunction=this.getFunctionVertex90Degrees(vertex,camera)
            typeOfFunction="F(x)"
        } else if(R>=90 && R<=180){
            resultFunction=this.getFunctionVertex180Degrees(vertex,camera)
            typeOfFunction="F(y)"

        } else if(R>=180 && R<=270){
            resultFunction=this.getFunctionVertex270Degrees(vertex,camera)
            typeOfFunction="F(y)"

        } else if(R>=270 && R<=360){
            resultFunction=this.getFunctionVertex360Degrees(vertex,camera)
            typeOfFunction="F(x)"
        }


        let A=0
        let B=0
        if(typeOfFunction=="F(x)"){
            A=(vertex.y-resultFunction.y) / (vertex.x-resultFunction.x)
            B=resultFunction.y
        }

        if(typeOfFunction=="F(y)"){
            A=(vertex.x-resultFunction.x) / (vertex.y-resultFunction.y)
            B=resultFunction.x
        }

        //let Fy = this.getFuntionOf2Points(vertex, camera.position)

        return {typeOfFunction:typeOfFunction,function:{A:A,B:B}}   //function: f(i)= Ai + B
    }


    /*
    * get vertex function if camera rotation is in interval [0,90]
    * Returns a F(x)
    */
    getFunctionVertex90Degrees(vertex,camera){
        let angle=camera.rotation.x
        let A=vertex.x
        let P0x=0
        let P0y=(vertex.y-(this.mathUtils.tan(angle)*A))
        console.log(vertex.name)
        console.log("ANGLE OBJECT FUNCTION: "+angle)
        console.log("vertex.y: "+vertex.y)
        console.log("this.mathUtils.tan(angle): "+this.mathUtils.tan(angle))
        console.log("P0y: "+P0y)
        console.log("____________________")
        
        return {x:P0x,y:P0y}
    }

    /*
    * get vertex function if camera rotation is in interval [90,180]
    * Returns a F(y)
    */
    getFunctionVertex180Degrees(vertex,camera){
        let angle=90-camera.rotation.x
        let A=vertex.y
        let P0x=(vertex.x+this.mathUtils.tan(angle)*A)
        let P0y=0
        return {x:P0x,y:P0y}
    }

     /*
    * get vertex function if camera rotation is in interval [180,270]
    * Returns a F(y)
    */
     getFunctionVertex270Degrees(vertex,camera){
        let angle=90-camera.rotation.x
        let A=vertex.y
        let P0x=(vertex.x-this.mathUtils.tan(angle)*A)
        let P0y=0
        return {x:P0x,y:P0y}
    }

    /*
    * get vertex function if camera rotation is in interval [270,380]
    * Returns a F(x)
    */
    getFunctionVertex360Degrees(vertex,camera){
        let angle=camera.rotation.x
        let A=vertex.x
        let P0x=0
        let P0y=(vertex.y-this.mathUtils.tan(angle)*A)
        return {x:P0x,y:P0y}
    }


}