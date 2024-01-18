<template>
  <div id="main1">
    <div>
      <Icon type="ios-flash"
        style="position: relative;left: 18px;top: 0px;background: linear-gradient(rgb(238, 201, 51) 0%,rgb(231, 231, 86) 20%,rgb(255, 157, 0) 100%);border-radius: 50%;color: #fff;font-size: 48px;" />
      <span style="color: rgb(201, 201, 201);position: relative;left: 30px;top: -20px;">累计发电</span>
      <span style="color: #fdce3e;font-size: 24px;position: relative;right: -90px;top: -20px;">123589256.00</span>
      <span style="color: rgb(201, 201, 201);position: relative;right: -100px;top: -20px;">kWh</span>
      <Progress :percent="90" :stroke-width="10" :stroke-color="['#ffa43a', '#f3e043']" hide-info
        style="width: 75%;position: relative;right: -80px;top: -25px;" />
    </div>
    <div>
      <Icon type="md-flash"
        style="position: relative;left: 18px;top: 0px;background: linear-gradient(rgb(3, 168, 238) 0%,rgb(36, 124, 206) 20%,rgb(75, 45, 223) 100%);border-radius: 50%;color: #fff;font-size: 48px;" />
      <span style="color: rgb(201, 201, 201);position: relative;left: 30px;top: -20px;">今日发电</span>
      <span style="color: #0581fb;font-size: 24px;position: relative;right: -37%;top: -20px;">4567.00</span>
      <span style="color: rgb(201, 201, 201);position: relative;right: -39%;top: -20px;">kWh</span>
      <Progress :percent="55" :stroke-width="10" :stroke-color="['#067eff', '#02c1ee']" hide-info
        style="width: 75%;position: relative;right: -80px;top: -25px;" />
    </div>
    <div>
      <Icon type="md-flower"
        style="position: relative;left: 18px;top: 0px;background: linear-gradient(rgb(223, 55, 215) 0%,rgb(206, 39, 170) 20%,rgb(166, 3, 207) 100%);border-radius: 50%;color: #fff;font-size: 48px;" />
      <span style="color: rgb(201, 201, 201);position: relative;left: 30px;top: -20px;">当前功率</span>
      <span style="color: #803adc;font-size: 24px;position: relative;right: -40%;top: -20px;">567.00</span>
      <span style="color: rgb(201, 201, 201);position: relative;right: -42%;top: -20px;">kWh</span>
      <Progress :percent="25" :stroke-width="10" :stroke-color="['#5a33b1', '#dc2dfe']" hide-info
        style="width: 75%;position: relative;right: -80px;top: -25px;" />
    </div>
    <!-- <Icon type="md-flash" /> -->
    <!-- <Icon type="md-flower" /> -->
  </div>
</template>

<script>
export default {
  name: 'DFRGL',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
#main1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;

  /* justify-content: space-between; */
  /* background: #27265c; */
}
</style>
