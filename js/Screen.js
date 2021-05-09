class Screen {

    offsetAngle=30

    camera={
        position:{x:0,y:0,z:0},
        rotation:{x:0,y:0},
    }

    objects=[
    {
        vertex:{A:{x:0,y:0,z:0},B:{x:10,y:0,z:0},C:{x:10,y:10,z:0},D:{x:10,y:10,z:10},E:{x:0,y:10,z:10},F:{x:0,y:0,z:10},G:{x:0,y:10,z:0},H:{x:10,y:0,z:10}},
        vertexUnion:["AB","AG","AF","BA","BC","BH","CB","CG","CD","DC","DH","DE","ED","EF","EG","FE","FA","FH","GA","GE","GC","HD","HB","HF"]
    }
    ]

    moveCamera(){

    }

    rotateCamera(){

    }

    renderScreen(){
        math=new MathFunctions()
        math.checkObjects(this.offsetAngle,this.camera,this.objects)

    }



}