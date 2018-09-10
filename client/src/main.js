// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://localhost:4000/graphql'
  })
});

Vue.use(VueApollo);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  components: { App },
  template: '<App/>'
});
