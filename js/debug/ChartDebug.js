class ChartDebug {
    debugChart={}
    hola={}
    contextCanvasChart = document.getElementById('debugChart').getContext("2d");
    
    initChart(){
      let labels = []
      for (let i=0;i<300;i++){
        labels.push(i)
      }
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Camera Left Funtion",
            backgroundColor: "rgba(171, 171, 169, 0.4)",
            fill: false,  
            data: labels,
          },
          {
            label: "Camera Position",
            backgroundColor: "red",
            fill: true,
            data: [7],
          },
          {
            label: "Vertex Position",
            backgroundColor: "green",
            fill: true,
            data: [70],
          },
          {
            label: "Vertex Funtion",
            backgroundColor: "rgba(212, 101, 11, 0.38)",
            fill: false,  
            data: labels,
          },
      ]
      };
      const config = {
          type: 'line',
          data,
          options: {
            animation: {
              duration: 0
            },
              scales: {
                y: {
                  min: 0,
                  max: 300,
                }
              }
          }
      };
      setTimeout(()  => {
      console.log("LOAD CHART")
      this.debugChart = new Chart(
        this.contextCanvasChart,
          config
        );
      },500)

      //this.debugChart.destroy()
    }

    updateChart(dataCameraRight,dataCameraPosition,dataObjectVertexPosition,dataVertexFuntion){
      console.log("AAAAAAAAAAAAAAAAA")
      if(this.debugChart!=null && this.debugChart!={}){
        console.log(this.debugChart.data)
        this.debugChart.data.datasets[0].data=dataCameraRight
        this.debugChart.data.datasets[1].data=dataCameraPosition
        this.debugChart.data.datasets[2].data=dataObjectVertexPosition
        this.debugChart.data.datasets[3].data=dataVertexFuntion

        this.debugChart.update()
      }else{
        console.log("CHART NO LOADED")
      }
    }

}