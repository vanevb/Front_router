// import {createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
// import { createApolloProvider } from '@vue/apollo-option'

// import { setContext } from 'apollo-link-context'

// const httpLink = createHttpLink({
//     uri: 'https://apigatewaylibreria.herokuapp.com/',
// })


// const authLink = setContext((_, { headers }) => {
//     return {
//         headers: {
//             ...headers,
//             "Authorization": localStorage.getItem("access_token") || ""
//         }
//     }
// })

// const apolloClient = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// })

// const apolloProvider = new createApolloProvider({
//     defaultClient: apolloClient
// })
// no funciona esta mal
// createApp(App).use(router).use(apolloProvider).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')