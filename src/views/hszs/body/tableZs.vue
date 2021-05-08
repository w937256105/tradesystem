<template>
  <div id="table-zs">
    <el-table
        :data="tableData"
        border
        stripe>
      <el-table-column
          type="index"
          width="43px"
      ></el-table-column>
      <el-table-column label="股票代码">
        <template slot-scope="scope">
          <el-link @click="shareCodeClick(scope.row.share_code,scope.row)">{{scope.row.share_code}}</el-link>
        </template>
      </el-table-column>
      <el-table-column
          label="股票名称">
        <template slot-scope="scope">
          <el-link @click="shareCodeClick(scope.row.share_code,scope.row)">{{scope.row.name}}</el-link>
        </template>
      </el-table-column>
      <el-table-column
          label="最新价">
        <template slot-scope="scope">
          <span :style="{color: (scope.row.change>0?'red':'green')}">{{keepTow(scope.row.day_price)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="涨跌额">
        <template slot-scope="scope">
          <span :style="{color: (scope.row.change>0?'red':'green')}">{{keepTow(scope.row.change)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="涨跌幅"
          width="69px">
        <template slot-scope="scope">
          <span :style="{color: (scope.row.change_rate>0?'red':'green')}">{{keepTow(scope.row.change_rate)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="成交量">
        <template slot-scope="scope">
          <span >{{formatData(scope.row.volume)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="成交额">
        <template slot-scope="scope">
          <span >{{formatData(scope.row.amount)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="今开">
        <template slot-scope="scope">
          <span >{{keepTow(scope.row.open)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="日高">
        <template slot-scope="scope">
          <span >{{keepTow(scope.row.day_high)}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="日低">
        <template slot-scope="scope">
          <span >{{keepTow(scope.row.day_low)}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableZs",
  data() {
    return{
      tableData: []
    }
  },
  mounted() {
    this.$axios('show/all')
    .then(res => {
      this.tableData = res.data.data
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    shareCodeClick(code,data){
      this.$store.commit('currentTs',data)
      this.$router.push({
        name: `detail`,
      })
    },
    //保留两位小数
    keepTow(data){
      return data.toFixed(2)
    },
    //将大数转为更容易阅读的方式 如123456789 => 1.23亿
    formatData(data){
      if(data > 100000000){
        data = data/100000000
        data = data.toFixed(2)
        return data+'亿'
      }else if(data > 10000){
        data = data/10000
        data = data.toFixed(2)
        return data+'万'
      }
      return data
    }
  }
}
</script>

<style scoped>
  #table-zs{
    width: 1020px;
    font-size: 14px;
  }
</style>