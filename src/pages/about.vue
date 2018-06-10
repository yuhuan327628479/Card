<template>
  <f7-page>
   <f7-navbar title="手动录入" back-link="Back"></f7-navbar>
      <f7-list form>
        <f7-list-item>
          <f7-label>分类</f7-label>
        
        </f7-list-item>
      </f7-list>
        
  </f7-page>
</template>

<script>
export default {
  created(){
  },
  data() {
    return {
      selected: "0",
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
        "TagName": "",
        "DiaryContent": "",
        "KnowledgePoint": "",
        "Remark": "",
        "User": "Mark Yu"
      }
    };
  }
}
</script>