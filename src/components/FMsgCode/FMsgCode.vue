<template>
  <div :class="['FMsgCode', { 'un-clickable': disabled }]" @click="FClick">{{ disabled ? text + 's' : '发送验证码' }}</div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        disabled: false
      }
    },
    methods: {
      FClick() {
        let _this = this
        if (_this.disabled) {
          return
        }
        _this.$emit('FClick')
      },
      secondReduce() {
        let _this = this,
          second = 60
        _this.disabled = true
        _this.text = second
        let timer = setInterval(execute, 1000)

        function execute() {
          second--
          if (!second) {
            _this.disabled = false
            clearInterval(timer)
          } else {
            _this.text = second
          }
        }
      }
    }
  }
</script>