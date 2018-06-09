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
              <ul>
                  <li v-for="item in diaries"> 
                    <a href="#" class="item-link item-content">
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
                  </li>
              </ul>
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
      rootapiurl: "http://localhost:8082/",
      imgurl: "http://localhost:8082/Images/1.jpg",
      diaries: [],
      searchkey: "",
      savesuccess: "保存成功",
      savefailed: "保存失败"
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
            _this.diaries = res.data;
            console.log(res.data);
          }
          console.log(res.status);
        });
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
