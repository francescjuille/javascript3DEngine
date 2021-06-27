class Screen {

    offsetAngle=30

    camera={
        position:{x:0,y:0,z:0},
        rotation:{x:0,y:0},
    }

    objects=[
        {
            vertex:[{name:"A",x:0,y:0,z:0},{name:"B",x:10,y:0,z:0},{name:"C",x:10,y:10,z:0},{name:"D",x:10,y:10,z:10},{name:"E",x:0,y:10,z:10},{name:"F",x:0,y:0,z:10},{name:"G",x:0,y:10,z:0},{name:"H",x:10,y:0,z:10}],
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
        let margin=vectorUtils.getVertexLateralMarginFromCameraHorizontal(this.objects.vertex[3],this.camera)
        console.log("margin: "+margin)
    }

    getVertexBodyConnections(){
        // TODO
    }



}