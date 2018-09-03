<template>
  <div class="doubtDetail-v v-wrap">
    <FHeader :config="FHeaderCfg"></FHeader>
    <div :class="['v-body', { 'can-interact': $.isAppClient() }]" ref="vBody">
      <div class="doubt">
        <h2>九寨沟地震了，现在还开放吗？还接待散客吗？是否对外开放?</h2>
        <ul class="tag clearfix">
          <li>九寨沟风景区</li>
          <li>九寨沟风景区</li>
        </ul>
        <div class="release-time">2018-08</div>
        <dl>
          <dt>
            <img src="http://niub-dev.oss-cn-shanghai.aliyuncs.com/1535612415754144462.jpg">
            <span>篮球1号</span>
          </dt>
          <dd>
            <span class="consult">
              <em class="icon"></em>36</span>
            <span class="msg">
              <em class="icon"></em>36</span>
          </dd>
        </dl>
      </div>

      <div class="answer-list">
        <div class="item" v-for="item in answerList" v-bind:key="item.id">
          <dl>
            <dt>
              <img src="http://niub-dev.oss-cn-shanghai.aliyuncs.com/1535612415754144462.jpg">
              <span>篮球1号</span>
            </dt>
            <dd>已采纳</dd>
          </dl>
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
            <li @click="previewer(1)">
              <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                alt="">
            </li>
            <li @click="previewer(1)">
              <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                alt="">
            </li>
            <li @click="previewer(1)">
              <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                alt="">
            </li>
            <li @click="previewer(1)">
              <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                alt="">
            </li>
            <li @click="previewer(1)">
              <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                alt="">
            </li>
            <li @click="previewer(1)">
              <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/E3/FB/Cii-U1j3Ik6IfX6gAAkS0VvfyFgAAJpugB4DpoACRLp829_w1024_h0_c0_t0.jpg"
                alt="">
            </li>
          </ul>
          <div class="tool">
            <div class="date">2018-03-26</div>
            <div class="interact">
              <span class="reply">
                <em></em>24</span>
              <span class="zan">
                <em></em>24</span>
            </div>
          </div>
        </div>
      </div>
      <div class="more-answer" v-if="!finish"><span @click="productDetail">加载更多</span></div>

      <div class="relevant-question">
        <div class="mod-name">相关提问</div>
        <ul>
          <li>
            <span class="sketch"><em>问</em>伤痕重愈的九寨沟，再现山水奇幻美再现山水奇幻美再现山水奇幻美</span>
            <span class="reply">2000个回答</span>
          </li>
          <li>
            <span class="sketch"><em>问</em>伤痕重愈的九寨沟，再现山水奇幻美再现山水奇幻美再现山水奇幻美</span>
            <span class="reply">2000个回答</span>
          </li>
          <li>
            <span class="sketch"><em>问</em>伤痕重愈的九寨沟，再现山水奇幻美再现山水奇幻美再现山水奇幻美</span>
            <span class="reply">2000个回答</span>
          </li>
        </ul>
      </div>

      <div class="relevant-comment">
        <div class="mod-name">相关点评</div>
        <ul>
          <li>
            <span class="key">九寨沟风景区<em>4.5分</em></span>
            <span class="val">2234条点评</span>
          </li>
          <li>
            <span class="key">九里湖风景区<em>4.5分</em></span>
            <span class="val">2234条点评</span>
          </li>
        </ul>
      </div>
    </div>
    <footer class="do-interact" v-if="$.isAppClient()">
      <div class="do-ask">我要提问</div>
      <div class="do-answer">我要回答</div>
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
    name: 'doubtDetail',
    data() {
      return {
        FHeaderCfg: {
          title: '提问详情'
        },
        FReturnTopCfg: {},
        FPreviewerCfg: {
          state: false
        },

        answerList: [1],

        test: true,
        text: '的萨法萨法的范德萨发大水',

        ajaxing: false, // 防止重复点击
        finish: false, // 判断是否加载结束
        limit: 5, // 每次加载的数据量
        page: 1, // 页码
      }
    },
    mounted() {
      this.FReturnTopCfg = this.$refs.vBody
    },
    methods: {
      async productDetail() {
        let _this = this,
          $ = _this.$

        if (_this.ajaxing) {
          return
        }

        _this.ajaxing = true

        let res = await $.axiosPost({
          url: _this.api.test2,
          param: {
            page: _this.page
          },
          load: true
        })
        if (!res) {
          _this.ajaxing = false
          return
        }

        let limit = _this.page < 5 ? _this.limit : 1

        let data = []
        for (let i = 0; i < limit; i++) {
          data.push(1)
        }

        _this.handleData(data)
      },
      handleData(data) {
        let _this = this

        if (data.length < _this.limit) {
          _this.finish = true
        }
        _this.answerList = _this.answerList.concat(data)

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