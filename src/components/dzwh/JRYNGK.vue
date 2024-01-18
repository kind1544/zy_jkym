<template>
  <div id="main3" style="width: 1065px;height: 340px;margin-bottom: 10px;background-color: #fff;"></div>
</template>

<script>
// import * as echarts from 'echarts';
export default {
  name: 'JRYNGK',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    this.initEcharts3()
  },
  methods: {
    initEcharts3() {
      var mCharts3 = this.$echarts.init(document.getElementById("main3")) // 初始化echarts实例对象
      var option3;

      option3 = {
        // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        // title: {
        //   text: 'Gradient Stacked Area Chart'
        // },
        legend: {
          data: ['今日建筑总用电(kWh)'],
          // right: '10%'
          left: '2%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['00:00', '', '', '', '04:00', '', '', '', '08:00', '', '', '', '12:00',
              '', '', '', '16:00', '', '', '', '20:00', '', '']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '今日建筑总用电(kWh)',
            type: 'bar',
            //stack: 'Total',
            smooth: true,
            barWidth: 12,//固定柱子宽度,
            lineStyle: {
              width: 0
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [600, 1200, 960, 1500, 2200, 1100, 1600, 800, 600, 1200, 960, 1500, 2200, 1100, 1600, 800, 600, 1200, 960, 1500, 2200, 1100, 1600, 800, 600, 1200, 960, 1500]
          }
        ]
      };

      mCharts3.setOption(option3);
    }
  }
}
</script>

<style scoped></style>
