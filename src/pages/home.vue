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
              <template v-for="item in diaries">
                 
                    <a :href="about" class="item-link item-content">
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

              
               <!-- <div v-for="item in diaries">
                      <div @click="toDetail(item)" class="item-link item-content">
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
                                </div> 
                </div>
                 -->
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
      owner: this.$store.state.owner,
      searchkey: "",
      savesuccess: this.$store.state.savesuccess,
      savefailed: this.$store.state.savefailed
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
    toDetail(obj) {
      console.log("test");
      let _this = this;
      this.$router.push({ path: "/about" });
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
