<template>

  <f7-page>
          <f7-navbar v-bind:title="panel_title" sliding></f7-navbar>
     
         
          <f7-list>

            <f7-list-item link="#" title="高级搜索"></f7-list-item>
            <f7-list-item link="/form/"  title="手动录入"></f7-list-item>
            <f7-list-item link="#" title="生日报表"></f7-list-item>
            <f7-list-item link="#" title="添加组"></f7-list-item>
            <f7-list-item link="#" title="已有分组"></f7-list-item>

          </f7-list>
        </f7-page>
  
</template>
<script>
export default {
  data() {
    return {
      panel_title: "选择"
    };
  }
};
</script>