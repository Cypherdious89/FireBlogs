/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "blogCard #1", blogCoverPhoto: "stock-1", blogDate: "July 1, 2021"},
      { blogTitle: "blogCard #2", blogCoverPhoto: "stock-2", blogDate: "July 1, 2021"},
      { blogTitle: "blogCard #3", blogCoverPhoto: "stock-3", blogDate: "July 1, 2021"},
      { blogTitle: "blogCard #4", blogCoverPhoto: "stock-4", blogDate: "July 1, 2021"},
    ], 
    editPost: null
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
    }
  },
  actions: {
  },
  modules: {
  }
});
