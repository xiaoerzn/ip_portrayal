
<template>
  <el-card :body-style="{ padding: '0px 5px', height: '500px' }">
    <div slot="header" class="clearfix">
      <strong>域名解析路径</strong>
    </div>
    <div id="chart" style="width: 100%; height: 100%"></div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      option: {
        tooltip: {},
        legend: [
          {
            data: ['根', '一级', '二级', '三级', '四级', '五级', '六级']
          }
        ],
        force: {
          repulsion: 300,
          edgeLength: 50
        },
        roam: false,
        series: [
          {
            type: 'graph',
            name: '样式',
            itemStyle: {
              label: {
                show: true
              },
              borderType: 'solid',
              borderColor: 'rgba(182,215,0,0.5)',
              borderWidth: 2,
              opacity: 1
            },
            emphasis: {
              borderWidth: 5,
              borderType: 'solid',
              borderColor: '#40f492',
              focus: 'adjacency'
            },
            lineStyle: {
              normal: {
                color: 'rgba(182,0,255,0.5)',
                width: '3',
                type: 'dotted',
                curveness: 0.1,
                opacity: 1
              }
            },
            label: {
              show: true,
              position: 'top',
              rich: {
                prefixClassName: {
                  color: '#FF9301',
                  fontWeight: 'bold'
                }
              }
            },
            links: [
              {
                source: '根节点',
                target: '一级1'
              },
              {
                source: '根节点',
                target: '一级2'
              },
              {
                source: '一级1',
                target: '二级1'
              },
              {
                source: '一级1',
                target: '二级3'
              },
              {
                source: '二级3',
                target: '三级1'
              },
              {
                source: '一级2',
                target: '二级2'
              }
            ],
            categories: [
              {
                name: '根'
              },
              {
                name: '一级'
              },
              {
                name: '二级'
              },
              {
                name: '三级'
              },
              {
                name: '四级'
              },
              {
                name: '五级'
              },
              {
                name: '六级'
              }
            ],
            data: [
              {
                // id:0,
                name: '根节点',
                symbolSize: 40,
                category: 0, // 通过其控制显示与否
                nodeType: 0 // 有子节点为1
                // "legendName": "根",
              },
              {
                // id:1,
                name: '一级1',
                symbolSize: 40,
                category: -1,
                nodeType: 1
                // "legendName": "一级",
              },
              {
                // id:2,
                name: '一级2',
                symbolSize: 40,
                category: -1
                // "legendName": "一级",
              },
              {
                // id:3,
                name: '二级1',
                symbolSize: 40,
                category: -2,
                nodeType: 0
                // "legendName": "二级",
              },
              {
                // id:4,
                name: '二级2',
                symbolSize: 40,
                category: -2,
                nodeType: 0
                // "legendName": "二级",
              },
              {
                // id:5,
                name: '二级3',
                symbolSize: 40,
                category: -2,
                nodeType: 1
                // "legendName": "二级",
              },
              {
                // id:6,
                name: '三级1',
                symbolSize: 40,
                category: -3,
                nodeType: 0
                // "toggle":-6,
                // "legendName": "三级",
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.draw()
    // bindChartClickEvent(this.echart)
  },
  methods: {
    draw () {
      var myChart = this.$echarts.init(document.getElementById('chart'))
      myChart.setOption({
        title: {
          text: '样例'
        },
        tooltip: {},
        legend: [
          {
            data: ['根', '一级', '二级', '三级', '四级', '五级', '六级']
          }
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        force: {
          initLayout: 'circular',
          repulsion: 300,
          edgeLength: 50
        },
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: [
              {
                // id:0,
                name: '根节点',
                symbolSize: 40,
                category: 0, // 通过其控制显示与否
                nodeType: 0 // 有子节点为1
                // "legendName": "根",
              },
              {
                // id:1,
                name: '一级1',
                symbolSize: 40,
                category: -1,
                nodeType: 1
                // "legendName": "一级",
              },
              {
                // id:2,
                name: '一级2',
                symbolSize: 40,
                category: -1
                // "legendName": "一级",
              },
              {
                // id:3,
                name: '二级1',
                symbolSize: 40,
                category: -2,
                nodeType: 0
                // "legendName": "二级",
              },
              {
                // id:4,
                name: '二级2',
                symbolSize: 40,
                category: -2,
                nodeType: 0
                // "legendName": "二级",
              },
              {
                // id:5,
                name: '二级3',
                symbolSize: 40,
                category: -2,
                nodeType: 1
                // "legendName": "二级",
              },
              {
                // id:6,
                name: '三级1',
                symbolSize: 40,
                category: -3,
                nodeType: 0
                // "toggle":-6,
                // "legendName": "三级",
              }
            ],
            links: [
              {
                source: '根节点',
                target: '一级1'
              },
              {
                source: '根节点',
                target: '一级2'
              },
              {
                source: '一级1',
                target: '二级1'
              },
              {
                source: '一级1',
                target: '二级3'
              },
              {
                source: '二级3',
                target: '三级1'
              },
              {
                source: '一级2',
                target: '二级2'
              }
            ],
            categories: [
              {
                name: '根'
              },
              {
                name: '一级'
              },
              {
                name: '二级'
              },
              {
                name: '三级'
              },
              {
                name: '四级'
              },
              {
                name: '五级'
              },
              {
                name: '六级'
              }
            ],
            draggable: true,
            itemStyle: {
              borderCap: 'round'
            }
          }
        ]
      })
      // console.log(myChart)
      this.bindChartClickEvent(myChart)
    },
    bindChartClickEvent (chart) {
      chart.on('click', function (params) {
        // console.log(111)
        var category = params.data.category
        var nodeType = params.data.nodeType
        if (category === 0 || nodeType === 1) {
          this.toggleShowNodes(chart, params)
        }
      })
    },
    /**
     * 展开或关闭节点
     * @param chart
     * @param params
     */
    toggleShowNodes (chart, params) {
      var open = !!params.data.open
      var options = chart.getOption()
      var seriesIndex = params.seriesIndex
      var srcLinkName = params.name
      var serieLinks = options.series[seriesIndex].links
      var serieData = options.series[seriesIndex].data
      var serieDataMap = new Map()
      var serieLinkArr = []
      // console.log(open)
      // 当前根节点是展开的，那么就需要关闭所有的根节点
      if (open) {
        // 递归找到所有的link节点的target的值
        this.findLinks(serieLinkArr, srcLinkName, serieLinks, true)
        if (serieLinkArr.length) {
          serieData.forEach((sd) => serieDataMap.set(sd.name, sd))
          for (var i = 0; i < serieLinkArr.length; i++) {
            if (serieDataMap.has(serieLinkArr[i])) {
              var currentData = serieDataMap.get(serieLinkArr[i])
              currentData.category = -Math.abs(currentData.category)
              if (currentData.nodeType === 1) {
                currentData.open = false
              }
            }
          }
          serieDataMap.get(srcLinkName).open = false
          chart.setOption(options)
        }
      } else {
        // 当前根节点是关闭的，那么就需要展开第一层根节点
        this.findLinks(serieLinkArr, srcLinkName, serieLinks, false)
        if (serieLinkArr.length) {
          // console.log(serieData)
          serieData.forEach((sd) => serieDataMap.set(sd.name, sd))
          for (var j = 0; j < serieLinkArr.length; j++) {
            if (serieDataMap.has(serieLinkArr[j])) {
              var currentData = serieDataMap.get(serieLinkArr[j])
              currentData.category = Math.abs(currentData.category)
            }
          }
          serieDataMap.get(srcLinkName).open = true
          chart.setOption(options)
        }
      }
    },
    /**
     * 查找连接关系
     * @param links 返回的节点放入此集合
     * @param srcLinkName 源线的名称
     * @param serieLinks 需要查找的集合
     * @param deep 是否需要递归进行查找
     */
    findLinks (links, srcLinkName, serieLinks, deep) {
      var targetLinks = []
      serieLinks
        .filter((link) => link.source === srcLinkName)
        .forEach((link) => {
          targetLinks.push(link.target)
          links.push(link.target)
        })
      if (deep) {
        for (var i = 0; i < targetLinks.length; i++) {
          findLinks(links, targetLinks[i], serieLinks, deep)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
