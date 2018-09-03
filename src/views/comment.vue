<template>
  <div class="comment-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <transition name="fade">
      <div :class="['v-body', { 'can-comment': $.isAppClient() }]" ref="vBody" v-show="!FPreviewerCfg.state">
        <div class="statistics" ref="statistics">
          <div class="fraction clearfix">
            <span class="sum">总评分：
              <em>4.9
                <strong>分</strong>
              </em>
            </span>
            <span class="guide">导游4.9</span>
            <span class="trip">行程4.9</span>
            <span class="describe">描述4.9</span>
            <span class="praise">好评98%</span>
          </div>
          <ul class="tab-navs-wrap clearfix">
            <li :class="{ 'checked': index == onIndex }" v-for="(item, index) in navs" v-bind:key="item.id" @click="changeNav(index)">{{
              item.name }}({{ item.number }})</li>
          </ul>
        </div>

        <div class="tab-conts-wrap" ref="contsWrap">
          <div class="mod-name">游客点评</div>
          <div class="tab-conts" v-show="index == onIndex" v-for="(item, index) in conts" v-bind:key="item.id">
            <div class="item" v-for="list in item" v-bind:key="list.id">
              <dl>
                <dt>
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535452480264&di=7a4eca279cdec5c833a140a3b405636c&imgtype=0&src=http%3A%2F%2Fwww.289.com%2Fup%2Farticle%2F2014%2F1031%2F111825_29258201.png"
                    alt="">
                </dt>
                <dd>
                  <span class="user-name">游客昵称游客昵称</span>
                  <span class="essence">精华</span>
                </dd>
              </dl>
              <div class="fraction clearfix">
                <span class="guide">导游4.9</span>
                <span class="trip">行程4.9</span>
                <span class="describe">描述4.9</span>
              </div>
              <div class="paragraph">
                <p :class="['seat-size', { 'part': test }]">{{ text }}</p>
                <div class="text">
                  <p>{{ text }}</p>
                  <div class="show-all" v-if="test" @click="test = false">
                    <span>展开</span>
                  </div>
                </div>
              </div>
              <ul class="photos clearfix">
                <li @click="previewer(list)">
                  <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                    alt="">
                </li>
              </ul>
              <div class="tool">
                <div class="date">2018-03-26</div>
                <div class="interact">
                  <span class="zan">
                    <em></em>24</span>
                  <span class="report">举报</span>
                </div>
              </div>
            </div>
          </div>
          <div class="loading" v-show="ajaxing && page > 1">
            <em class="icon"></em>正在加载</div>
          <div class="no-more" v-show="finish">没有更多了~</div>
        </div>
      </div>
    </transition>
    <footer class="comment-on" v-if="$.isAppClient()">
      <div>写点评</div>
    </footer>
    <FReturnTop :config="FReturnTopCfg"></FReturnTop>
    <FPreviewer :config="FPreviewerCfg" v-on:close="FPreviewerCfg.state = false"></FPreviewer>
  </div>
</template>

<script>
  import FHeader from '../components/FHeader/FHeader'
  import FReturnTop from '../components/FReturnTop/FReturnTop'
  import FPreviewer from '../components/FPreviewer/FPreviewer'
  export default {
    name: 'comment',
    data() {
      return {
        FHeaderCfg: {
          title: '全部点评'
        },
        FReturnTopCfg: {},
        FPreviewerCfg: {
          state: false
        },
        navs: [],
        conts: [],

        test: true,
        text: '首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来首先说九寨沟很值得来',

        statisticsHeight: 0,
        contsWrapHeight: 0,

        finish: false, // 判断是否加载结束
        onIndex: -1, // tab切换索引值
        ajaxing: false, // 是否正在加载中
        limit: 10, // 每次加载的数据量
        page: 1, // 页码
        criticalPoint: 200, // 加载临界点 
      }
    },
    created() {
      let _this = this

      setTimeout(function () {
        _this.navs = [{
            id: '100',
            name: '全部',
            number: 233
          },
          {
            id: '200',
            name: '全部',
            number: 2333
          },
          {
            id: '300',
            name: '全部',
            number: 233
          },
          {
            id: '400',
            name: '全部',
            number: 2333
          },
          {
            id: '500',
            name: '全部',
            number: 2333
          },
          {
            id: '600',
            name: '全部',
            number: 2333
          },
          {
            id: '700',
            name: '全部',
            number: 233
          },
          {
            id: '800',
            name: '全部',
            number: 233
          }
        ]
        _this.navs.forEach(function () {
          _this.conts.push([])
        })
        _this.$nextTick(function () {
          _this.statisticsHeight = _this.$refs.statistics.clientHeight
        })

        _this.changeNav(0)
      }, 0)
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.vBody
      this.bindScroll()
    },
    methods: {
      bindScroll() {
        let _this = this,
          vBody = _this.$refs.vBody


        vBody.addEventListener('scroll', function () {
          let maxScroll = _this.statisticsHeight + _this.contsWrapHeight - vBody.clientHeight

          if (maxScroll - vBody.scrollTop <= _this.criticalPoint && !_this.ajaxing && !_this.finish) {
            _this.productDetail()
          }
        })
      },
      changeNav(i) {
        let _this = this

        if (i == _this.onIndex) {
          return
        }

        _this.onIndex = i
        _this.finish = false
        _this.page = 1

        _this.conts[i] = []
        _this.productDetail()
      },
      async productDetail() {
        let _this = this,
          $ = _this.$,
          load = _this.page == 1

        _this.ajaxing = true

        let res = await $.axiosPost({
          url: _this.api.test2,
          param: {
            url: document.location.href,
            page: _this.page
          },
          load: load
        })
        if (!res) {
          _this.ajaxing = false
          return
        }

        let limit = _this.page < 3 ? _this.limit : 5

        let data = []
        for (let i = 0; i < limit; i++) {
          data.push(1)
        }

        _this.handleData(data)
      },
      handleData(data) {
        let _this = this,
          index = _this.onIndex

        if (data.length < _this.limit) {
          _this.finish = true
        }

        data = _this.conts[index].concat(data)
        _this.conts.splice(index, 1, data)

        _this.$nextTick(function () {
          _this.contsWrapHeight = _this.$refs.contsWrap.clientHeight
        })

        _this.ajaxing = false
        _this.page++
      },
      previewer(item) {
        let _this = this,
          imgIndex = Math.floor(Math.random() * 15)

        Object.assign(_this.FPreviewerCfg, {
          state: true,
          activeIndex: imgIndex,
          imgs: [
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471589386361552.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471610801337121.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471619631454231.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471630905765623.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471637782772625.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471644966301223.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471652420162237.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471659359450747.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471666400140663.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471673847553720.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471691916163374.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471700229462437.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471709146356773.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471716496161432.jpg',
            'http://yfqc-dev.oss-cn-shanghai.aliyuncs.com/1534471723900535567.jpg',
          ],
          desc: [
            '第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张第1张',
            '第2张', '第3张', '第4张', '第5张', '第6张', '第7张', '', '第9张', '第10张', '第11张', '第12张', '第13张', '第14张',
            '第15张'
          ]
        })
      }
    },
    components: {
      FHeader,
      FReturnTop,
      FPreviewer
    }
  }
</script>