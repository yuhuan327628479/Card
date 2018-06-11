<template>
  <f7-page>
        
        <!-- page nav header -->
         <pageheader></pageheader>
         
         <div class="searchbar-backdrop"></div>
            <div class="searchbar">
              <div class="searchbar-inner">
                <div class="searchbar-input-wrap">
                  <input v-model="searchkey" @keyup.enter="searchdiaries" type="search" placeholder="Search">
                  <i class="searchbar-icon"></i>
                  <span class="input-clear-button"></span>
                </div>
                <span class="searchbar-disable-button">Cancel</span>
              </div>
            </div>

            <div class="list media-list">
              <scroller ref="myscroller" :on-infinite="infinite">
                <template v-for="(item, index) in diaries">
                    <a v-bind:href="getdetailurl(item)" class="item-link item-content">
                      <div class="item-media">
                        <img v-bind:src="imgurl" width="80" />
                      </div>
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">{{item.TagName}}</div>
                        </div>
                        <div class="item-subtitle">{{item.KnowledgePoint}}</div>
                        <div class="item-text">{{item.DiaryContent}}</div>
                      </div>
                    </a>
                </template>
              </scroller>
              <template v-for="item in diaries">
                 
                    <a v-bind:href="getdetailurl(item)" class="item-link item-content">
                      <div class="item-media">
                        <img v-bind:src="imgurl" width="80" />
                      </div>
                      <div class="item-inner">
                        <div class="item-title-row">
                          <div class="item-title">{{item.TagName}}</div>
                        </div>
                        <div class="item-subtitle">{{item.KnowledgePoint}}</div>
                        <div class="item-text">{{item.DiaryContent}}</div>
                      </div>
                    </a>
                
                </template>

            </div>
        
  </f7-page>

</template>
<script>
import pageheader from "@/pages/pageheader";

export default {
  components: {
    pageheader
  },
  data() {
    return {
      rootapiurl: this.$store.state.rootapiurl,
      imgurl: this.$store.state.imgurl,
      diaries: [],
      alldiaries: [],
      owner: this.$store.state.owner,
      searchkey: "",
      savesuccess: this.$store.state.savesuccess,
      savefailed: this.$store.state.savefailed,
      pagesize: 5
    };
  },
  methods: {
    init() {
      let _this = this;
      _this
        .$ajax({
          method: "get",
          url: _this.rootapiurl + "api/Diary/All"
        })
        .then(function(res) {
          if (res.status == "200") {
            _this.alldiaries = res.data;
            console.log(res.data);
            _this.pushdata();
          }
          console.log(res.status);
        });
    },
    pushdata() {
      let _this = this;
      for (var i = 1; i <= _this.pagesize && i < _this.alldiaries.length; i++) {
        _this.diaries.push(_this.alldiaries[i - 1]);
      }
      _this.top = 1;
      _this.bottom = _this.diaries.length;
    },
    getdetailurl(obj) {
      return "/about/" + obj.Id;
    },

    infinite(done) {
      let _this = this;
     
      _this.$refs.myscroller.resize();
      setTimeout(() => {
        var start = _this.diaries.length + 1;
        for (var i = start; i < start + _this.pagesize && i<_this.alldiaries.length; i++) {
          _this.diaries.push(_this.alldiaries[start - 1]);
           console.log("开始加载：" + _this.diaries.length);
        }

        _this.bottom = _this.diaries.length + 1;
        done();
      }, 1500);
    },
    searchdiaries() {
      let _this = this;
      _this
        .$ajax({
          method: "get",
          url: _this.rootapiurl + "api/Diary/SearchByKey/" + _this.searchkey
          // data:_this.searchkey
        })
        .then(function(res) {
          if (res.status == "200") {
            _this.diaries = res.data;
            console.log(res.data);
          }
          console.log(res.status);
        });
    }
  },
  mounted: function() {
    let _this = this;
    _this.init();
  }
};
</script>
