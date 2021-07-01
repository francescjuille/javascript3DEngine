class Engine3D {

    offsetAngle=15
    mathUtils= new MathUtils()

    camera={
        position:{x:100,y:100,z:100},
        rotation:{x:0,y:0},
    }

    objects=[
        {
            vertex:[{name:"A",x:110,y:110,z:110},{name:"B",x:120,y:110,z:110},{name:"C",x:120,y:120,z:110},{name:"D",x:120,y:120,z:120},{name:"E",x:110,y:120,z:120},{name:"F",x:110,y:110,z:120},{name:"G",x:110,y:120,z:110},{name:"H",x:120,y:110,z:120}],
            vertexUnion:["AB","AG","AF","BA","BC","BH","CB","CG","CD","DC","DH","DE","ED","EF","EG","FE","FA","FH","GA","GE","GC","HD","HB","HF"]
        }
    ]

    moveCamera(){
        //TODO
    }

    rotateCamera(){
        //TODO
    }

    updateObjectVertexPositions(angleX,angleY){
        this.camera.rotation.x+=angleX
        this.camera.rotation.y+=angleY
        console.log("\nAngle: "+this.camera.rotation.x+"\n______")
        let vectorUtils = new VectorUtils()

        let vertex=this.mathUtils.sortVertex(this.objects[0]["vertex"])
        let margins=[]
        for(let i=0;i<vertex.length;i++){
            let margin=vectorUtils.getVertexLateralMarginFromCameraHorizontal(vertex[i],this.camera)
            margins.push(margin)
        }
    
        return margins
    }

    getVertexBodyConnections(){
        // TODO
    }



}