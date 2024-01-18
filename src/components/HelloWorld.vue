<template>
  <div>
    <Row :gutter="16">
      <Col span="8">
      <div style="height:280px;" class="jnjp">
        <div style="background-color: #27265c;padding-bottom: 0;">
          <Icon type="md-sunny" style="font-size: 24px;margin-left: 10px;margin-right: 10px; color: #fff;" />
          <span style="font-size: 24px;color: #fff;">发电与功率</span>
        </div>
        <br>
        <DFRGL></DFRGL>
      </div>
      </Col>
      <Col span="8">
      <div style="height:100%;">
        <div style="background-color: #27265c;padding-bottom: 0;">
          <Icon type="ios-leaf" style="font-size: 24px;margin-left: 10px;margin-right: 10px; color: #fff;" />
          <span style="font-size: 24px;color: #fff;">节能减排</span>
        </div>
        <JNJP></JNJP>
      </div>
      </Col>
      <Col span="8">
      <div style="height:100%;" class="jnjp">
        <div style="background-color: #27265c;padding-bottom: 0;">
          <Icon type="ios-paper" style="font-size: 24px;margin-left: 10px;margin-right: 10px; color: #fff;" />
          <span style="font-size: 24px;color: #fff;">电站基本信息</span>
        </div>
        <DZJBXX></DZJBXX>
      </div>
      </Col>
    </Row>
    <br>
    <Row :gutter="16">
      <Col span="12">
      <div style="height:86%;" class="jnjp">
        <div style="background-color: #27265c;padding-bottom: 0;">
          <Icon type="md-ionic" style="font-size: 24px;margin-left: 10px;margin-right: 10px; color: #fff;" />
          <span style="font-size: 24px;color: #fff;">日功率-辐射强度</span>
          <span class="fsqd"></span>
          <span class="zt">辐射强度</span>
          <span class="fsqd1"></span>
          <span class="zt1">实时功率</span>
          <Icon type="ios-arrow-dropright" class="dwtb" />
        </div>
        <!-- <div style="height: 100%; border: 1px solid red"> -->
        <RGL />
      </div>
      </Col>
      <Col span="12">
      <div style="height:86%;" class="jnjp">
        <div style="background-color: #27265c;padding-bottom: 0;">
          <Icon type="logo-octocat" style="font-size: 24px;margin-left: 10px;margin-right: 10px; color: #fff;" />
          <span style="font-size: 24px;color: #fff;">日累计发电量</span>
          <span class="fsqd"></span>
          <span class="zt">辐射强度</span>
          <span class="fsqd1"></span>
          <span class="zt1">实时功率</span>
          <Icon type="ios-arrow-dropright" class="dwtb" />
        </div>
        <!-- <div style="height: 100%; border: 1px solid red"> -->
        <RLJFDL />
      </div>
      </Col>
    </Row>
    <br>
  </div>
</template>

<script>
import DFRGL from './zym/DFRGL'
import JNJP from './zym/JNJP'
import DZJBXX from './zym/DZJBXX'
import RGL from './zym/RGL'
import RLJFDL from './zym/RLJFDL'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'YFKJ亚菲科技'
    }
  },
  components: {
    RGL, DFRGL, JNJP, DZJBXX, RLJFDL
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jnjp {
  background-color: #15144e;
}

.fsqd {
  display: inline-block;
  position: absolute;
  right: 260px;
  top: 16px;
  width: 40px;
  height: 3px;
  background: linear-gradient(to right, rgb(16, 219, 255), rgb(12, 31, 236));
}

.fsqd1 {
  display: inline-block;
  position: absolute;
  right: 130px;
  top: 16px;
  width: 40px;
  height: 3px;
  background: linear-gradient(to right, rgb(203, 51, 217), rgb(85, 1, 106));
}

.zt {
  position: absolute;
  right: 190px;
  top: 8px;
  color: rgb(201, 201, 201);
}

.zt1 {
  position: absolute;
  right: 63px;
  top: 8px;
  color: rgb(201, 201, 201);
}

.dwtb {
  position: absolute;
  right: 15px;
  top: 5px;
  font-size: 24px;
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(201, 201, 201);
}
</style>
