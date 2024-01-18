<template>
  <div class="jnjp">
    <div style="position:relative;">
      <Icon type="ios-glasses-outline" style="color: rgb(169, 30, 53);font-size: 28px;margin:16px;color: #e05b5b;" />
      <span class="er">二氧化碳</span>
      <span style="align:right;font-size: 22px;position: absolute;right: 75px;top: 20px;color: #fff;">8.45</span>
      <span class="er" style="position: absolute;right: 30px;top: 28px;">万吨</span>
    </div>
    <div style="position:relative;">
      <Icon type="ios-navigate-outline" style="color: #142592;font-size: 28px;margin:16px;color: #2255d6;" />
      <span class="er">汽车里程</span>
      <span style="align:right;font-size: 22px;position: absolute;right: 75px;top: 20px;color: #fff;">7.37</span>
      <span class="er" style="position: absolute;right: 30px;top: 28px;">KM</span>
    </div>
    <div style="position:relative;">
      <Icon type="ios-planet-outline" style="color: #142592;font-size: 28px;margin:16px;color: #0de4f0;" />
      <span class="er">等效植树</span>
      <span style="align:right;font-size: 22px;position: absolute;right: 75px;top: 20px;color: #fff;">461.79</span>
      <span class="er" style="position: absolute;right: 30px;top: 28px;">万颗</span>
    </div>
    <div style="position:relative;">
      <Icon type="ios-stats-outline" style="color: #e1ad1f;font-size: 28px;margin:16px;color: #f8f40e;" />
      <span class="er">二氧化硫</span>
      <span style="align:right;font-size: 22px;position: absolute;right: 75px;top: 20px;color: #fff;">2542.91</span>
      <span class="er" style="position: absolute;right: 30px;top: 28px;">吨</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JNJP',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jnjp {
  background-color: #15144e;
}

.er {
  color: rgb(201, 201, 201);
}
</style>
