<template>
  <div class="departure-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">
      <div class="main" ref="main">
        <div class="item" v-for="item in mainList" v-bind:key="item.id" ref="anchor">
          <div class="initial">{{ item.initial }}</div>
          <ul class="item-list">
            <li v-for="list in item.list" v-bind:key="list.id" @click="changePlace(list)">{{ list.startCityName }}</li>
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
      this.arrangeFirstLatter()
    },
    methods: {
      arrangeFirstLatter() {
        let _this = this, firstLetters = []

        let list = _this.$.stGet('departure')
        list.forEach(item => {
          firstLetters.push(item.firstLetter)
        })
        firstLetters = _this.$.arrDistinct(firstLetters)
        
        firstLetters.forEach(item => {
          _this.mainList.push({
            'initial': item,
            'list': []
          })
        })
        _this.arrangeClassify(list)
      },
      arrangeClassify(list) {
        let _this = this, mainList = _this.mainList
        
        outer:
        for (let i = 0; i < list.length; i++) {
          inner:
          for (let s = 0; s < mainList.length; s++) {
            if (list[i].firstLetter == mainList[s].initial) {
              _this.mainList[s].list.push(list[i])
              break inner
            }
          }
        }
      },
      jump(i) {
        let _this = this,
          ref = _this.$refs

        let offsetTop = ref.anchor[i].offsetTop

        _this.$.scrollYAxis({
          ele: ref.main,
          target: offsetTop
        })
      },
      changePlace(item) {
        let _this = this

        _this.$.stSet({
          'startCity': item
        })
        _this.$router.back(-1)
      }
    },
    components: {
      FHeader
    }
  }
</script>