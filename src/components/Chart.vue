<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  name: "chart",
  props: ["val"],
  data() {
    return {
      data: {
        datasets: [
          {
            data: this.val,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        animation: false,
        // responsive: false,
        tooltips: {
          enabled: false //ここにfalseを指定
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
  watch: {
    val() {
      this.data.datasets[0].data = this.val;
      this.renderChart(this.data, this.options);
    }
  }
};
</script>
