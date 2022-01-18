/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Vuex from 'vuex';
import store from '../../store/index'
import VueFormulate from '@braid/vue-formulate';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Vuex),
    Vue.mixin({ store: store });
  Vue.use(VueFormulate);
}
