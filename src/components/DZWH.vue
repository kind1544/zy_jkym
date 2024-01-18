<template>
  <div>
    <div style="background-color: #27265c;">
      <Icon type="ios-stats" style="color: #fff;font-size: 22px;margin: 10px 10px 10px 10px;" /><span
        style="font-size: 22px;font-weight: bolder;color: #fff;">用电实时数据</span>
    </div>
    <!-- <br> -->
    <div style="background-color: #fff;">
      <Row :gutter="0">
        <Col span="19">
        <span style="font-size: 28px; margin-left: 18px;font-weight: bolder;">今日用能概况</span>
        <br />
        <JRYNGK></JRYNGK>
        </Col>
        <Col span="5">
        <div style="border: 2px solid rgb(199, 211, 221); margin: 10px;">
          <div style="margin: 18px;">
            <span class="box" style="position: absolute;top: 10px;left: 10px;"></span>
            <p style="font-size: 18px;">实时功率</p>
            <span style="color: rgb(3, 178, 178);font-size: 32px;">1,908</span>
            <span style="font-size: 18px;">kw</span>
          </div>
        </div>
        <div style="border: 2px solid rgb(199, 211, 221); margin: 10px;">
          <span class="box" style="position: absolute;top: 134px;left: 10px;"></span>
          <div style="margin: 18px;">
            <p style="font-size: 18px;">今日累计用能</p>
            <span style="color: rgb(3, 178, 178);font-size: 32px;">46,531</span>
            <span style="font-size: 18px;">kWh</span>
          </div>
        </div>
        <div style="border: 2px solid rgb(199, 211, 221); margin: 10px;">
          <div style="margin: 18px;">
            <span class="box" style="position: absolute;top: 259px;left: 10px;"></span>
            <p style="font-size: 18px;">今日累计用能参考费用</p>
            <span style="color: rgb(3, 178, 178);font-size: 32px;">43,307</span>
            <span style="font-size: 18px;">RMB</span>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    <div style="background-color: rgb(199, 211, 221);">
      <Row>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="3" stroke-color=rgb(1,178,124)>
            <span class="demo-Circle-inner" style="font-size:24px">3%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">电梯系统用量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">1,192</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="32" stroke-color=rgb(47,152,214)>
            <span class="demo-Circle-inner" style="font-size:24px">32%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">暖通空调用电量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">15,079</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="2" stroke-color=rgb(1,178,124)>
            <span class="demo-Circle-inner" style="font-size:24px">2%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">给排水用电量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">777</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="44" stroke-color=rgb(254,163,0)>
            <span class="demo-Circle-inner" style="font-size:24px">44%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">照明用电量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">20,257</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import JRYNGK from './dzwh/JRYNGK'
// import BTWJ from './dzwh/BTWJ'
export default {
  name: 'DZWH',
  data() {
    return {
      msg: 'YFKJ亚菲科技'
    }
  },
  components: {
    JRYNGK
    // , BTWJ
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 0px;
  height: 0px;
  border: 10px solid transparent;
  border-top-color: #fea800;
  border-left-color: #fea800;
}
</style>
