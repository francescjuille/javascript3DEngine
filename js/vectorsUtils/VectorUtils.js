
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
        this.debugVectors(cameraFunction,camera,vertex,objectFunction)

        this.checkIfVertexIsInCameraScope(camera,cameraFunction,vertex)


        return this.calculateMargins(camera,Px,Py,vertex)
    }


    debugVectors(cameraFunction,camera,vertex,vertexFunction){
        let dataCameraRight=[]
        let iterations=Math.floor(camera.position.x/3)
        for(let i=0;i<camera.position.x+50;i++){
            let y=(cameraFunction.function.A*i)+cameraFunction.function.B
            dataCameraRight.push(y)
        }

        let dataVertexFuntion=[]
        iterations=Math.floor(vertex.x/3)
        for(let i=0;i<vertex.x+50;i++){
            let y=(vertexFunction.function.A*i)+vertexFunction.function.B
            dataVertexFuntion.push(y)
        }


        let dataCameraPosition=[]
        for(let i=0;i<300;i++){
            if(i>camera.position.x){
                dataCameraPosition.push(camera.position.y)
                break
            }
            dataCameraPosition.push(null)
        }
        
        let dataObjectVertexPosition=[]
        for(let i=0;i<300;i++){
            if(i>vertex.x){
                dataObjectVertexPosition.push(vertex.y)
                break
            }
            dataObjectVertexPosition.push(null)
        }
        this.chartDebug.updateChart(dataCameraRight,dataCameraPosition,dataObjectVertexPosition,dataVertexFuntion)
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