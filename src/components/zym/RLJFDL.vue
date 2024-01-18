<template>
  <div id="main2" style="width: 682px;position: relative;top:-15px;height: 300px;margin-bottom: 10px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'RLJFDL',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    this.initEcharts2()
  },
  methods: {
    initEcharts2() {
      var mCharts2 = echarts.init(document.getElementById("main2")) // 初始化echarts实例对象
      var option2;

      option2 = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        // title: {
        //   text: 'Gradient Stacked Area Chart'
        // },
        // legend: {
        //   data: ['辐射强度', '实时功率'],
        //   right: '10%'
        // },
        // title: {
        //   show: true,
        //   text: "日累发电量"
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
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
            type: 'bar',
            //stack: 'Total',
            smooth: true,
            barWidth: 8,//固定柱子宽度,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
            itemStyle: {
              color: {
                type: 'linear', // 渐变类型  
                x: 0, // 渐变起始点x坐标  
                y: 0, // 渐变起始点y坐标  
                x2: 0, // 渐变终止点x坐标  
                y2: 1, // 渐变终止点y坐标  
                colorStops: [{ // 颜色停靠点，数组中的第一个元素代表起始颜色，最后一个元素代表终止颜色  
                  offset: 0, color: '#04dae3' // 0%处，颜色为红色  
                }, {
                  offset: 1, color: '#2e4bcd' // 100%处，颜色为蓝色  
                }],
                global: false // 缺省为false，是否应用为全局渐变色，仅对非直角坐标系有效  
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: [600, 1200, 960, 1500, 2200, 1100, 1600, 800]
          },
          {
            name: '实时功率',
            type: 'bar',
            // stack: 'Total',
            smooth: true,
            barWidth: 8,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(0, 221, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }
              ])
            },
            itemStyle: {
              color: {
                type: 'linear', // 渐变类型  
                x: 0, // 渐变起始点x坐标  
                y: 0, // 渐变起始点y坐标  
                x2: 0, // 渐变终止点x坐标  
                y2: 1, // 渐变终止点y坐标  
                colorStops: [{ // 颜色停靠点，数组中的第一个元素代表起始颜色，最后一个元素代表终止颜色  
                  offset: 0, color: '#e32eff' // 0%处，颜色为红色  
                }, {
                  offset: 1, color: '#4d1f82' // 100%处，颜色为蓝色  
                }],
                global: false // 缺省为false，是否应用为全局渐变色，仅对非直角坐标系有效  
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: [200, 800, 1500, 1300, 1600, 2100, 1200, 1100]
          }
        ]
      };

      mCharts2.setOption(option2);
    }
  }
}
</script>

<style scoped></style>
