<template>
  <div class="FControlQuantity">
    <div :class="['reduce', { 'disabled': !value }]" @click="reduceQuantity('value')"></div>
    <input class="number" disabled type="text" v-model.trim="value">
    <div :class="['add', { 'disabled': value == 9 }]" @click="addQuantity('value')"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    },
    methods: {
      reduceQuantity(key) {
        let _this = this,
          that = _this[key]
        if (!that) {
          return
        }
        _this[key]--
      },
      addQuantity(key) {
        let _this = this,
          that = _this[key]
        if (that == 9) {
          return
        }
        _this[key]++
      }
    },
  }
</script>