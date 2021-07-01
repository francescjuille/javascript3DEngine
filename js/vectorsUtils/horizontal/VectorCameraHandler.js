
class VectorCameraHandler{

    mathUtils = new MathUtils();

    getFunction(vertex,camera){

        let R=camera.rotation.x
        let resultFunction={}
        let typeOfFunction=""
        if(R>=0 && R<=90){
            console.log("_________________")
            console.log("\nCAMERA FIRST QUARTER")
            typeOfFunction="F(x)"
            resultFunction=this.getFunctionVertex90Degrees(vertex,camera)
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
        console.log("resultFunction: "+JSON.stringify(resultFunction))
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
        console.log("A: "+JSON.stringify(A))
        console.log("B: "+JSON.stringify(B))
        //let Fy = this.getFuntionOf2Points(vertex, camera.position)

        return {typeOfFunction:typeOfFunction,function:{A:A,B:B}}   //function: f(i)= Ai + B
    }


    getFunctionVertex90Degrees(vertex,camera){
        let angle=90-(camera.rotation.x+(75)) //1r part
        let signe=1
        if(angle<=0){
            angle+=90
            angle=90-angle
            signe=-1
        }
        
        let A=vertex.x
        let P0x=0
        let P0y=(vertex.y+ (signe*this.mathUtils.tan(angle)*A) )
        return {x:P0x,y:P0y}
    }

    getFunctionVertex180Degrees(vertex,camera){
        let angle=180-(camera.rotation.x+(75)) //1r part
        let signe=-1
        if(angle<=0){
            angle+=90
            angle=90-angle
            signe=1
        }
        
        let A=vertex.y
        let P0x=(vertex.x+ (signe*this.mathUtils.tan(angle)*A) )
        let P0y=0
        return {x:P0x,y:P0y}
    }

    getFunctionVertex270Degrees(vertex,camera){
        let angle=(camera.rotation.x-75)-90 //1r part
        let signe=-1
        if(angle>=90){
            angle-=90
            angle=90-angle
            signe=1
        }
        
        let A=vertex.y
        let P0x=(vertex.x + (signe*this.mathUtils.tan(angle)*A) )
        let P0y=0
        return {x:P0x,y:P0y}
    }

    getFunctionVertex360Degrees(vertex,camera){
        let angle=(camera.rotation.x-(75))-270 //2n part
        let signe=-1
        if(angle<=0){ 
            angle+=90
            angle=90-angle
            signe=1
        }
        
        let CONSTANT_X=10 //this value can be any number
        let A=vertex.x+CONSTANT_X
        let P0x=vertex.x
        let P0y=(vertex.y+ (signe*this.mathUtils.tan(angle)*A) )

        //calculate function slope
        let M=-signe*P0y/CONSTANT_X
        //calculate reverse point
        let PreverseX=0;
        let PreverseY=vertex.y+(M*vertex.x)

        return {x:PreverseX,y:PreverseY}
    }
}