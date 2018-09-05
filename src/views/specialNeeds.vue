<template>
  <div class="specialNeeds-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div class="v-body" ref="vBody">

      <div class="text">
        <div class="mod-name">特殊需求</div>
        <group>
          <x-textarea placeholder="请输入特殊需求" :autosize="true" v-model="value"></x-textarea>
        </group>
      </div>

    </div>
    <footer>
      <div class="complete">保存</div>
    </footer>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import { XTextarea, Group } from 'vux'
  export default {
    name: 'specialNeeds',
    data() {
      return {
        FHeaderCfg: {
          title: '特殊需求'
        },
        value: ''
      }
    },
    components: {
      FHeader,
      Group,
      XTextarea
    }
  }
</script>