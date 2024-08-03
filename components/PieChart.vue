<template>
    <div>
        <canvas id="pie-chart"></canvas>
    </div>
</template> 

<script>
    import { Chart, registerables } from "chart.js";
    import pieChartData from "~/data/pie-data.js";
    export default {
      data() {
        return {
          pieChartData,
        };
      },
      mounted() {
        const ctx = document.getElementById("pie-chart");
        Chart.register(...registerables);
        new Chart(ctx, this.pieChartData);
      },
    };
</script>