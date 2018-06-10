<template>
  <f7-page>
   <f7-navbar title="手动录入" back-link="Back"></f7-navbar>
      <f7-list form>
        <f7-list-item>
          <f7-label>分类</f7-label>
           <f7-input type="select" :value="inputdiary.TagName" @input="inputdiary.TagName = $event.target.value" >
              <option  :value="item.ID" v-for="item in tagnames">{{item.Value}}</option>
          </f7-input>
        </f7-list-item>

        <f7-list-item>
          <f7-label>知识点</f7-label>
          <f7-input type="text" :value="inputdiary.KnowledgePoint" @input="inputdiary.KnowledgePoint = $event.target.value" placeholder="请输入知识点" clear-button></f7-input>
        </f7-list-item>

        <f7-list-item>
          <f7-label>详细描述</f7-label>
          <f7-input type="textarea" :value="inputdiary.DiaryContent" @input="inputdiary.DiaryContent = $event.target.value" placeholder="请输入详细描述" clear-button></f7-input>
        </f7-list-item>

        <f7-list-item>
            <f7-label>备注</f7-label>
            <f7-input type="textarea" :value="inputdiary.Remark" @input="inputdiary.Remark = $event.target.value" placeholder="请输入备注" clear-button></f7-input>
        </f7-list-item>
       
        
      </f7-list>
        
  </f7-page>
</template>

<script>
export default {
  created() {
    let _this = this;
    var id = _this.$f7Route.params.Id;
    console.log(id);
    this.init(id);
  },
  data() {
    return {
      rootapiurl: this.$store.state.rootapiurl,
      selected: null,
      tagnames: [
        { ID: "0", Value: "请选择分类" },
        { ID: "1", Value: "C#.NET" },
        { ID: "2", Value: "ASP.NET" },
        { ID: "3", Value: "VB.NET" },
        { ID: "4", Value: "前端" },
        { ID: "5", Value: "数据库" },
        { ID: "6", Value: "英语" },
        { ID: "7", Value: "日常生活" },
        { ID: "8", Value: "其他" }
      ],
      inputdiary: {
        TagName: "",
        DiaryContent: "",
        KnowledgePoint: "",
        Remark: "",
        User: ""
      }
    };
  },
  methods: {
    init(id) {
      let _this = this;
      _this
        .$ajax({
          method: "get",
          url: _this.rootapiurl + "api/Diary/GetByID?id=" + id
        })
        .then(function(res) {
          if (res.status == "200") {
            _this.inputdiary = res.data;
            _this.tagnames.forEach(element => {
              if(element.Value==_this.inputdiary.TagName){
                _this.selected=element.ID;
              }
              else
              {
                _this.selected="8";
              }
            });
            console.log(res.data);
          }
          console.log(res.status);
        });
    }
  }
};
</script>