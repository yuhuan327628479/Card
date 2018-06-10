<template>
  <f7-page>

     <f7-navbar title="手动录入" back-link="Back"></f7-navbar>
      <f7-list form>
        <f7-list-item>
          <f7-label>分类</f7-label>
          <f7-input type="select" :value="inputdiary.TagName" @input="inputdiary.TagName = $event.target.value" >
            <template v-for="item in tagnames">
              <option v-bind:value="item.ID">{{item.Value}}</option>
            </template>
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
       
        <f7-list-item>
            <f7-label>创建人</f7-label>
            <f7-input type="text"  :value="inputdiary.User" @input="inputdiary.User = $event.target.value" a placeholder="请输入创建人" clear-button></f7-input>
        </f7-list-item>

        <f7-navbar>
          <f7-nav-left>      
            <f7-button @click="savediary">
              <i class="f7-icons">check_round</i>保存</f7-button>
            <f7-button>
              <i class="f7-icons">close</i>取消</f7-button>
          </f7-nav-left>
        </f7-navbar>
      </f7-list>

  </f7-page>
</template>

<script>
export default {
  props: ['postTitle'],
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
      inputdiary:this.itemdata
    };
  }
};
</script>
