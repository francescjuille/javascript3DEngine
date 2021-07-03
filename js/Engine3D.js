class Engine3D {

    offsetAngle=15
    mathUtils= new MathUtils()

    camera={
        position:{x:100,y:100,z:100},
        rotation:{x:0,y:0},
    }

    objects=[
        {
            vertex:[{name:"A",x:110,y:110,z:140},{name:"B",x:120,y:110,z:140},{name:"C",x:120,y:115,z:140},{name:"D",x:120,y:115,z:170},{name:"E",x:110,y:115,z:170},{name:"F",x:110,y:110,z:170},{name:"G",x:110,y:115,z:140},{name:"H",x:120,y:110,z:170}],
            vertexUnion:["AB","AG","AF","BA","BC","BH","CB","CG","CD","DC","DH","DE","ED","EF","EG","FE","FA","FH","GA","GE","GC","HD","HB","HF"]
        },

        {
            vertex:[{name:"A",x:90,y:120,z:110},{name:"B",x:100,y:120,z:110},{name:"C",x:110,y:120,z:110}],
            vertexUnion:[]
        },
    ]

    moveCamera(posX,posY){
        this.camera.position.x+=posX
        this.camera.position.y+=posY

    }

    rotateCamera(angleX,angleY){
        this.camera.rotation.x+=angleX
        this.camera.rotation.y+=angleY

        if(this.camera.rotation.x<0){
            this.camera.rotation.x=360
        }
        if(this.camera.rotation.x>360){
            this.camera.rotation.x=0
        }
    }

    updateObjectVertexPositions(angleX,angleY,posX,posY){
        this.rotateCamera(angleX,angleY)
        this.moveCamera(posX,posY)
        console.log("\nAngle: "+this.camera.rotation.x+"\n")
        console.log("PositionX: "+this.camera.position.x+"\n"+"PositionY: "+this.camera.position.y+"\n______\n\n")

        let vectorUtils = new VectorUtils()

        let vertex=this.mathUtils.sortVertex(this.objects[0]["vertex"])
        let margins=[]
        for(let i=0;i<vertex.length;i++){
            let margin=vectorUtils.getVertexLateralMarginFromCameraHorizontal(vertex[i],this.camera)
            margins.push({horizontal:margin,vertical:{distanceTop:400-vertex[i].z,distanceBottom:600-(400-vertex[i].z)},vertexName:vertex[i].name})
        }
    
        return margins
    }

    getVertexBodyConnections(){
        // TODO
    }



}