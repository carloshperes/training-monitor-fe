const barChartData = {
  type: 'bar',
  data: {
    labels: [
      'Carlos Peres', 'Alexandre Akita', 'Pedro Peres', 'Heloísa Peres'
    ],
    datasets: [{
      axis: 'y',
      label: {
        display: false
      },
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        "rgb(2, 1, 1)",
        "rgb(67, 146, 160)",
        "rgb(186, 171, 61)",
        "rgb(195, 71, 237)",
        "rgb(23, 216, 213)",
      ],
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "TOP 5 ESTUDANTES (Horas)",
        },
      },
  }
};

export default barChartData; 