// Import Vue
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const state={
  rootapiurl:"http://localhost:8082/",
  imgurl: "http://localhost:8082/Images/1.jpg",
  savesuccess: "保存成功",
  savefailed: "保存失败"
}

export default new Vuex.Store({
  state
  })