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

    }

    rotateCamera(){

    }

    renderScreen(){
        math=new MathFunctions()
        math.checkObjects(this.offsetAngle,this.camera,this.objects)

    }



}