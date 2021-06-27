
class VectorCameraHandler{

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

        A=0
        B=0
        if(typeOfFunction="F(x)"){
            A=(vertex.y-resultFunction.y) / (vertex.x-resultFunction.x)
            B=resultFunction.y
        }

        if(typeOfFunction="F(y)"){
            A=(vertex.x-resultFunction.x) / (vertex.y-resultFunction.y)
            B=resultFunction.x
        }

        let Fy = this.getFuntionOf2Points(vertex, camera.position)

        return {typeOfFunction:typeOfFunction,function:{A:A,B:B}}   //function: f(i)= Ai + B
    }


    getFunctionVertex90Degrees(vertex,camera){
        angle=90-(camera.rotation.x+(75)) //1r part
        signe=1
        if(angle<=0){
            angle+=90
            angle=90-angle
            signe=-1
        }
        
        A=vertex.x
        P0x=0
        P0y=(vertex.y+ (signe*this.mathUtils.tan(angle)*A) )
        return {x:P0x,y:P0y}
    }

    getFunctionVertex180Degrees(vertex,camera){
        angle=180-(camera.rotation.x+(75)) //1r part
        signe=-1
        if(angle<=0){
            angle+=90
            angle=90-angle
            signe=1
        }
        
        A=vertex.y
        P0x=(vertex.x+ (signe*this.mathUtils.tan(angle)*A) )
        P0y=0
        return {x:P0x,y:P0y}
    }

    getFunctionVertex270Degrees(vertex,camera){
        angle=(camera.rotation.x-75)-90 //1r part
        signe=-1
        if(angle>=90){
            angle-=90
            angle=90-angle
            signe=1
        }
        
        A=vertex.y
        P0x=(vertex.x + (signe*this.mathUtils.tan(angle)*A) )
        P0y=0
        return {x:P0x,y:P0y}
    }

    getFunctionVertex360Degrees(vertex,camera){
        angle=(camera.rotation.x-(75))-270 //2n part
        signe=-1
        if(angle<=0){ 
            angle+=90
            angle=90-angle
            signe=1
        }
        
        CONSTANT_X=10 //this value can be any number
        A=vertex.x+CONSTANT_X
        P0x=vertex.x
        P0y=(vertex.y+ (signe*this.mathUtils.tan(angle)*A) )

        //calculate function slope
        M=-signe*P0y/CONSTANT_X
        //calculate reverse point
        PreverseX=0;
        PreverseY=vertex.y+(M*vertex.x)

        return {x:PreverseX,y:PreverseY}
    }
}