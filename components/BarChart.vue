<template>
    <div>
        <canvas id="bar-chart"></canvas>
    </div>
</template> 

<script>
    import { Chart, registerables } from "chart.js";
    import pieChartData from "@/data/bar-data.js";
    export default {
      data() {
        return {
          pieChartData,
        };
      },
      mounted() {
        const ctx = document.getElementById("bar-chart");
        Chart.register(...registerables);
        new Chart(ctx, this.pieChartData);
      },
    };
</script>