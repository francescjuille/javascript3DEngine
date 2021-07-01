class Engine3D {

    offsetAngle=15

    camera={
        position:{x:140,y:140,z:100},
        rotation:{x:170,y:0},
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

    getUpdatedObjectVertexPositions(){
        let vectorUtils = new VectorUtils()
        let margin=vectorUtils.getVertexLateralMarginFromCameraHorizontal(this.objects[0]["vertex"][2],this.camera)
        console.log("\n\nMARGIN:")
        console.log(margin)
        console.log("_____________\n")
    }

    getVertexBodyConnections(){
        // TODO
    }



}