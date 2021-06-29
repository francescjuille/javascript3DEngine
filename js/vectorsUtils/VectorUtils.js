
class VectorUtils{

    vectorObjectsHandler = new VectorObjectsHandler()
    vectorCameraHandler = new VectorCameraHandler()

    getVertexLateralMarginFromCameraHorizontal(vertex,camera){
        let Px,Py
        let cameraFunction = this.vectorCameraHandler.getFunction(camera.position,camera)
        let objectFunction = this.vectorObjectsHandler.getFunction(vertex,camera)

        console.log("\n\n\n_________________________")
        console.log("MAIN VECTOR FUNCTION START")
        console.log("cameraFunction: "+JSON.stringify(cameraFunction))
        console.log("objectFunction: "+JSON.stringify(objectFunction))

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
        else throw "Error";
        console.log("Px: "+Px)
        console.log("Py: "+Py)
        console.log("vertex.x "+(vertex.x))
        console.log("Px "+(Px))

        console.log("((Px-vertex.x)**2) + ((Py-vertex.y)**2): "+((Px-vertex.x)**2) + ((Py-vertex.y)**2))
        let distance = Math.sqrt( ((Px-vertex.x)**2) + ((Py-vertex.y)**2) )
        console.log("distance: "+distance)
        return distance


        

        


    }




    getVertexLateralMarginFromCameraVertical(){
        
    }

}