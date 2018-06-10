<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    
    
   
    <!-- Right Panel -->
    <f7-panel class="right-panel-width" right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>


    <!-- Main View -->
    <f7-views tabs>
    <f7-view id="main-view" url="/" main tab tab-active></f7-view>
    <f7-view id="tab2" url="/about/" tab></f7-view>
    <f7-view id="tab3" url="/detail/" tab></f7-view>
    <f7-view id="tab4" url="/about/" tab></f7-view>
    <f7-view id="tab5" url="/form/" tab></f7-view>

   <!-- bottom toolbar -->
     <div class="toolbar toolbar-bottom-md tabbar tabbar-labels">
      <div class="toolbar-inner">
        <a href="#main-view" class="tab-link active">
           
             <i class="f7-icons">folder</i>
            <span class="tabbar-label">名片夹</span>
        </a>
        <a href="#tab2" class="tab-link">
            <i class="f7-icons">share</i>
            <span class="tabbar-label">他人分享</span>
        </a>
        <a href="#tab3" class="tab-link">
           <i class="f7-icons">camera</i>
            <span class="tabbar-label">拍照</span>
        </a>
        <a href="#tab4" class="tab-link">
            
            <i class="f7-icons">check_round</i>
            <span class="tabbar-label">待核对</span>
        </a>
          <a href="#tab5" class="tab-link">
           <i class="f7-icons">more</i>
            <span class="tabbar-label">更多</span>
        </a>
     </div>
     </div>
      <!-- end of bottom toolbar -->
    </f7-views>

    

  </div>

</template>

<script>
export default {};
</script>
