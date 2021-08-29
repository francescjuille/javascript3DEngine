
class VectorUtils{

    vectorObjectsHandler = new VectorObjectsHandler()
    vectorCameraHandler = new VectorCameraHandler()
    mathUtils= new MathUtils()
    chartDebug = {}

    constructor(chartDebug){
        this.chartDebug=chartDebug
    }


    getVertexLateralMarginFromCameraHorizontal(vertex,camera){
        let Px,Py
        let cameraFunction = this.vectorCameraHandler.getFunction(camera.position,camera)
        let objectFunction = this.vectorObjectsHandler.getFunction(vertex,camera)

        console.log("\n\n\n\n_____________________________________")
        console.log("vertex.name: "+vertex.name)
        console.log("objectFunction.function.A: "+objectFunction.function.A)
        console.log("objectFunction.function.B: "+objectFunction.function.B)
        console.log("\n----")
        console.log("cameraFunction.function.A: "+cameraFunction.function.A)
        console.log("cameraFunction.function.B: "+cameraFunction.function.B)




        //compare functions
        if(objectFunction.typeOfFunction != cameraFunction.typeOfFunction)throw "Error";

        if(objectFunction.typeOfFunction =="F(x)"){
            console.log()
            Px=(cameraFunction.function.B-objectFunction.function.B) / (objectFunction.function.A-cameraFunction.function.A)
            Py=objectFunction.function.A*Px+objectFunction.function.B
        }
        else if(objectFunction.typeOfFunction =="F(y)"){
            Py=(cameraFunction.function.B-objectFunction.function.B) / (objectFunction.function.A-cameraFunction.function.A)
            Px=objectFunction.function.A*Py+objectFunction.function.B
        }
        else throw "Error in getVertexLateralMarginFromCameraHorizontal";

        /*
        console.log("VECTORS UTILS:")
        console.log("Px: "+Px)  
        console.log("Py: "+Py)
        console.log("vertex.name: "+vertex.name)
        */
        this.debugVectors()

        this.checkIfVertexIsInCameraScope(camera,cameraFunction,vertex)


        return this.calculateMargins(camera,Px,Py,vertex)
    }


    debugVectors(){
        
        this.chartDebug.updateChart()
    }

    calculateMargins(camera,Px,Py,vertex){

        let distance = Math.sqrt( ((Px-vertex.x)**2) + ((Py-vertex.y)**2) )

        let distanceLeft=0
        let distanceRight=0

        let cameraFutionDistance=Math.sqrt( ((Px-camera.position.x)**2) + ((Py-camera.position.y)**2) )
        let totalDistanceBetweenCameraRange=(this.mathUtils.cos(15)*cameraFutionDistance)*2
        if(camera.rotation.x>=0 && camera.rotation.x<=180){
            distanceLeft=distance
            distanceRight=totalDistanceBetweenCameraRange-distance
        } else if(camera.rotation.x>=180 && camera.rotation.x<=360){
            distanceRight=distance
            distanceLeft=totalDistanceBetweenCameraRange-distance

        }
        return {distanceLeft:distanceLeft,distanceRight:distanceRight}

    }

    checkIfVertexIsInCameraScope(camera,cameraFunction,vertex){
        
    }



    getVertexLateralMarginFromCameraVertical(){
        
    }

}