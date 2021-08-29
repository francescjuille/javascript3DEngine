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
      console.log("LOAD CHART")
      this.debugChart = new Chart(
        this.contextCanvasChart,
          config
        );
      //this.debugChart.destroy()
    }

    updateChart(){
      console.log("AAAAAAAAAAAAAAAAA")
      if(this.debugChart!=null && this.debugChart!={}){
        console.log(this.debugChart.data)
      }else{
        console.log("CHART NO LOADED")
      }
    }
}