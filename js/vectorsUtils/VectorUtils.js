
class VectorUtils{

    vectorObjectsHandler = new VectorObjectsHandler()
    vectorCameraHandler = new VectorCameraHandler()

    getVertexLateralMarginFromCameraHorizontal(vertex,camera){
        let Px,Py
        let cameraFunction = this.vectorCameraHandler.getFunction(vertex,camera)
        let objectFunction = this.vectorObjectsHandler.getFunction(vertex,camera)

        //compare functions
        if(objectFunction.typeOfFunction != cameraFunction.typeOfFunction){
            Px=(cameraFunction.B-objectFunction.B) / (objectFunction.A-cameraFunction.A)
            Py=objectFunction.A*Px+objectFunction.B
        }
        else if(1){

        }


        

        


    }




    getVertexLateralMarginFromCameraVertical(){
        
    }

}