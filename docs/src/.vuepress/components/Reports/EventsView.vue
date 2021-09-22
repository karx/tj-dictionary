<template>
  <div class="chartdiv" ref="chartdiv"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import { mapActions } from 'vuex';

am4core.useTheme(am4themesAnimated);

export default {
  name: 'EventView',
  methods: {
    ...mapActions({
      eventsDumpFetch: 'eventsDumpFetch',
    }),
  },
  mounted() {
    const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = 20;

    const data = [];

    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  },
  created() {
    this.eventsDumpFetch();
    this.unsubscribe = this.$store.subscribe((mutation) => {
      // console.log({ mutation, state });
      if (mutation.type === 'SET_EVENTS_RAW_LOG') {
        const { eventsRaw } = this.$store.state;
        // console.log(eventsRaw);
        const byday = {};
        const bucketByDay = eventsRaw.map((value) => {
          let d = new Date(value.timestamp.machineReadable);
          d = Math.floor(d.getTime() / (1000 * 60 * 60));
          byday[d] = byday[d] || [];
          byday[d].push(value);
          return d;
        });
        console.log({ bucketByDay, byday });
        const data = [];
        Object.keys(byday).forEach((eachCategoryKey, i) => {
          const eachCategory = byday[eachCategoryKey];
          data.push({ date: new Date(eachCategory[0].timestamp.machineReadable), name: `name${i}`, value: eachCategory.length });
        });
        this.chart.data = data;
      }
    });
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
.chartdiv {
  width: 100%;
  height: 300px;
}
</style>
