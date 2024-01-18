<template>
  <div style="padding:10px 35px;" class="er">
    <div style=" float: left;">
      <ul>
        <li style="padding: 5px;">电站名称</li>
        <li style="padding: 5px;">精度/纬度</li>
        <li style="padding: 5px;">装机功率</li>
        <li style="padding: 5px;">组件数量</li>
        <li style="padding: 5px;">电站类型</li>
        <li style="padding: 5px;">投运时间</li>
        <li style="padding: 5px;">生命周期</li>
      </ul>
    </div>
    <div style=" float: right;text-align: right;">
      <ul style="list-style-type:none;">
        <li style="padding: 5px;">十三岗电站</li>
        <li style="padding: 5px;">东经117° 北纬23°</li>
        <li style="padding: 5px;">123.23KW</li>
        <li style="padding: 5px;">2000块</li>
        <li style="padding: 5px;">分布式电站</li>
        <li style="padding: 5px;">2023年12月29日</li>
        <li style="padding: 5px;">25年</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DZJBXX',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
ul li::marker {
  color: #00fbff;
}

.er {
  color: rgb(201, 201, 201);
}
</style>
