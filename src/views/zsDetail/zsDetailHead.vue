<template>
  <div id="zs-detail-head">
    <div class="zs-detail-head-title">
      <span style="font-size: 30px; margin-right: 20px">{{tsInformation.name}}</span>
      <span style="font-size: large; margin-right: 20px">{{tsInformation.share_code}}</span>
      <span style="margin-right: 40px">{{currentTime}}</span>
      <el-button type="danger" round size="mini">+加自选</el-button>
    </div>
    <div class="zs-detail-head-body">
      <div>
        <div style="text-align: center; font-size: 40px" :style="{color: (tsInformation.change>0?'red':'green')}">{{keepTow(tsInformation.day_price)}}</div>
        <div style="display: flex">
          <div class="zs-detail-head-body-text" :style="{color: (tsInformation.change>0?'red':'green')}">{{keepTow(tsInformation.change)}}</div>
          <div class="zs-detail-head-body-text" :style="{color: (tsInformation.change>0?'red':'green')}">{{keepTow(tsInformation.change_rate)}}%</div>
        </div>

      </div>
      <div class="zs-detail-border">
        <el-row>
          <el-col :span="6"><div><span>今开：</span>{{tsInformation.open}}</div></el-col>
          <el-col :span="6"><div><span>最高：</span>{{tsInformation.day_high}}</div></el-col>
          <el-col :span="6"><div><span>涨跌幅：</span>{{tsInformation.change_rate}}</div></el-col>
          <el-col :span="6"><div><span>成交量：</span>{{tsInformation.volume}}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div><span>昨收：</span>{{tsInformation.open_close}}</div></el-col>
          <el-col :span="6"><div><span>最低：</span>{{tsInformation.day_low}}</div></el-col>
          <el-col :span="6"><div><span>涨跌额：</span>{{tsInformation.change}}</div></el-col>
          <el-col :span="6"><div><span>成交额：</span>{{tsInformation.amount}}</div></el-col>
        </el-row>
        <el-row style="background: #f3f3f3">
          <el-col :span="4">
            <span>多空调查</span>
          </el-col>
          <el-col :span="16">
            <el-radio-group v-model="radio">
              <el-radio :label="1"><span>看涨</span></el-radio>
              <el-radio :label="2"><span>看跌</span></el-radio>
              <el-radio :label="3"><span>盘整</span></el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="4">
            <el-button type="warning" size="mini">投票</el-button>
            <el-button type="primary" size="mini">查看</el-button>
          </el-col>
        </el-row>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zsDetailHead",
  data(){
    return{
      radio: 1
    }
  },
  computed: {
    tsInformation() {
      return this.$store.state.tsInformation
    },
    currentTime() {
      let t = new Date()
      return t.toLocaleDateString()
    }
  },
  created() {
    console.log(this.$route.params);
  },
  methods: {
    keepTow(data) {
      return data.toFixed(2);
    }
  }
}
</script>

<style scoped>
  #zs-detail-head{
    display: flex;
    flex-direction: column;

  }
  .zs-detail-head-title{
    height: 42px;
    display: flex;
    align-items: center;
    background: #f3f3f3;
    border-bottom: solid 3px #2f5895;
  }
  .zs-detail-head-body{
    display: grid;
    grid-template-columns: 200px 800px 200px;
    height: 80px;
    border-bottom: 1px solid #bbd4e8;
  }
  .zs-detail-border{
    border-left: 1px solid #bbd4e8;
    border-right: 1px solid #bbd4e8;
    padding: 5px;
  }
  .zs-detail-head-body-text{
    flex: 1;
    text-align: center;
  }
</style>