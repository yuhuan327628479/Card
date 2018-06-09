<template>
  <f7-navbar>
          <f7-nav-left>
            <a href="#" class="button">
              <i class="f7-icons">arrow_left</i>
            </a>
          </f7-nav-left>
          <f7-nav-title>{{title}}</f7-nav-title>
          <f7-nav-right>
            <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        
</template>

<script>
export default {
  data(){
    return {
      title: "名片系统"
    }
  }
};
</script>