<template>
  <div class="departure-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="main" ref="main">
        <div class="item" v-for="item in mainList" v-bind:key="item.id" ref="anchor">
          <div class="initial">{{ item.initial }}</div>
          <ul class="item-list">
            <li v-for="list in item.list" v-bind:key="list.id">{{ list.name }}</li>
          </ul>
        </div>
      </div>
      <div class="initial-list">
        <ul>
          <li v-for="(item, index) in mainList" v-bind:key="item.id" @click="jump(index)">{{ item.initial }}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  export default {
    name: 'departure',
    data() {
      return {
        FHeaderCfg: {
          title: '请选择出发地'
        },
        mainList: [],
        initialList: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
          'V', 'W', 'X', 'Y', 'Z'
        ]
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.mainList = [{
            initial: 'A',
            list: [{
                name: '阿里郎',
                code: 10000
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              }
            ]
          },
          {
            initial: 'B',
            list: [{
              name: '北京',
              code: 10002
            }]
          },
          {
            initial: 'C',
            list: [{
                name: '阿里郎',
                code: 10000
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              },
              {
                name: '阿歌姬',
                code: 10001
              }
            ]
          },
          {
            initial: 'F',
            list: [{
                name: '莆田',
                code: 10003
              },
              {
                name: '莆田',
                code: 10003
              },
              {
                name: '莆田',
                code: 10003
              },
              {
                name: '莆田',
                code: 10003
              },
              {
                name: '莆田',
                code: 10003
              },
              {
                name: '莆田',
                code: 10003
              },
            ]
          },
          {
            initial: 'P',
            list: [{
              name: '莆田',
              code: 10003
            }]
          }
        ]
      }, 1000)
    },
    methods: {
      jump(i) {
        let _this = this,
          ref = _this.$refs

        let offsetTop = ref.anchor[i].offsetTop

        _this.$.scrollYAxis({
          ele: ref.main,
          target: offsetTop
        })
      }
    },
    components: {
      FHeader
    }
  }
</script>