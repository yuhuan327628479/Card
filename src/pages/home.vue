<template>
  <div class="page">
   <div class="page-content page-content-padding-top">
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
                <span class="searchbar-button"><f7-button  @click="searchdiaries" class="button">查询</f7-button></span>
              </div>
            </div>
            
            <div class="list media-list about-form-margin">
            <ul class="list">
              <scroller ref="myscroller" style="overflow: visible;" :on-refresh="infinite">
               <template v-for="(item, index) in diaries">
                <li class="swipeout">
                <div class="swipeout-content">
                  
                    <a v-bind:href="getdetailurl(item)" class="item-content item-link">
                    <div class="item-media">
                        <!-- <img v-bind:src="getimgurl(item.CARD_IMG_URL)" :onerror="commonimgurl" width="80" /> -->
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
                 
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" class="swipeout-delete">Delete</a>
                </div>
              </li>
               </template>
               </scroller>
            </ul>
            
          </div>

        </div>
 </div>

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
      for (
        var i = 1;
        i <= _this.pagesize && i <= _this.alldiaries.length;
        i++
      ) {
        _this.diaries.push(_this.alldiaries[i - 1]);
        console.log("开始加载：" + _this.diaries.length);
        console.log(JSON.stringify(_this.alldiaries[i - 1]));
      }
    },
    getdetailurl(obj) {
      return "/about/" + obj.Id;
    },

    infinite(done) {
      let _this = this;

      _this.$refs.myscroller.resize();
      setTimeout(() => {
        var start = _this.diaries.length + 1;
        for (
          var i = start;
          i < start + _this.pagesize && i <= _this.alldiaries.length;
          i++
        ) {
          _this.diaries.push(_this.alldiaries[i - 1]);
          console.log("开始加载：" + _this.diaries.length);
          console.log(JSON.stringify(_this.alldiaries[i - 1]));
        }
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
            _this.diaries=[];
            _this.alldiaries = res.data;
            _this.init();
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
