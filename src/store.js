// Import Vue
import Vue from "vue";

import Vuex from "vuex";

import axios from "axios";

Vue.prototype.$ajax = axios;

Vue.use(Vuex);

const state = {
  rootapiurl: "http://localhost:8082/",
  imgurl: "http://localhost:8082/Images/1.jpg",
  savesuccess: "保存成功",
  savefailed: "保存失败",
  owner: null
};

const mutations = {
  changeowner(state,val) {
    state.owner = val;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
