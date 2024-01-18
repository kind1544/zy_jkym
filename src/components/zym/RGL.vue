<template>
  <div id="main" style="width: 682px;top:-15px;height: 300px;margin-bottom: 10px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'RGL',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    this.initEcharts1()
  },
  methods: {
    initEcharts1() {
      var mCharts1 = echarts.init(document.getElementById("main")) // 初始化echarts实例对象
      var option1;

      option1 = {
        color: ['#9125ba', '#00DDFF'],
        // title: {
        //   text: 'Gradient Stacked Area Chart'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter: function (params) {
            return params[0].seriesName + ':' + params[0].value + '<br/>' + params[1].seriesName + ':' + params[1].value;
          }
        },
        // legend: {
        //   data: ['辐射强度', '实时功率'],
        //   right: '10%'
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        // title: {
        //   show: true,
        //   text: "日功率-辐射强度"
        // },

        // grid: {
        //   left: '3%',
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true
        // },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['3', '6', '9', '12', '15', '18', '21', '24']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '辐射强度',
            type: 'line',
            //stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#08c0d0'
                },
                {
                  offset: 1,
                  color: '#202161'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [600, 1200, 960, 1500, 2200, 1100, 1600, 800]
          },
          {
            name: '实时功率',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#9f27c7'
                },
                {
                  offset: 1,
                  color: '#25256b'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [200, 800, 1500, 1300, 1600, 2100, 1200, 1100]
          }
        ]
      };

      mCharts1.setOption(option1);
    }
  }
}
</script>

<style scoped></style>
