<template>
  <transition name="fade">
    <section class="FSelect" v-if="config.state">
      <div class="FSelect-mask" @click="close"></div>
      <div class="FSelect-wrap">
        <div class="FSelect-body">
          <ul ref="items">
            <li :class="{ 'checked': config.checked && item.code == config.checked.code }" v-for="item in config.items" :key="item.id"
              @click="res(item)" ref="item">
              <div>{{ item.name }}</div>  
            </li>
          </ul>
        </div>
        <div class="FSelect-close" @click="close">取消</div>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    props: ['config'],
    computed: {
      state() {
        return this.config.state
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      res(item) {
        let _this = this,
          checked = _this.config.checked

        if (checked && item.code == checked.code) {
          _this.close()
          return
        }
        _this.$emit('res', item)
      },
      scrollToTarget(checked) {
        let _this = this,
          items = _this.config.items,
          checkedCode = checked.code

        for (let i = 0; i < items.length; i++) {
          if (items[i].code == checkedCode) {
            slide(i)
            break
          }
        }

        function slide(i) {
          let refs = _this.$refs

          refs.items.scrollTop = refs.item[i].offsetTop - (refs.items.clientHeight - refs.item[i].clientHeight) / 2
        }
      }
    },
    watch: {
      state(val) {
        let _this = this,
          checked = _this.config.checked

        if (val && checked) {
          _this.$nextTick(function () {
            _this.scrollToTarget(checked)
          })
        }
      }
    }
  }
</script>