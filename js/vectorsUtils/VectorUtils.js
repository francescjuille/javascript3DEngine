
class VectorUtils{

    vectorObjectsHandler = new VectorObjectsHandler()
    vectorCameraHandler = new VectorCameraHandler()
    mathUtils= new MathUtils()

    getVertexLateralMarginFromCameraHorizontal(vertex,camera){
        let Px,Py
        let cameraFunction = this.vectorCameraHandler.getFunction(camera.position,camera)
        let objectFunction = this.vectorObjectsHandler.getFunction(vertex,camera)

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
        console.log("Px: "+Px)
        console.log("Py: "+Py)
        console.log("vertex.x "+(vertex.x))
        console.log("Px "+(Px))
        */

        this.checkIfVertexIsInCameraScope(camera,cameraFunction,vertex)


        return this.calculateMargins(camera,Px,Py,vertex)


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