<template>
  <div class="FSearch">

    <div class="operation">
      <div class="inter">
        <span class="search-icon"></span>
        <input type="text" v-model.trim="keyWord" placeholder="请输入姓名" />
        <span class="del-icon" v-show="keyWord" @click="keyWord = ''"></span>
      </div>
      <div class="search-btn">搜索</div>
    </div>

    <div class="res-cont">
      <ul class="list">
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
        <li>张三<span><em>身份证</em>123456</span></li>
      </ul>
      <!-- <div class="loading" v-show="true">
        <em class="icon"></em>正在加载
      </div>
      <div class="no-more" v-show="true">没有更多了~</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: ''
    }
  },
}
</script>
