<template>
  <div class="demo-v v-wrap">
    <div class="v-body" ref="vBody">
      <div @click="FSelectCfg.state = true">{{ FSelectCfg.checked ? FSelectCfg.checked.name : '请选择' }}</div>
    </div>
    <FSelect :config="FSelectCfg" v-on:close="FSelectCfg.state = false" v-on:res="resFSelect"></FSelect>
  </div>
</template>

<script>
  import FSelect from '../components/FSelect/FSelect'
  export default {
    name: 'demo',
    data() {
      return {
        FSelectCfg: {
          state: false,
          items: []
        }
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.FSelectCfg.items = [
          {
            name: '张三',
            code: 3
          },
          {
            name: '李四',
            code: 4
          },
          {
            name: '王五',
            code: 5
          },
          {
            name: '赵六',
            code: 6
          },
          {
            name: '孙七',
            code: 7
          },
          {
            name: '操八',
            code: 8
          },
          {
            name: '老九',
            code: 9
          },
        ]
      }, 200)
    },
    methods: {
      resFSelect(item) {
        let _this = this
        _this.$set(_this.FSelectCfg, 'checked', item)

        _this.$nextTick(function () {
          _this.$set(_this.FSelectCfg, 'state', false)
        })
      }
    },
    components: {
      FSelect
    }
  }
</script>