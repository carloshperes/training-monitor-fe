const pieChartData = {
    type: "pie",
    data: {
      labels: ["PHP 8", "Laravel", "Vue 3"],
      datasets: [
        {
          data: [59.7, 35.3, 5],
          backgroundColor: [
            "rgb(46,176,250)",
            "rgb(240,163,196)",
            "rgb(179,185,201)",
          ],
          hoverOffset: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "TREINAMENTOS MAIS REALIZADOS",
        },
      },
    },
  };
  export default pieChartData; 