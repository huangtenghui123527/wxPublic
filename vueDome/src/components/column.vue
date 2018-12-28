<template>
  <div class="col">
    <h2>字体</h2>
    <div id="main" style="width: 600px;height:400px;"></div>
    <div id="pai" style="width: 800px;height:500px;"></div>
  </div>
</template>
<style lang="scss" scoped>
  .col{
    margin: 10px 20px;
    h2{
      font:normal bold 18px/20px inherit
    }
  }
</style>

<script>
 let echarts = require('echarts/lib/echarts');

export default {
  name:'column',
  data(){
    return {
      option: {
            title: {
                text: 'echartsColumn'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
                data:['意向','预购','成交']
            },
            dataset: {
                // 提供一份数据。
                source: [
                    ['product', '衬衫', '裤子', '鞋子'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {
                // data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                type: 'category',
                // data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {},
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {
                    name: '成交',
                    type: 'line',
                    smooth: true,
                    data: [10, 12, 21, 54, 12,48,65,89]
                },
                {
                    name: '预购',
                    type: 'line',
                    smooth: true,
                    data: [30, 85,76,45,38,30, 10]
                },
                {
                    name: '意向',
                    type: 'line',
                    smooth: true,
                    data: [99,85,76,64, 90, 20]
                }
            ]
            // series: [{
            //     name: '销量',
            //     type: 'bar',
            //     data: [5, 20, 36, 10, 10, 20]
            // }]
        },
    }
  },
  methods:{
    genData(count) {
        var nameList = [
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < 10; i++) {
            name = Math.random() > 0.65
                ? makeWord(4, 1) + '·' + makeWord(3, 0)
                : makeWord(2, 1);
            legendData.push(name);
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
            selected[name] = i < 6;
        }

        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };

        function makeWord(max, min) {
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
            }
            return name.join('');
        }
    }
  },
  mounted(){
    let paiData=this.genData(50);
    // console.log(paiData)
    var myChart = echarts.init(document.getElementById('main'));
    var myPai = echarts.init(document.getElementById('pai'));
      let opai= {
          title : {
              text: '同名数量统计',
              subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              // type: 'scroll',
              orient: 'vertical',
              right: 10,
              top: 10,
              // bottom: 20,
              data: paiData.legendData,
              selected: paiData.selected
          },
          series : [
              {
                  name: '姓名',
                  type: 'pie',
                  radius : '55%',
                  center: ['40%', '50%'],
                  data: paiData.seriesData,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      }

    myChart.setOption(this.option)
    myPai.setOption(opai);
  }
}
</script>
