class ChartDebug {
    debugChart={}
    hola={}
    contextCanvasChart = document.getElementById('debugChart').getContext("2d");
    initChart(){
      const labels = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
        ];
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
      const config = {
          type: 'line',
          data,
          options: {}
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

    updateChart(){
      console.log("AAAAAAAAAAAAAAAAA")
      if(this.debugChart!=null && this.debugChart!={}){
        console.log(this.debugChart.data)
        this.debugChart.data.datasets[0].data=[Math.floor(Math.random() * 11),2,3,4,5,6,7]
        this.debugChart.update()
      }else{
        console.log("CHART NO LOADED")
      }
    }
}