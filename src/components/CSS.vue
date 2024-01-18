<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

a {
  color: #fff;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.menu-icon {
  transition: all .3s;
}

.rotate-icon {
  transform: rotate(-90deg);
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}

.ivu-menu-item-selected {
  background-color: rgb(54, 62, 79);
  /* height: 64px; */
}

.ivu-layout-header {
  padding-left: 0px;
}

.ass:nth-of-type(1) {
  padding: 0;
}

.ivu-layout-header,
.ivu-menu-dark,
.ivu-layout-sider {
  background: #27265c;
}

.ivu-menu-item-selected[data-v-05f9ea83] {
  background-color: #0b0e40;
  border-bottom: 1px solid rgb(243, 129, 24);
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
  background-color: #0b0e40;
}

.xzxhx .ivu-menu-item-active {
  border-bottom: 2px solid #e3a41d;
}

.menu-item span[data-v-05f9ea83] {
  text-overflow: clip;
  width: 120px;
}

.ivu-menu-vertical .ivu-menu-item {
  padding: 20px 24px;
}

.cddh {
  position: absolute;
  top: 10px;
  right: 0px;
}

.xhd {
  display: inline-block;
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 100%;
  border: red solid 4px;
  left: 172px;
  top: 12px;
}
</style>
<template>
  <div class="layout" style="height:100vh;">
    <Layout>
      <Layout>
        <Header style="display: flex;">
          <div class="layout-logo"><img src="../../images/tdd.png" alt="" width="200px" height="64px"></div>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-nav">
              <MenuItem name="1">
              <router-link to="/index">
                <div style="margin: 2px 5px;">
                  <Icon type="md-desktop" />
                  运行监控
                </div>
              </router-link>
              </MenuItem>
              <MenuItem name="2">
              <router-link to="/index">
                <div style="padding: 2px;">
                  <Icon type="md-reorder" />
                  生产管理
                </div>
              </router-link>
              </MenuItem>
              <MenuItem name="3">
              <router-link to="/dzwh">
                <div style="padding: 2px;">
                  <Icon type="ios-analytics"></Icon>
                  电站维护
                </div>
              </router-link>
              </MenuItem>
              <MenuItem name="4">
              <router-link to="/index">
                <div style="padding: 2px;">
                  <!-- <Icon type="ios-paper"></Icon> -->
                  <Icon type="ios-cog-outline" />
                  系统管理
                </div>
              </router-link>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <div class="cddh">
          <span style="color: rgb(201, 201, 201); top: -12px;right: 140px;position: relative;">
            <span id="mo"></span>
            <span style="margin: 0 5px;">|</span>
            <span id="y"></span></span>
          <img src="../../images/tb.jpg" width="40px"
            style="top: 0px;right: 120px;position: relative;border-radius: 50%;border: 2px solid #fff;" alt="">
          <span style="top: -12px;right: 110px;position: relative;color: #dddbdb;">YaFei</span>
          <span
            style="width: 0px;top: -1px;right: 54px;position: relative;height: 0px;border: 4px solid transparent;border-top-color: rgb(249, 249, 249);"></span>
          <Icon type="ios-chatbubbles-outline"
            style="color: rgb(233, 233, 233);font-size: 24px;top: -10px;right: 60px;position: relative;" />
          <Icon type="ios-alert-outline"
            style="color: rgb(233, 233, 233);font-size: 24px;top: -10px;right: 45px;position: relative;" />
          <span class="xhd"></span>
          <Icon type="ios-power"
            style="color: rgb(233, 233, 233);font-size: 24px;top: -10px;right: 30px;position: relative;" />
        </div>
      </Layout>
      <Layout style="height:100vh;background:#0b0e40;">
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
            <!-- <Icon type="ios-navigate"></Icon> -->
            <router-link to="/index">
              <Icon type="md-home" />
              <span>首页</span>
            </router-link>
            </MenuItem>
            <MenuItem name="1-2">
            <!-- <Icon type="ios-search"></Icon> -->
            <Icon type="ios-flash-outline" />
            <span>电力监控</span>
            </MenuItem>
            <MenuItem name="1-3">
            <!-- <Icon type="ios-settings"></Icon> -->
            <Icon type="md-ionic" />
            <span>光伏区监控</span>
            </MenuItem>
            <MenuItem name="1-4">
            <!-- <Icon type="ios-settings"></Icon> -->
            <Icon type="ios-images-outline" />
            <span>设备分布图</span>
            </MenuItem>
            <MenuItem name="1-5">
            <Icon type="ios-podium-outline" />
            <span>设备实时数据</span>
            </MenuItem>
            <MenuItem name="1-6">
            <Icon type="ios-alert-outline" />
            <span>故障告警</span>
            </MenuItem>
            <MenuItem name="1-7">
            <Icon type="ios-switch" />
            <span>远程控制</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Content :style="{ margin: '20px', background: '#0b0e40', overflow: 'hidden', minHeight: '500px' }">
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'CSS',
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted() {
    this.show();
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    show() {
      var now = new Date();
      document.getElementById("y").innerHTML = now.toISOString().slice(0, 10);
      document.getElementById("mo").innerHTML = `${now.getHours()}:${now.getMinutes()}`;
      setTimeout(this.show, 6000);//定时器一直调用show()函数
      return "";
    }
  }
}
</script>